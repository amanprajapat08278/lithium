const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/auth")

router.post('/users', userController.resisterPeople );
router.post('/login', userController.loginUser)

router.get('/users/:userId', middleware.loginCheck, userController.fetchUser)

router.post('/users/:userId', middleware.loginCheck, userController.updateApi)

router.delete('/users/:userId', middleware.loginCheck, userController.deleteApi)


module.exports = router;