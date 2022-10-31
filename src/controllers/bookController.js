const bookModel = require("../models/bookModel")


const bookCreate = async function(req, res){
    let value = req.body;
    let result = await bookModel.create(value)
    res.send(result)
}

const bookGet = async function(req, res){
    let result = await bookModel.find()
    res.send(result)
}

const avilableBook = async function(req, res){
    let result = await bookModel.find({sales:{$gt : 10}}).select({_id:0, createdAt:0, updatedAt:0})
    res.send(result)
}

module.exports = {bookCreate, bookGet, avilableBook}