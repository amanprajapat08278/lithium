const jwt = require("jsonwebtoken")

const loginCheck = function(req, res, next){
    let token = req.headers["x-auth-token"]
    if(!token){
        return res.send("Header is not avilable")
    }
    
    let decode = jwt.verify(token, "aman prajapat")
    req.decode = decode;
    next()
}

const autherisation = function(req, res, next){
    let userId = req.params.userId;
    if(req.decode.userId !=userId){
        return res.send("You cant update details")
    }
    next()
}
module.exports ={loginCheck, autherisation}