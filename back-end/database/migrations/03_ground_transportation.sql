DROP TABLE IF EXISTS ground_transportation CASCADE;

CREATE TABLE ground_transportation (
  id SERIAL PRIMARY KEY NOT NULL,
  category TEXT NOT NULL,
  price MONEY NOT NULL
);