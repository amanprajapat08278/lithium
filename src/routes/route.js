const express = require('express');
const router = express.Router();
const funwel = require('../logger/logger.js')
const fundate = require('../util/helper.js')
const funvalidator = require('../validator/formatter.js')
const underscore = require('underscore')
const lodas = require('lodash');

router.get('/test-me', function (req, res) {
    console.log(funwel.welcome)
    console.log(`${fundate.printDate()}-${fundate.printMonth()}`)
    console.log(fundate.getBatchInfo())
    console.log(funvalidator.trim)
    console.log(funvalidator.changetoUpperCase)
    console.log(funvalidator.changetoLowerCase)

     //1st
    const arr = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
    const res1 = lodas.chunk(arr, 3)
    console.log(res1)
    
    //2nd
    const oddarr = [1,3,5,7,9,11,13,15,17,19]
    const res2 = lodas.tail(oddarr)
    console.log(res2)
    
    //3rd
    let a1 = [1,3,2,3]
    let a2 = [0,5,6,3]
    let a3 = [3,4,5]
    let a4 = [6,7,8,1,10]
    let a5 = [0,1]
    const res3 = lodas.union([...a1, ...a2, ...a3, ...a4, ...a5])
    console.log(res3)

    //4th
    let arrtoObj = [["a",1],["b",2]]
    const res4 = lodas.fromPairs(arrtoObj)
    console.log(res4)

    res.send('My first ever api!')
});

module.exports = router;

