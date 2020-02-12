const express = require("express");
const router = express.Router();
const { getUserLogin, getUserLibrary } = require("./database/queries/getData");

// Put all API endpoints under '/api'
// test to demonstrate back end is connected
router.get("/api/test", (req, res) => {
  res.json("back end is sending some test data to front end");
  console.log(`the test data was sent`);
});

//find user by email and get hashed pw from db
router.post("/api/login", (req, res) => {
  //check naming conventions, i've guessed
  const email = req.body.email;
  const password = req.body.password;
  getUserLogin(email);
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
