const assgAuthorModel = require("../assignment model/authorModel")
const assgBookModel = require("../assignment model/bookModel")



const getAssgBook = async function(req, res){
    let res = assgBookModel.find()
    res.send(res)
}

const postAssgBook = async function(req, res){
    let value = req.body
    let res = assgBookModel.create(value)
    res.send(res)
}