
// Isk andr api ko pass kea hai, and make sure form k action mai b api pass honi chahye...
// And js file k andr bs lisnerer and inn filess k path etc...

const express = require('express');
const {registerUser, getUser}= require("./UserControler");
const router = express.Router();
// const Path = require('path');


router.route("/register").post(registerUser)
router.route("/register").get(getUser)
// router.route("/product").delete(registerUser)
   

module.exports = router;