const { default: mongoose } = require("mongoose");



const dataFormat = new mongoose.Schema(
    {
        name:String,
        author_id:{
            type:Number,
            required:true
        },
        price:Number,
        ratings:Number
    }
)


module.exports = mongoose.model("booksData", dataFormat)