const dbConnection = require('../db_connection.js')

//dbConnection.query will return a promise
//second parameter needs to be an array which will be used for the $1,$2 etc (protects from injection)
//see documentation: https://node-postgres.com/features/queries

const getUserLogin = async userEmail => {
  const response = await dbConnection
    .query('SELECT password FROM users WHERE email = $1', [userEmail])
    .then(result => result.rows)
  return response
}

const getUserId = async userEmail => {
  const response = await dbConnection
    .query('SELECT id FROM users WHERE email = $1', [userEmail])
    .then(result => result.rows[0].id)
  return response
}

const getUserLibrary = userEmail => {
  return dbConnection
    .query(
      'SELECT * FROM content WHERE id IN (SELECT content_id FROM user_libraries WHERE user_id = (SELECT id FROM users WHERE email = $1 LIMIT 1));',
      [userEmail]
    )
    .then(result => result.rows)
}

//inserts new user data into database
//gets id of new user (auto assigned by db)
//adds content items 1 and 2 to user library so they already have some material to see
const InsertUserData = async userData => {
  const response = await dbConnection
    .query(
      'INSERT INTO USERS (name,email,password,child_name,child_birthday,child_gender,notification_frequency, notification_time, weekly_goal) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);',
      Object.values(userData)
    )
    .then(result => {
      console.log('insert user feedback ', result)
      dbConnection
        .query('SELECT id FROM users WHERE email = $1 LIMIT 1;', [
          userData.email,
        ])
        .then(result => result.rows[0].id)
        .then(userId => {
          dbConnection.query(
            'INSERT INTO user_libraries (user_id, content_id) VALUES ($1,$2),($1,$3);',
            [userId, 1, 2]
          )
        })
    })
    .catch(console.log)

  return await response
}

const getUserData = id => {
  return dbConnection
    .query(
      'SELECT id, name, email, child_name, child_birthday, child_gender FROM users WHERE id = $1',
      [id]
    )
    .then(result => result.rows[0])
}

//checks if a user email is alredy in db
//returns false if user is not present, and vice versa
//this is used on sign up form to avoid user signing up twice
const getUser = email => {
  return dbConnection
    .query('SELECT email from users WHERE email = $1', [email])
    .then(result => {
      if (result.rowCount === 0) {
        return false
      } else {
        return true
      }
    })
}

const getFavourites = userId => {
  return dbConnection
    .query('SELECT * from content WHERE id IN ( SELECT content_id from favourites WHERE user_id = $1)', [userId])
    .then(result => {
     return result.rows; 
    })
}

module.exports = {
  getUserLogin,
  getUserLibrary,
  InsertUserData,
  getUserData,
  getUserId,
  getUser,
  getFavourites
}
