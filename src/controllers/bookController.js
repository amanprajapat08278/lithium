const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel");
const AuthorModel = require("../models/authorModel");





//-------------------------------------------------validation----------------------------------------------//
const createBook = async function (req, res) {
    let value = req.body

    const { author, publisher } = value;

    if (!author) {
        res.send("Please Enter the Author ID")
    }
    if (!publisher) {
        res.send("Please Enter the publisher ID")
    }


    //if author id wrong---------------------------------------------
    let sum = 0;
    let result = await AuthorModel.find()
    result.forEach(x => {

        if (x._id != author) {
            sum += 1
        };

    });
    if (sum == result.length) {
        return res.send("please enter a valid author id");

    };

    //if publisher id wrong------------------------------------------
    let total = 0;
    let arr = await publisherModel.find()
    arr.forEach(x => {

        if (x._id != publisher) {
            total += 1
        };

    });
    if (total == arr.length) {
        return res.send("please enter a valid publisher id")

    };

    let results = await bookModel.create(value)
    res.send(results)
}

const getBooksData = async function (req, res) {
    let results = await bookModel.find()
    res.send(results)
}

const getBooksWithAuthorDetails = async function (req, res) {
    let results = await bookModel.find().populate('author').populate('publisher')
    res.send(results);
}


const postApi = async function(req, res){     
    
    //let results = await bookModel.updateMany({$publisher:{$name :"Penguin"}},{$set :{isHardCover:false}}).populate('author').populate('publisher')
    let value = await bookModel.find().populate('author').populate('publisher')
    let filterarr = value.filter(x=>(x.publisher.name =="Penguin")|| (x.publisher.name =="HarperCollins"))
    filterarr.forEach(x=>x.isHardCover=true)
    res.send(filterarr)
};

const ratingApi = async function(req, res){
    let value = await bookModel.find().populate('author').populate('publisher')
    let filterarr = value.filter(x=>x.author.rating >3.5)
    let newarr = filterarr.forEach(y=>y.price=y.price+10)
    res.send(filterarr)
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.postApi = postApi;
module.exports.ratingApi = ratingApi