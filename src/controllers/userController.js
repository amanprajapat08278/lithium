
const userModel = require("../models/userModel")

const userCreate = async function(req, res){
    let value = req.body;
    let result = await userModel.create(value)
    res.send(result)
}

const userGet = async function(req, res){
    let result = await userModel.find()
    res.send(result)
}


module.exports = {userCreate, userGet}