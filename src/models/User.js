const mongoose = require('mongoose');
const { use } = require('../routes/route');



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    balance:{
        type:Number,
        default:100
    },
    address:String,
    age:Number,
    gender:{
        type:String,
        enum:["male", "female", "other"]
    },
    isFreeAppUse:{
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model("User1",userSchema)