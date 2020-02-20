const express = require('express')
const router = express.Router()
const {
  getUserLogin,
  getUserLibrary,
  InsertUserData,
  getUserData,
  getUserId,
  getUser,
  getFavourites,
} = require('./database/queries/getData')

const { insertFavActivityData } = require('./database/queries/insertData')

const { insertContent } = require('./database/queries/postData')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

//find user by email and get hashed pw from db
//sets cookie which expires in 24h (express cookies use milliseconds)
//consider no expiration?
//successful password check sends confirmation to FE allowing redirect
router.post('/api/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  getUserLogin(email)
    .then(result => {
      bcrypt
        .compare(password, result[0].password)
        .then(result => {
          if (result === true) {
            getUserId(email)
              .then(result => {
                const token = jwt.sign(result, secret)
                res
                  .status(201)
                  .cookie('user', token, { maxAge: 1000 * 60 * 60 * 24 })
                  .send('cookie exists')
              })
              .catch(console.log)
          } else {
            res.status(401).end()
          }
        })
        .catch(console.log)
    })
    .catch(console.log)
})

router.post('/api/signup', (req, res) => {
  let allData = req.body
  const passwordtobehashed = req.body.password
  const newUserEmail = req.body.email

  bcrypt
    .hash(passwordtobehashed, 12)
    .then(result => {
      allData.password = result
      InsertUserData(allData)
        .then(result => {
          console.log(result)
          //should add some handling here to check insert was successful
          getUserId(newUserEmail)
            .then(result => {
              const token = jwt.sign(result, secret)
              res
                .status(201)
                .cookie('user', token, { maxAge: 1000 * 60 * 60 * 24 })
                .send('cookie exists')
            })
            .catch(console.log)
        })
        .catch(console.log)
    })
    .catch(console.log)
})

router.get('/api/settings', (req, res) => {
  res
    .status(201)
    .cookie('user', 'ayuboo', { maxAge: 0 })
    .send('cookie deleted')
})

router.get('/api/userdata', (req, res) => {
  const codedCookie = req.cookies.user
  if (codedCookie) {
    const decodedCookie = jwt.verify(codedCookie, secret)
    getUserData(decodedCookie)
      .then(result => {
        res.json(result)
      })
      .catch(console.log)
  }
})

router.post('/api/checkuser', (req, res) => {
  const email = req.body.email
  getUser(email)
    .then(result => {
      res.json(result)
    })
    .catch(console.log)
})

router.post('/api/userlibrary', (req, res) => {
  const email = req.body.email
  getUserLibrary(email)
    .then(result => res.json(result))
    .catch(console.log)
})

router.post('/api/activity', (req, res) => {
  const nameId = req.body.id_name
  const activityId = req.body.id_activity
  insertFavActivityData(nameId, activityId)
    .then(result => res.json(result))
    .catch(console.log)
})

router.post('/api/favourites', (req, res) => {
  const userId = req.body.userId
  getFavourites(userId)
    .then(result => res.json(result))
    .catch(console.log)
})

router.post('/api/addcontent', (req, res) => {
  insertContent(req.body)
    .then(console.log)
    .catch(console.log)
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})

module.exports = router
