CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "schools" 
CREATE TABLE actors
(
    id int
    AUTO_INCREMENT,
  Charname varchar
    (30) NOT NULL,
  coolness_points INTEGER NOT NULL,
  attitude VARCHAR
    (30) NOT NULL,
  PRIMARY KEY
    (id)
);

    -- Inserted a set of records into the table
    INSERT INTO actors
        (Charname, coolness_points, attitude)
    VALUES
        ("John", 5, "fun");
    INSERT INTO actors
        (Charname, coolness_points, attitude)
    VALUES
        ("Adam", 4, "sad");
    INSERT INTO actors
        (Charname, coolness_points, attitude)
    VALUES
        ("James", 8, "funny");
    INSERT INTO actors
        (Charname, coolness_points, attitude)
    VALUES
        ("Harry", 9, "awesome");
    INSERT INTO actors
        (Charname, coolness_points, attitude)
    VALUES
        ("Mike", 6, "sad");