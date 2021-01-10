DROP TABLE IF EXISTS airports CASCADE;

CREATE TABLE airports (
  id SERIAL PRIMARY KEY NOT NULL,
  airport_name TEXT NOT NULL, 
  iata_code TEXT NOT NULL, 
  latitude DOUBLE PRECISION, 
  longitude DOUBLE PRECISION, 
  iso_country TEXT, 
  municipality TEXT
);



