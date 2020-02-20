const dbConnection = require('../db_connection.js')

const insertFavActivityData = async (id_name, id_activity) => {
  const response = await dbConnection.query(
    'INSERT INTO FAVOURITES (user_id, content_id) VALUES ($1, $2)',
    [id_name, id_activity]
  )
  return await response
}

module.exports = { insertFavActivityData }
