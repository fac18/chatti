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
  "child_gender" VARCHAR(20),
  "notification_frequency" VARCHAR(20) NOT NULL,
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
  "lower_age_range" SMALLINT NOT NULL,
  "upper_age_range" SMALLINT NOT NULL,
  "listening_attention" BOOLEAN,
  "understanding" BOOLEAN,
  "speaking" BOOLEAN,
  "social_interaction" BOOLEAN
);

CREATE TABLE "reviews" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER,
  "content_id" INTEGER,
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


INSERT INTO users (name, email, password , child_name, child_birthday, child_gender, notification_frequency, notification_time, weekly_goal) VALUES
('Georgia Allister', 'Georgia1@hotmail.com', '$2y$12$9EMXzDShXSL1Qn4SyFkpdeIE7Loigvl5EgxwNkuSDU/uIbS6m5nky', 'Freddie', '2016/04/16', 'male','daily' ,'17:00:00', 80 ),
('Tina Turner', 'tina@simplythebest.com', '$2y$12$vTtU4NZgi/XBRYBi64cm6OQpw2PNnfdxpCf7OEeZrNxF3WevD576q', 'Tinetta', '2017/11/01', 'female', 'daily', '09:00:00', 70 );

INSERT INTO content (title, video_url, image_url, instructions, duration, lower_age_range, upper_age_range, listening_attention, understanding, speaking, social_interaction) VALUES 
('Clapperoo', 'https://www.youtube.com/embed/62QEl385HBQ','../../assets/images/clapperoo.jpg','Sit down so you are on the same level as Freddie. Clap your hands together and encourage him to do the same.  Reach forward and clap your hands against Freddie''s. Clap your hands together again, and repeat! For an extra challenge, try counting numbers or saying the alphabet at the same time', 10, 3,5,'true','false','false','true'),
('Clapperoo2', 'https://www.youtube.com/embed/62QEl385HBQ','../../assets/images/clapperoo.jpg','Sit down so you are on the same level as Freddie. Clap your hands together and encourage him to do the same.  Reach forward and clap your hands against Freddie''s. Clap your hands together again, and repeat! For an extra challenge, try counting numbers or saying the alphabet at the same time', 10, 3,5,'false','true','false','false');

INSERT INTO reviews (user_id, content_id, stars) VALUES 
(1, 1, 3);

INSERT INTO favourites (user_id, content_id) VALUES
(1, 1);

INSERT INTO user_libraries (user_id, content_id) VALUES 
(1, 1),
(1, 2);


COMMIT;
