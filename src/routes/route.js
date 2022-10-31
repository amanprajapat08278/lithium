const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherContoller = require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthor", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)


router.get("/getPublisher", publisherContoller.getPublisher)
router.post("/creatPublisher", publisherContoller.creatPublisher)

router.put('/books', bookController.postApi)
router.put('/rating', bookController.ratingApi)
module.exports = router;