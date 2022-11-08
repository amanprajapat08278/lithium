const userModel = require("../model/userModel")
const jwt = require("jsonwebtoken")


const resisterApi = async function(req, res){
    try {
        let bodyData = req.body;
            let results = await userModel.create(bodyData)
            res.send(results)
    } catch (error) {
        res.status(400).send(error.message)
    }
}


const loginApi = async function(req, res){
    try{
        let email = req.body.emailId
        let pass = req.body.password
        if(!email || !pass){res.status(400).send("Please type email and password")}
        let user = await userModel.findOne({emailId:email, password: pass})
        if(!user){res.status(404).send("Login Failed")}
        else{
            let token = jwt.sign({userId:user._id, email:user.emailId}, "aman prajapat")
            res.setHeader('token', token)
            res.send({status: true, token:token})
        }
    }catch(err){
        res.status(500).send(err.message)
    }
    
}


const fetchUser = async function(req, res){
    try{
        let userId = req.params.userId
        let userData = await userModel.findById(userId)
        res.send(userData)
    }catch(err){
        res.status(500).send(err.message)
    }
    
}

const updateUser = async function(req, res){
    try{
        let data = req.body;
        if(!data){res.status(400).send("please enter data to update the details")}
        let userId = req.params.userId
        let result = await userModel.findByIdAndUpdate(userId, {$set:data}, {new:true})
        res.send(result)
    }catch(err){
        res.status(500).send(err.message)
    }
    
}

const deleteUser = async function(req, res){
    try{
        let userId = req.params.userId
        let result = await userModel.findByIdAndUpdate(userId, {$set:{isDeleted:true}}, {new:true})
        res.send(result)
    }catch(err){
        res.status(500).send(err.message)
    }
    
}
module.exports = {resisterApi, loginApi, fetchUser, updateUser, deleteUser}