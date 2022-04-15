CREATE DATABASE mainapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message VARCHAR(255) NOT NULL
);

INSERT INTO users(firstName, lastName, email, message)
    VALUES('Tester', 'Alpha', 'tester@pica.com', 'Mensagem de Tester'),
          ('Brabo', 'Connor', 'braboconnor@gmail.com', 'Mensagem de Brabo'),
          ('Rei', 'Kuduairo', 'reidokuduairo@gmail.com', 'Mensagem de Rei do Kuduairo'),
          ('Kevin', 'Love', 'kevin@love.com', 'Mensagem de Kevin'),
          ('Max', 'Brian', 'brianmax@gmail.com', 'Mensagem de Brian'),
          ('Steven', 'Adams', 'steview@gmail.com', 'Mensagem de Steven')