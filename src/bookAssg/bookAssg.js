const mongoose = require('mongoose');

const bookData = new mongoose.Schema(
    {
        bookName :{
            type : String,
            required: true
        },
        authorName : String,
        category : String,
        year : Number
    }
)

module.exports = mongoose.model('Books-mongo', bookData)