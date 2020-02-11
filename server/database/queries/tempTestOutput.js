const getData = require("./getData.js");

const { getUserLibrary } = getData;

getUserLibrary("Georgia1@hotmail.com")
  .then(result => console.log(result))
  .catch(error => console.log(error));
