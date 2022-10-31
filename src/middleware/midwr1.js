let ip = require("ip");
const timespan = require("jsonwebtoken/lib/timespan");

const timeC = function(req, res, next){

    let date = new Date()              
    let CT = date.toLocaleString()          //   10/31/2022, 10:28:49 PM
    let IP = ip.address()                
    let url = req.url                      

    console.log(`${CT} , ${IP} , ${url}`)
    next()
}


module.exports.timeC = timeC