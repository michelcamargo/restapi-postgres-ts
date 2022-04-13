CREATE DATABASE mainapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

INSERT INTO users(name, email)
    VALUES('tester', 'tester@pica.com'),
          ('arnold', 'swawodeaw@gmail.com');