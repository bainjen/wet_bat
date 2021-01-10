DROP TABLE IF EXISTS quotes CASCADE;

CREATE TABLE quotes (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES customers(id) NOT NULL, 
  departure_id INTEGER REFERENCES airports(id) NOT NULL, 
  destination_id INTEGER REFERENCES airports(id) NOT NULL, 
  departure_date DATE NOT NULL, 
  return_date DATE NOT NULL, 
  ground_transportation_id INTEGER REFERENCES ground_transportation(id), 
  number_travellers SMALLINT NOT NULL, 
  price MONEY NOT NULL
  );
