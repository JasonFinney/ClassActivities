-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --

-- Creates the table "favorite_foods" within favorite_db --
-- Make a string column called "food" which cannot contain null --
-- Make an numeric column called "score" --
CREATE TABLE favorite_foods
(
  FOOD VARCHAR(30) NOT NULL,
  SCORE INTEGER(10)
);

-- Make a string column called "song" which cannot contain null --
-- Make a string column called "artist" --
-- Make an integer column called "score" --
CREATE TABLE favorite_songs
(
  SONG VARCHAR(50) NOT NULL,
  ARTIST VARCHAR(50),
  score INTEGER(10)
);

-- Create a numeric column called "id" which automatically increments and cannot be null --
-- Create a string column called "movie" which cannot be null --
-- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
-- Make an integer column called "score" --
-- Set the primary key of the table to id --
CREATE TABLE favorite_movies
(
  id INT NOT NULL
  AUTO_INCREMENT,
  movie VARCHAR
  (50) NOT NUll,
  five_times boolean not null default 0,
  score INTEGER
  (10),
  PRIMARY KEY
  (id)
);
