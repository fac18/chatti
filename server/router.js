const express = require("express");
const router = express.Router();
const { getUserLogin, getUserLibrary } = require("./database/queries/getData");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET


// Put all API endpoints under '/api'
// test to demonstrate back end is connected
router.get("/api/test", (req, res) => {
  res.json("back end is sending some test data to front end");
  console.log(`the test data was sent`);
});

//find user by email and get hashed pw from db
router.post("/api/login", (req, res) => {
  //check naming conventions, i've guessed
  console.log(req.body)
  const email = req.body.email;
  const password = req.body.password;
  getUserLogin(email).then(result => {
    bcrypt.compare(password , result[0].password).then(result => {
      if(result === true) {
        const token = jwt.sign(email, secret)
        res.status(201)
        .cookie('user',token, {maxAge:3600})
        .send("cookie exists");
      } else {
        res.status(401).end()
      }
    }).catch(console.log);
  }).catch(console.log);

  
  //getUserLogin will return a promise resolving to the password
  //run bcrypt.compare to check they are the same
  //if true: use jwt.sign to create token, and use it to set cookie in res headers
  //if false: ?send specific error message for front end to give feedback
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

module.exports = router;
