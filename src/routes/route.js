const express = require('express');
const router = express.Router();

//-------------------------------------------Assignment----------------------------------------------------


let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]


router.post('/status', (req, res) => {

    let votingAge = req.query.votingAge;

    let filterarr = persons.filter(x => x.age > votingAge)

    filterarr.forEach(x => x.votingStatus = true)

    res.send(filterarr)
})






//---------------------------------Class Notes-----------------------------------------------------------//
// // QUERY vs PARAMS
// // Params ( path params ):-  used to load different items/pages based on a variable value in url
// // params variable name  is not visible in  the url


// router.get("/wiki/:countryName", function(req, res) {

//     // ...
//     // hey nodejs , go and get me the data for countryName
//     res.send( {data: "something data"} )
// })



// // router.get("/wiki/india", function(req, res) {
// //     // ...
// //     res.send( {data: "something india"} )
// // })


// // router.get("/wiki/bangladesh", function(req, res) {
// //     // ...
// //     res.send( {data: "something bangaldesh"} )
// // })


// // router.get("/wiki/nepal", function(req, res) {
// //     // ...
// //     res.send( {data: "something nepal nepal"} )
// // })


// router.get("/:productName/p/:itemId", function(req, res) {
//     let product = req.params.productName
//     let itemId= req.params.itemId
//     // ...
//     // hey nodejs, go and get me the data for hte variable ( its value) product 
//     res.send( {data: product} )
// })

// // QUERY params:-
// //  use case: to make filters / searches
// // variable name is visible in the url itself


// //a get request with 2 query params
// // localhost:3000/get-query-1?myCoolVar=soemthing&xyz=functionUp
// router.get("/get-query-1", function(req, res) {
//     let data = req.query
//     let var1= data.myCoolVar
//     let var2= data.xyz

//     console.log( data)

//     res.send( {data: data, status: true} )
// })

// // take marks in req.query in a variable named "marks" and send "pass" if marks>40 else send "fail"
// router.get( "/get-query-2", function (req, res){
//     let marks= req.query.marks
//     let result = marks >40 ? "pass" : "fail"
//     //ternary operator
//     res.send( {data: result , status: true})
// })

// //query params ( as well as path params ) can be sent in post request as well
// router.post( "/post-query-1", function (req, res){
//     let data= req.query
//     console.log( data)
//     res.send( {data: data , status: true})
// })

// //filter out all the numbers that are greater than "input" ( input is received from query params)
// let myArr = [23, 45, 67, 281394, 32424, 423, 24, 42323, 4, 234, 12, 34]

// router.post( "/post-query-2", function (req, res){
//     let input= req.query.input

//     // let finArr= myArr.filter ( ele => ele>input )
//     let finalArr= []
//     for( i=0 ; i<myArr.length ; i++){
//         if ( myArr[i] > input )     finalArr.push( myArr[i])
//     }
//     res.send( {data: finalArr , status: true})
// })


module.exports = router;