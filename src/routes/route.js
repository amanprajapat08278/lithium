const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")

const middleware = require("../middleware/midwr1")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", bookController.bookCreate)
router.get("/getBook",  bookController.bookGet)
router.post("/createUser", userController.userCreate)
router.get("/getUser",  userController.userGet)
router.get("/avilableBook", bookController.avilableBook)

module.exports = router;