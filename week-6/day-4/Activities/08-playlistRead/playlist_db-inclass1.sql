DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE fav_songs
(
    id INT NOT NULL
    AUTO_INCREMENT,
  song VARCHAR
    (45) NOT NULL,
  artist VARCHAR
    (45) NOT NULL,
  album VARCHAR
    (45) NOT NULL,
  PRIMARY KEY
    (id)
);

    INSERT INTO fav_songs
        (song, artist, album)
    VALUES
        ("Bohemian Rhapsody", "Queen", "A Night at the Opera");

    INSERT INTO fav_songs
        (song, artist, album)
    VALUES
        ("We Will Rock You", "Queen", "News of the World");

    INSERT INTO fav_songs
        (song, artist, album)
    VALUES
        ("Another One Bites the Dust", "Queen", "The Game");

    INSERT INTO fav_songs
        (song, artist, album)
    VALUES
        ("Killer Queen", "Queen", "Sheer Heart Attack");

    INSERT INTO fav_songs
        (song, artist, album)
    VALUES
        ("Don't Stop Me Now", "Queen", "Jazz");

