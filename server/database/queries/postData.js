const dbConnection = require('../db_connection.js')

const insertContent = async contentDetails => {
  const response = await dbConnection.query(
    'INSERT INTO content (title,video_url,image_url,instructions,duration,lower_age_range,upper_age_range,listening_attention,understanding,speaking,social_interaction) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11);',
    Object.values(contentDetails)
  )
  return await response
}

module.exports = {
  insertContent,
}
