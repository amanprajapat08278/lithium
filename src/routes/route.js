const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

//--------------------------------Assignment------------------------------------------------------------------//

//1st
router.get('/movies', (req, res)=>{
    let arrofmov = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins", "Rakshya bandhan", "Loveyatri"]
     res.send(arrofmov)
})

//2nd
// router.get('/movies/:indexNumber', (req,res)=>{
//     let copy = req.params;
//     let index = Number(copy.indexNumber);
//     let arrofmov = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins", "Rakshya bandhan", "Loveyatri"]
//     res.send(arrofmov[index])
// })

//3rd
router.get('/movies/:indexNumber', (req,res)=>{
    let copy = req.params;
    let index = Number(copy.indexNumber);
    let arrofmov1 = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins", "Rakshya bandhan", "Loveyatri"]

    if(index>arrofmov1.length-1){
        res.send("Please use a valid index")
    }else{
        res.send(arrofmov1[index])
    }
    
})


//4th
router.get('/films', (req,res)=>{
    let objofmov = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       },{
        id: 5,
        name: "Rakshya bandhan"
       },{
        id: 6,
        name: "Loveyatri"
       }]
    res.send(objofmov)
})

// 5th
router.get('/films/:filmId', (req,res)=>{
    let objofmov = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       },{
        id: 5,
        name: "Rakshya bandhan"
       },{
        id: 6,
        name: "Loveyatri"
       }]
    let filmidobj = req.params;
    let filmid = Number(filmidobj.filmId)

    if(filmid>objofmov.length-1){
        res.send("No movie exists with this id")
    }else{
        res.send(objofmov[filmid].name)
    }
})

module.exports = router;