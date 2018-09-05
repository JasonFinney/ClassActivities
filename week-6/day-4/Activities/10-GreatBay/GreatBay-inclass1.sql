DROP DATABASE IF EXISTS auction_db;

CREATE DATABASE auction_db;

USE auction_db;

CREATE TABLE itemsTable (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NULL,
  highestBid DECIMAL(10,2) NULL,
  currentBid DECIMAL(10,2) NULL,
  PRIMARY KEY (id)
);