

const userMiddleware = function(req, res, next){
    
    let headerData = req.headers.isfreeappuse
    
    if(!headerData) {
        return  res.send("missing a mandatory header") 
    }else{
        let changedHeaderData = headerData =="true" ? true : false
        req.isFreeAppUse = changedHeaderData
        next()
    }
}



module.exports = {userMiddleware}