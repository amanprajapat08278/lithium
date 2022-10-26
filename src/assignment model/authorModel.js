const mongoose = require('mongoose');

const dataFormat = new mongoose.Schema(
    {
        author_id:Number,
        author_name:String,
        age:Number,
        address:String
    }
)

module.exports = mongoose.model("author", dataFormat)