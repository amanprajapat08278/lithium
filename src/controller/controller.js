
const books = require("../models/book")
const authors = require("../models/author");




//--------------Assignment 3 mongoDB-------------------------//

const book_post = async (req, res)=>{
    let value = req.body;
    let results = await books.create(value)
    res.send(results)
}

const book_get = async (req, res)=>{
    
    let results = await books.find()
    res.send(results)
}

const author_post = async (req, res)=>{
    let value = req.body;
    let results = await authors.create(value)
    res.send(results)
}

const author_get = async (req, res)=>{
    
    let results = await authors.find()
    res.send(results)
}

//2nd

const listOfBooks = async function(req, res){
      let obj = await authors.findOne({author_name : "Chetan Bhagat" }).select({author_id:1, _id:0})
      let results = await books.find(obj)
   
      res.send(results)
}

//3rd  
const twoStates = async function(req, res){
    let obj = await books.findOneAndUpdate({name:"Two states"},{$set :{price : 100}}).select({author_id:1, price:1, _id:0})
    let value = await authors.find({author_id : obj.author_id}).select({author_name:1, price : 1, _id:0})
    let up = await books.findOne({name:"Two states"}).select({price:1, _id:0})
    value.push(up)
   
    res.send(value);
};



//4th

const priceBook = async function(req, res){
    let obj = await books.find({price : {$gte:50, $lte : 100}}).select({author_id:1, _id:0})
    
    let an = await authors.find(
        obj.forEach((x)=>{
            let a = x.author_id
            {author_id:a}
        })
    ).select({author_name : 1, _id:0})
    res.send(an)
}





module.exports.book_get = book_get;
module.exports.book_post = book_post;

module.exports.author_get = author_get;
module.exports.author_post = author_post;

module.exports.listOfBooks = listOfBooks
module.exports.twoStates = twoStates

module.exports.priceBook = priceBook