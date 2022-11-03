const express = require('express');
const router = express.Router();
const controller = require("../controllers/controller")
const middleware = require("../middlewares/middleware")

router.post('/createProduct', controller.createProductApi )
router.get('/getProduct', controller.getProductApi)

router.post('/createUser1', middleware.userMiddleware, controller.createUserApi )
router.get('/getUser1',  controller.getUserApi)

router.post('/createOrder', middleware.userMiddleware, controller.createOrderApi )
router.get('/getOrder',   controller.getOrderApi)





module.exports = router;