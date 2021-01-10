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

const pool = new Pool(dbConfig);

pool.connect(console.log("connected to the db"));
