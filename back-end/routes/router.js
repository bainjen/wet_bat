require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const { Pool } = require("pg");

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

router.post("/quotes", cors(corsOptions), (req, res) => {
  console.log("req", req.body.numPeople);
});

module.exports = router;
