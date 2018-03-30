CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    userName TEXT,
    password TEXT
);

INSERT INTO Users (userName, password)
VALUES ('megcall', 'bunnynibble');