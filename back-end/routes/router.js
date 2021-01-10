require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const { Pool } = require("pg");

const { calcDistanceKM, calcQuotePrice } = require("../helpers/helpers");

const dbConfig = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

const pool = new Pool(dbConfig);

// QUERIES
const getAllCustomers = async () => {
  const client = await pool.connect(console.log("connected to the db"));
  const query = "SELECT * FROM customers";
  return await client
    .query(query)
    .then((resp) => resp.rows)
    .catch((err) => `Error at getAllCustomers ${err}`);
};

const getAllAirports = async () => {
  const client = await pool.connect(console.log("connected to the db"));
  const query = "SELECT * FROM airports";
  return await client
    .query(query)
    .then((resp) => resp.rows)
    .catch((err) => `Error at getAllAirports ${err}`);
};

const getAllGroundTransportation = async () => {
  const client = await pool.connect(console.log("connected to the db"));
  const query = "SELECT * FROM ground_transportation";
  return await client
    .query(query)
    .then((resp) => resp.rows)
    .catch((err) => `Error at getAllGroundTransportation ${err}`);
};

const getAllQuotes = async () => {
  const client = await pool.connect(console.log("connected to the db"));
  const query = "SELECT * FROM quotes";
  return await client
    .query(query)
    .then((resp) => resp.rows)
    .catch((err) => `Error at getAllQuotes ${err}`);
};

const insertNewCustomer = async (firstName, lastName, phone, email) => {
  const client = await pool.connect(console.log("connected to the db"));
  const query =
    "insert into customers ( first_name, last_name, phone, email) values ($1, $2, $3, $4) returning *";
  return await client
    .query(query, [firstName, lastName, phone, email])
    .then((resp) => resp.rows)
    .catch((err) => `Error at insertNewCustomer ${err}`);
};
const insertNewQuote = async (
  customerId,
  departureId,
  destinationId,
  departureDate,
  returnDate,
  groundTransportationId,
  numTravellers,
  price
) => {
  const client = await pool.connect(console.log("connected to the db"));
  const query =
    "INSERT INTO quotes (customer_id, departure_id, destination_id, departure_date, return_date, ground_transportation_id, number_travellers, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *";
  return await client
    .query(query, [
      customerId,
      departureId,
      destinationId,
      departureDate,
      returnDate,
      groundTransportationId,
      numTravellers,
      price,
    ])
    .then((resp) => resp.rows)
    .catch((err) => `Error at insertNewQuote ${err}`);
};

// ROUTES
router.get("/customers", cors(corsOptions), (req, res) => {
  getAllCustomers()
    .then((resp) => res.json(resp))
    .catch((err) => console.log(err.stack));
});

router.get("/airports", cors(corsOptions), (req, res) => {
  getAllAirports()
    .then((resp) => res.json(resp))
    .catch((err) => console.log(err.stack));
});

router.get("/transportation", cors(corsOptions), (req, res) => {
  getAllGroundTransportation()
    .then((resp) => res.json(resp))
    .catch((err) => console.log(err.stack));
});

router.get("/quotes", cors(corsOptions), (req, res) => {
  getAllQuotes()
    .then((resp) => res.json(resp))
    .catch((err) => console.log(err.stack));
});

router.post("/quotes", cors(corsOptions), async (req, res) => {
  const {
    numPeople,
    depFlight,
    retFlight,
    departureDate,
    returnDate,
    transportOption,
    firstName,
    lastName,
    email,
  } = req.body;

  const customers = await getAllCustomers().then((resp) => resp);
  const airports = await getAllAirports().then((resp) => resp);
  const transportation = await getAllGroundTransportation().then(
    (resp) => resp
  );

  const departureAirport = airports.find((d) => d.id === depFlight);
  const returnAirport = airports.find((d) => d.id === retFlight);
  const distance = calcDistanceKM(
    departureAirport.latitude,
    departureAirport.longitude,
    returnAirport.latitude,
    returnAirport.longitude
  );
  const { price } = transportation.find((d) => d.id === transportOption);
  // price is a string
  const convertedTransportPrice = Number(price.replace("$", ""));
  const quotePrice = calcQuotePrice(
    distance,
    convertedTransportPrice,
    numPeople
  );

  // checking to see if customer id exists in db
  const selectedCustomer = customers.find((d) => d.email === email);
  let customerId;
  if (selectedCustomer) {
    customerId = selectedCustomer.id;
  } else {
    const newCustomer = await insertNewCustomer(
      firstName,
      lastName,
      null,
      email
    ).then((resp) => resp[0]);
    customerId = newCustomer.id;
  }

  const newQuote = await insertNewQuote(
    customerId,
    depFlight,
    retFlight,
    departureDate,
    returnDate,
    transportOption,
    numPeople,
    quotePrice
  ).then((resp) => resp[0]);

  await getAllQuotes()
    .then((resp) => res.json(resp))
    .catch((err) => console.log(err.stack));
});

module.exports = router;
