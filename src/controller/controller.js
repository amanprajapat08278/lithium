const userModel = require("../model/userModel")
const jwt = require("jsonwebtoken")


const resisterApi = async function(req, res){
    let bodyData = req.body;
    let results = await userModel.create(bodyData)
    res.send(results)
}

const loginApi = async function(req, res){
    let email = req.body.emailId
    let pass = req.body.password
    let user = await userModel.findOne({emailId:email, password: pass})
    if(!user){res.send("Login Failed")}
    else{
        let token = jwt.sign({userId:user._id, email:user.emailId}, "aman prajapat")
        res.setHeader('token', token)
        res.send({status: true, token:token})
    }
}

const fetchUser = async function(req, res){
    let userId = req.params.userId
    let userData = await userModel.findById(userId)
    res.send(userData)
}

const updateUser = async function(req, res){
    let data = req.body;
    let userId = req.params.userId
    let result = await userModel.findByIdAndUpdate(userId, {$set:data}, {new:true})
    res.send(result)
}

const deleteUser = async function(req, res){
    let userId = req.params.userId
    let result = await userModel.findByIdAndUpdate(userId, {$set:{isDeleted:true}}, {new:true})
    res.send(result)
}
module.exports = {resisterApi, loginApi, fetchUser, updateUser, deleteUser}