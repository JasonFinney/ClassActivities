/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

CREATE DATABASE day_planner_db;
USE day_planner_db;

CREATE TABLE plans
(
    id int NOT NULL
    AUTO_INCREMENT,
plan varchar
    (255) NOT NULL,
PRIMARY KEY
    (id)
);

    INSERT INTO plans
        (plan)
    VALUES
        ('Plan to fight a ninja.');
