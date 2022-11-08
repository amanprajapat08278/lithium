const jwt = require("jsonwebtoken")
const { isValidObjectId } = require("mongoose")
const userModel = require("../model/userModel")

const loginCheck = function(req, res, next){
    try{
        let token = req.headers["x-auth-token"]
        if(!token){res.status(400).send("Header is not avilable")}
        
        let decode = jwt.verify(token, "aman prajapat")
        req.decode = decode;
        next()
    }catch(err){
        res.status(401).send(err.message)
    }
    
}

const autherisation = async function(req, res, next){
    try{
        let userId = req.params.userId;
        if(!userId){res.status(400).send("Please enter the user Id")};
        //if(!isValidObjectId(userId)){res.status(400).send("Please enter a valid user Id")};
      
        let user = await userModel.findOne({_id:userId})
        if(!user){res.status(404).send("User not found")}
      
        if(req.decode.userId !=userId){
            res.status(403).send("You dont have permission to do this action")
        }
        
        next()
    }catch(err){
        res.status(500).send(err.message)
    }
    
}
module.exports ={loginCheck, autherisation}