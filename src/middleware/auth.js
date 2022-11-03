const jwt = require("jsonwebtoken");

const loginCheck = function(req, res, next){

    let token = req.headers['x-auth-token']
    let decode = jwt.verify(token, "login api")
    if(!decode){
        return res.send("Login Failed!")
    }else{
        next()
    }
}

module.exports = {loginCheck}