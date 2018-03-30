CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    img TEXT,
);

INSERT INTO Users (username, password, img)
VALUES ('megcall', 'bunnynibble', 'https://pbs.twimg.com/profile_images/965036344216039424/NQOVAYZ-_400x400.jpg');