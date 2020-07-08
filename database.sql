CREATE TABLE "artists" (
    "id" SERIAL PRIMARY KEY,
    "artist_name" varchar(80) not null,
    "year_born" date
);

CREATE TABLE "songs" (
	"id" SERIAL PRIMARY KEY,
	"title" varchar(80) not null,
	"song_length" varchar(80),
	"date_released" date
);

INSERT INTO "songs" ("title", "song_length", "date_released")
VALUES ('Smells Like Teen Spirit', '2:00', '1/1/1991');

INSERT INTO "songs" ("title", "song_length", "date_released")
VALUES ('U Can''t Touch This', '2:50', '1/1/1990');