const mongoose = require('mongoose');

const dataFormat = new mongoose.Schema(
    {
        name: String,
        author_id: Number,
        price: Number,
        ratings: Number
    }
)

module.exports = mongoose.model("Books_assig", dataFormat)