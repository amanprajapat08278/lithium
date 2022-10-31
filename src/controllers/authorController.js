const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let value = req.body
    let result = await AuthorModel.create(value)
    res.send(result)
}

const getAuthorsData= async function (req, res) {
    let result = await AuthorModel.find()
    res.send(result)
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData