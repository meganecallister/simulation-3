CREATE TABLE IF NOT EXISTS Posts (
    id SERIAL PRIMARY KEY,
    post TEXT
);

INSERT INTO Posts (post)
VALUES ('I am sometimes a bunny...');