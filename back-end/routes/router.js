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
// const insertNewQuote = async () => {
//   const client = await pool.connect(console.log("connected to the db"));
//   const query = "INSERT INTO quotes (customer_id, departure_id, destination_id, departure_date, return_date, ground_transportation_id, number_travellers, price)
//   VALUES (1, 1, 12, '09/12/2021', '09/23/2021', 4, 1, '$1827.54') "
// }

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

// pull customer data and check whether they exist
// if they don't exist, add customer to db
// grab customer id
// calculate price (distance, transport, numPeople)
// input data as a new quote

router.post("/quotes", cors(corsOptions), async (req, res) => {
  const {
    numPeople,
    depFlight,
    retFlight,
    departureDate,
    returnDate,
    transportationOption,
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
  console.log(distance);
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

  // let airports;
  // Promise.all([getAllAirports().then((resp) => resp)]).then((all) => {
  //   airports = all[0];
  // });

  // console.log(airports);
  // console.log(email);
  // console.log("req people", req.body.numPeople);
  // console.log("req departure", req.body.depFlight);
  // console.log("req returnFlight", req.body.retFlight);
  // console.log("req depDate", req.body.departureDate);
  // console.log("req retDate", req.body.returnDate);
  // console.log("req transport", req.body.transportOption);
  // console.log("req first name", req.body.firstName);
  // console.log("req last name", req.body.lastName);
});

module.exports = router;
