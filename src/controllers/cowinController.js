let axios = require("axios")

//1st
let getByPin = async function (req, res) {
    try {
        let id = req.query.district_id
        let date = req.query.date
        
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

//2nd
let getWether = async function (req, res) {
    try {
        let country = req.query.q
        let token = req.query.appid;
        let option = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${token}`
        }
        let result = await axios(option)
        //2.1
        // res.status(200).send({status:true, msg:result.data})

        //2.2
        let onlyTemp = result.data.main.temp
        res.status(200).send({ status: true, Temp: onlyTemp })

    } catch (err) {
        res.status(500).send({ statsu: false, msg: err.message })
    }
}

//2.3
let arrayOfCities = async function (req, res) {
    try {
        let token = req.query.appid;
        let arr = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        let finalArr = []
        for (let i of arr) {
            let option = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${i}&appid=${token}`
            }
            let result = await axios(option)
            finalArr.push({ city: i, temp: result.data.main.temp })
        }
        finalArr.sort((a, b) => a.temp - b.temp)
        res.status(200).send({ status: true, msg: finalArr })
    } catch (err) {
        res.status(500).send({ statsu: false, msg: err.message })
    }


}


//3rd

const getAllMemes = async function(req, res){
    try{
        let option = {
        method:"get",
        url:"https://api.imgflip.com/get_memes"
    }
    let result = await axios(option)
    res.status(200).send({ status: true, msg: result.data })
    }catch(err){
        res.status(500).send({ statsu: false, msg: err.message })
    }
}

const createMeme = async function(req, res){

    try{
        let queryData = req.query;
        let {template_id, text0, text1, username, password} = queryData
        
    let option = {
        method:"post",
        url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    }
    let result = await axios(option)
    res.status(200).send({ status: true, msg: result.data })
  }catch(err){
    res.status(500).send(err.message)
  }
   
}
module.exports = { getByPin, getWether, arrayOfCities, getAllMemes, createMeme }