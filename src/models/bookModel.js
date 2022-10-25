const mongoose = require('mongoose');


const dataFormat = new mongoose.Schema({
    bookName : {
        type : String,
        required : true
    },
    price : {
        type : String,
    },
    year : {
        type : Number,
        default : 2021
    },
    
    authorName : String,
    totalPages : Number,
    stockAvailable : Boolean,
    tags : []
})

module.exports = mongoose.model("Books", dataFormat)