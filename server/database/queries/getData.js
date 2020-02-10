const dbConnection = require("../db_connection.js");

//will return a promise
//second parameter needs to be an array which will be used for the $1,$2 etc (protects from injection)
//see documentation: https://node-postgres.com/features/queries
const getUserLibrary = userEmail => {
  return dbConnection
    .query(
      "SELECT * FROM content WHERE id IN (SELECT content_id FROM user_libraries WHERE user_id = (SELECT id FROM users WHERE email = $1));",
      [userEmail]
    )
    .then(result => result.rows);
};

module.exports = { getUserLibrary };
