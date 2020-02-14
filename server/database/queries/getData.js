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
      "SELECT * FROM content WHERE id IN (SELECT content_id FROM user_libraries WHERE user_id = (SELECT id FROM users WHERE email = $1));",
      [userEmail]
    )
    .then(result => result.rows);
};

const InsertUserData = userData => {
  return dbConnection
    .query(
      "INSERT INTO USERS (name,email,password,child_name,child_birthday,child_gender,notification_frequency, notification_time, weekly_goal) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);",
      Object.values(userData)
    )
    .then(result => result);
};

const getUserData = userEmail => {
  return dbConnection
    .query(
      "SELECT name, child_name, child_birthday, child_gender FROM users WHERE email = $1",
      [userEmail]
    )
    .then(result => result.rows[0]);
};

module.exports = { getUserLogin, getUserLibrary, InsertUserData, getUserData };
