const mongoose = require('mongoose');
//const ObjectId = mongoose.Schema.Types.ObjectId




const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author1",
        required:true
    }, 
    price: Number,
    ratings: Number,
    publisher:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Publisher",
        required:true
    },
    isHardCover : {
        type:Boolean,
        default:false
    }


});


module.exports = mongoose.model('LibraryBook', bookSchema)
