const { default: mongoose } = require("mongoose");
const publisherModel = require("../models/publisherModel");
const { get } = require("../routes/route");


const creatPublisher = async function(req, res){
    let value = req.body;
    let results = await publisherModel.create(value)
    res.send(results)
}

const getPublisher = async function(req, res){
    let result =  await publisherModel.find()
    res.send(result)
}

module.exports.creatPublisher = creatPublisher
module.exports.getPublisher = getPublisher