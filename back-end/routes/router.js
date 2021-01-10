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

const getAllCustomers = async () => {
  const client = await pool.connect(console.log("connected to the db"));
  const query = "SELECT * FROM customers";
  return await client
    .query(query)
    .then((resp) => resp.rows)
    .catch((err) => `Error at getAllCustomers ${err}`);
};

getAllCustomers().then((resp) => console.log(resp));
