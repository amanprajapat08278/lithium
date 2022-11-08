const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
      {
        firstName: {
                type:String,
                required:true
        },
        lastName : {
                type:String,
                required:true
        },
        mobile: {
                type:Number,
                required:true,
                unique:true
        },
        emailId : {
                type:String,
                required:true,
                unique:true
        },
        password : {
                type:String,
                required:true
        },
        gender : {
                type : String,
                enum: ["male","female", "others"],
        },
        isDeleted:{
                type:Boolean,
                default:false
        },
        age : {
                type:Number,
                required:true
        }
})

module.exports = mongoose.model("resisterpeople", userSchema)