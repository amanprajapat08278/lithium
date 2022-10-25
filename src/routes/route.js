const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//------------Assignment API ---------------------//

router.get("/getBooks", BookController.getBooks)
router.post("/A", BookController.A)
router.get("/B", BookController.B)
router.post("/C", BookController.C)
router.post("/D", BookController.D)
router.get("/E", BookController.E)
router.get("/F", BookController.F)




// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

module.exports = router;