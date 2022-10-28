const express = require('express');
const router = express.Router();
const controller = require("../controller/controller")

router.get('/getBook', controller.book_get)

router.post('/postBook', controller.book_post)

router.get('/getAuthor', controller.author_get)

router.post('/postAuthor', controller.author_post)

router.get('/listOfBooks', controller.listOfBooks)

router.get('/twostate', controller.twoStates);

router.get('/priceBook', controller.priceBook)



module.exports = router;