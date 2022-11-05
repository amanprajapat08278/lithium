const express = require('express');
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express();
const route = require("./router/router")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', route)

mongoose.connect("mongodb+srv://amanprajapat82780:Lucky82780@newproject.3qdy8y3.mongodb.net/Aman82780?retryWrites=true&w=majority", {
    useNewUrlParser: true
}).then(()=>console.log("Mongoose : connect ho gya hu")).catch((err)=>console.log(err))

app.listen(3000, ()=>{
    console.log("running on port", 3000)
})  