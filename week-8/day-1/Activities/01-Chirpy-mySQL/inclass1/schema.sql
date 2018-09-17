CREATE DATABASE sequelize_chirpy;
USE sequelize_chirpy;

CREATE TABLE chirps
(
  id int NOT NULL
  AUTO_INCREMENT,
	author varchar
  (255) NOT NULL,
  chirp varchar
  (255) NOT NULL,
  createdAT timestamp not null default current_timestamp,
	PRIMARY KEY
  (id)
);