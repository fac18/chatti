const dbConnection = require("../db_connection.js");

//dbConnection.query will return a promise
//second parameter needs to be an array which will be used for the $1,$2 etc (protects from injection)
//see documentation: https://node-postgres.com/features/queries

const getUserLogin = userEmail => {
  return dbConnection
    .query("SELECT password FROM users WHERE email = $1", [userEmail])
    .then(result => result.rows);
};

const getUserLibrary = userEmail => {
  return dbConnection
    .query(
      "SELECT * FROM content WHERE id IN (SELECT content_id FROM user_libraries WHERE user_id = (SELECT id FROM users WHERE email = $1 LIMIT 1));",
      [userEmail]
    )
    .then(result => result.rows);
};

//inserts new user data into database
//gets id of new user (auto assigned by db)
//adds content items 1 and 2 to user library so they already have some material to see
const InsertUserData = async userData => {
  const response = await dbConnection
    .query(
      "INSERT INTO USERS (name,email,password,child_name,child_birthday,child_gender,notification_frequency, notification_time, weekly_goal) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);",
      Object.values(userData)
    )
    .then(result => result)
    .catch(console.log);

  const userId = await dbConnection
    .query("SELECT id FROM users WHERE email = $1 LIMIT 1;", [userData.email])
    .then(result => result.rows[0].id)
    .catch(console.log);

  dbConnection
    .query(
      "INSERT INTO user_libraries (user_id, content_id) VALUES ($1,$2),($1,$3);",
      [userId, 1, 2]
    )
    .then(console.log)
    .catch(console.log);

  return await response;
};

const getUserData = userEmail => {
  return dbConnection
    .query(
      "SELECT name, email, child_name, child_birthday, child_gender FROM users WHERE email = $1",
      [userEmail]
    )
    .then(result => result.rows[0]);
};

module.exports = { getUserLogin, getUserLibrary, InsertUserData, getUserData };
