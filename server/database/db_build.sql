BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS content CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS favourites CASCADE;
DROP TABLE IF EXISTS user_libraries CASCADE;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL,
  "email" VARCHAR(100) NOT NULL,
  "password" VARCHAR(100) NOT NULL,
  "child_name" VARCHAR(100) NOT NULL,
  "child_birthday" DATE NOT NULL,
  "child_gender" VARCHAR(20) NOT NULL,
  "mon" BOOLEAN,
  "tue" BOOLEAN,
  "wed" BOOLEAN,
  "thu" BOOLEAN,
  "fri" BOOLEAN,
  "sat" BOOLEAN,
  "sun" BOOLEAN,
  "notification_time" TIME,
  "weekly_goal" SMALLINT
);

CREATE TABLE "content" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(50),
  "video_url" VARCHAR(100),
  "image_url" VARCHAR(100) NOT NULL,
  "instructions" VARCHAR(1000) NOT NULL,
  "duration" SMALLINT NOT NULL,
  "type" VARCHAR(25) NOT NULL,
  "lower_age_range" SMALLINT NOT NULL,
  "upper_age_range" SMALLINT NOT NULL
);

CREATE TABLE "reviews" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER,
  "content_id" INTEGER,
  "review_text" VARCHAR(1000),
  "stars" SMALLINT
);

CREATE TABLE "favourites" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER,
  "content_id" INTEGER
);

CREATE TABLE "user_libraries" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER,
  "content_id" INTEGER,
  "date_added" DATE NOT NULL DEFAULT CURRENT_DATE
);

ALTER TABLE "reviews" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "reviews" ADD FOREIGN KEY ("content_id") REFERENCES "content" ("id");

ALTER TABLE "favourites" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "favourites" ADD FOREIGN KEY ("content_id") REFERENCES "content" ("id");

ALTER TABLE "user_libraries" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_libraries" ADD FOREIGN KEY ("content_id") REFERENCES "content" ("id");


INSERT INTO users (name, email, password , child_name, child_birthday, child_gender, mon, tue, wed ,thu ,fri ,sat, sun, notification_time, weekly_goal) VALUES
('Georgia Allister', 'Georgia1@hotmail.com', 'arsenal123', 'Freddie', '2016/04/16', 'male', 'true', 'true', 'true', 'false', 'false', 'true', 'true', '17:00:00', 80 );

INSERT INTO content (title, video_url, image_url, instructions, duration, type, lower_age_range, upper_age_range) VALUES 
('Clapperoo', 'https://www.youtube.com/embed/62QEl385HBQ','../../assets/images/clapperoo.jpg','Sit down so you are on the same level as Freddie. Clap your hands together and encourage him to do the same.  Reach forward and clap your hands against Freddie''s. Clap your hands together again, and repeat! For an extra challenge, try counting numbers or saying the alphabet at the same time', 10, 'clapping game', 3,5 );

INSERT INTO reviews (user_id, content_id, review_text, stars) VALUES 
(1, 1, 'It was great!', 3);

INSERT INTO favourites (user_id, content_id) VALUES
(1, 1);

INSERT INTO user_libraries (user_id, content_id) VALUES 
(1, 1);


COMMIT;
