const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")


router.get("/getByPin", CowinController.getByPin)

router.get("/getWhether", CowinController.getWether)

router.get("/arrayOfCities", CowinController.arrayOfCities)

router.get("/getAllMemes", CowinController.getAllMemes)

router.post("/createMeme", CowinController.createMeme)


module.exports = router;