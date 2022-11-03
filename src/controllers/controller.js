const { default: mongoose } = require("mongoose");
const productModel = require("../models/Product")
const userModel = require("../models/User")
const orderModel = require("../models/Order")

//-------------------------------------Product Controller-------------------------------------//
//1st create

const createProductApi = async function (req, res){
    let data = req.body;
    let result = await productModel.create(data)
    res.send(result)
}

//2nd get

const getProductApi = async function(req, res){
    let result = await productModel.find()
    res.send(result)
}


//-------------------------------------User Controller--------------------------------------------//
//1st create

const createUserApi = async function (req, res){
    let data = req.body;
    let result = await userModel.create(data)
    res.send(result)
}

//2nd get

const getUserApi = async function(req, res){
    let result = await userModel.find()
    res.send(result)
}


//--------------------------------------Order Controller--------------------------------------------//
//1st create

const createOrderApi = async function(req,res){

    let data = req.body;
    
    const { userId, productId } = data;

    if (!userId) {
        res.send("Please Enter the userId ID")
    }
    if (!productId) {
        res.send("Please Enter the productId ID")
    }


    //if userId id wrong---------------------------------------------
    let sum = 0;
    let x = await userModel.find()
    x.forEach(x => {

        if (x._id != userId) {
            sum += 1
        };

    });
    if (sum == x.length) {
        return res.send("please enter a valid userId id");

    };

    //if productId id wrong------------------------------------------
    let total = 0;
    let arr = await productModel.find()
    arr.forEach(x => {

        if (x._id != productId) {
            total += 1
        };

    });
    if (total == arr.length) {
        return res.send("please enter a valid productId id")

    };

//---------------------------------------------------------------//
    
    if(req.isFreeAppUse==true){
        data.amount=0
        data.isFreeAppUser=req.isFreeAppUse
        let y = await userModel.findOneAndUpdate({_id:userId},{$set:{isFreeAppUse:req.isFreeAppUse}})
        let result = await orderModel.create(data)
        res.send(result)

    }else{

      
        let product  =await productModel.findById(productId)
        let user = await userModel.findById(userId)
        let price = product.price;
        if(price>user.balance){
            return res.send("You dont have balance to purches it")
        }else{
            let newBalance = (user.balance - price) 
            let x = await userModel.findOneAndUpdate({_id:userId},{$set:{balance:newBalance }})
            let y = await userModel.findOneAndUpdate({_id:userId},{$set:{isFreeAppUse:req.isFreeAppUse}})
            data.amount=price
            data.isFreeAppUser=req.isFreeAppUse
            let result = await orderModel.create(data)
            res.send(result)
        }
    }


}

//2nd get

const getOrderApi = async function(req, res){

    let result = await orderModel.find().populate("userId").populate("productId")
    res.send(result)
    
    
}


module.exports = {createProductApi, getProductApi, createUserApi, getUserApi, createOrderApi, getOrderApi }