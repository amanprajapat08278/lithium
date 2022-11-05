const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
      {
        firstName: String,
        lastName : String,
        mobile: Number,
        emailId : String,
        password : String,
        gender : {
                type : String,
                enum: ["male","female", "others"],
        },
        isDeleted:{
                type:Boolean,
                default:false
        },
        age : Number
})

module.exports = mongoose.model("resisterpeople", userSchema)