const express = require('express');
const router = express.Router();
//const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
const bookAssg = require("../bookAssg/bookAssg")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)


router.post('/book-data', async function (req, res){
    let bookData1 = req.body;
    let result = await bookAssg.create(bookData1)
    res.send(result)
})

router.get("/get-book", async function (req, res){
    let result = await bookAssg.find()
    res.send(result)
})

module.exports = router;