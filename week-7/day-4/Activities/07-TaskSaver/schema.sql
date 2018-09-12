CREATE DATABASE task_saver_db;
USE task_saver_db;

CREATE TABLE tasks
(
    id int NOT NULL
    AUTO_INCREMENT,
task varchar
    (255) NOT NULL,
PRIMARY KEY
    (id)
);

    INSERT INTO tasks
        (task)
    VALUES
        ('Pick up milk.');
    INSERT INTO tasks
        (task)
    VALUES
        ('Mow the lawn.');
    INSERT INTO tasks
        (task)
    VALUES
        ('Call Shannon back.');
