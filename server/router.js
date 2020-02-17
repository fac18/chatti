const express = require("express");
const router = express.Router();
const {
  getUserLogin,
  getUserLibrary,
  InsertUserData,
  getUserData
} = require("./database/queries/getData");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

// Put all API endpoints under '/api'
// test to demonstrate back end is connected
router.get("/api/test", (req, res) => {
  res.json("back end is sending some test data to front end");
  console.log(`the test data was sent`);
});

//find user by email and get hashed pw from db
//sets cookie which expires in 24h (express cookies use milliseconds)
//consider no expiration?
//successful password check sends confirmation to FE allowing redirect
router.post("/api/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  getUserLogin(email)
    .then(result => {
      bcrypt
        .compare(password, result[0].password)
        .then(result => {
          if (result === true) {
            const token = jwt.sign(email, secret);
            res
              .status(201)
              .cookie("user", token, { maxAge: 1000 * 60 * 60 * 24 })
              .send("cookie exists");
          } else {
            res.status(401).end();
          }
        })
        .catch(console.log);
    })
    .catch(console.log);
});

router.post("/api/signup", (req, res) => {
  let allData = req.body;
  const passwordtobehashed = req.body.password;
  const newUserEmail = req.body.email;

  bcrypt
    .hash(passwordtobehashed, 12)
    .then(result => {
      allData.password = result;
      InsertUserData(allData).then(result => {
        console.log(result);
        const token = jwt.sign(newUserEmail, secret);
        res
          .status(201)
          .cookie("user", token, { maxAge: 1000 * 60 * 60 * 24 })
          .send("cookie exists");
      });
    })
    .catch(console.log);
});

//add JWT verification to this step for extra security
router.post("/api/userdata", (req, res) => {
  const email = req.body.email;
  getUserData(email)
    .then(result => res.json(result))
    .catch(console.log);
});

router.post("/api/userlibrary", (req, res) => {
  const email = req.body.email;
  getUserLibrary(email)
    .then(result => res.json(result))
    .catch(console.log);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/build/index.html"));
});

module.exports = router;
