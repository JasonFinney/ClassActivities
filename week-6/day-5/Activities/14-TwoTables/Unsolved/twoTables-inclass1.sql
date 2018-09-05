DROP DATABASE IF EXISTS top_songsDB;
CREATE database top_songsDB;

USE top_songsDB;

CREATE TABLE top5000
(
    position INT NOT NULL,
    artist VARCHAR(100) NULL,
    song VARCHAR(100) NULL,
    year INT NULL,
    raw_total DECIMAL(10,4) NULL,
    raw_usa DECIMAL(10,4) NULL,
    raw_uk DECIMAL(10,4) NULL,
    raw_eur DECIMAL(10,4) NULL,
    raw_row DECIMAL(10,4) NULL,
    PRIMARY KEY (position)
);

CREATE TABLE top_albums
(
    position INT NOT NULL,
    artist VARCHAR(100) NULL,
    album VARCHAR(100) NULL,
    year INT NULL,
    raw_total DECIMAL(10,4) NULL,
    raw_usa DECIMAL(10,4) NULL,
    raw_uk DECIMAL(10,4) NULL,
    raw_eur DECIMAL(10,4) NULL,
    raw_row DECIMAL(10,4) NULL,
    PRIMARY KEY (position)
);
SELECT *
FROM top_albums;
SELECT *
FROM top5000;


A query which returns all data for songs sung by a specific artist

select * from top5000 where artist='Bryan Adams';
select count(*) from top5000 where artist='Bryan Adams';
select artist, count(*) from top5000 where artist='Bryan Adams';
select artist, count(*) from top5000 group by artist;

A query which returns all artists who appear within the top 5000 more than once

select artist, count(*) from top5000 where artist like '%James%' group by artist order by count(*) DESC;
select artist, count(*) from top5000 group by artist having count(*) > 1  order by count(*) DESC;

A query which returns all data contained within a specific 
range


A query which searches for a specific song in the top 5000 and returns the data for it