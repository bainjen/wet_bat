DROP TABLE IF EXISTS airports CASCADE;

CREATE TABLE airports (
  id SERIAL PRIMARY KEY NOT NULL,
  ident TEXT, 
  type TEXT, 
  name TEXT NOT NULL, 
  latitude DOUBLE PRECISION, 
  longitude DOUBLE PRECISION, 
  elevation INT, 
  continent TEXT, 
  iso_country TEXT, 
  iso_region TEXT, 
  municipality TEXT, 
  scheduled_service TEXT, 
  gps_code TEXT, 
  iata_code TEXT, 
  local_code TEXT, 
  home_link TEXT, 
  wikipedia_link TEXT, 
  keywords TEXT
);
