const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const { use } = require("../routes/route");

//1st
const resisterPeople = async function(req, res){
  let data = req.body;
  let result = await userModel.create(data)
  res.send(result)
}

//2nd
const loginUser = async function(req, res){
  let email = req.body.emailId
  let pass = req.body.password

  let userData = await userModel.findOne({emailId:email, password:pass})
  if(!userData){
    return res.send("Email or password wrong😜")
  }

  let token1 = jwt.sign({userId: userData._id}, "login api")
  res.send({status:true, token:token1})
}

//3rd
const fetchUser = async function(req, res){
  let userId = req.params.userId
  let result = await userModel.findById(userId) 
  res.send(result)
}

//4th
const updateApi = async function(req, res){
  let userId = req.params.userId
  let updateData = req.body
  let result = await userModel.findByIdAndUpdate(userId,{$set:updateData}, {new:true}) 
  res.send(result)
}

//5th
const deleteApi = async function(req, res){
  let userId = req.params.userId
  let result = await userModel.findByIdAndUpdate(userId,{$set:{isDeleted:true}}, {new:true}) 
  res.send(result)
}




module.exports ={resisterPeople, loginUser, fetchUser, updateApi, deleteApi}










//-------------------------------------------------------------------------------------------------------//
// const loginUser = async function (req, res) {
//   let userName = req.body.emailId;
//   let password = req.body.password;

//   let user = await userModel.findOne({ emailId: userName, password: password });
//   if (!user)
//     return res.send({
//       status: false,
//       msg: "username or the password is not corerct",
//     });

//   let token = jwt.sign(
//     {
//       userId: user._id.toString(),
//       batch: "thorium",
//       organisation: "FunctionUp",
//     },
//     "functionup-plutonium-very-very-secret-key"
//   );
//   res.setHeader("x-auth-token", token);
//   res.send({ status: true, token: token });
// };

// const getUserData = async function (req, res) {
//   let token = req.headers["x-Auth-token"];
//   if (!token) token = req.headers["x-auth-token"];

//   //If no token is present in the request header return error. This means the user is not logged in.
//   if (!token) return res.send({ status: false, msg: "token must be present" });

//   console.log(token);

//   // If a token is present then decode the token with verify function
//   // verify takes two inputs:
//   // Input 1 is the token to be decoded
//   // Input 2 is the same secret with which the token was generated
//   // Check the value of the decoded token yourself

//   // Decoding requires the secret again. 
//   // A token can only be decoded successfully if the same secret was used to create(sign) that token.
//   // And because this token is only known to the server, it can be assumed that if a token is decoded at server then this token must have been issued by the same server in past.
//   let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
//   if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });

//   let userId = req.params.userId;
//   let userDetails = await userModel.findById(userId);
//   if (!userDetails)
//     return res.send({ status: false, msg: "No such user exists" });

//   res.send({ status: true, data: userDetails });
//   // Note: Try to see what happens if we change the secret while decoding the token
// };

// const updateUser = async function (req, res) {
//   // Do the same steps here:
//   // Check if the token is present
//   // Check if the token present is a valid token
//   // Return a different error message in both these cases

//   let userId = req.params.userId;
//   let user = await userModel.findById(userId);
//   //Return an error if no user with the given id exists in the db
//   if (!user) {
//     return res.send("No such user exists");
//   }

//   let userData = req.body;
//   let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
//   res.send({ status: updatedUser, data: updatedUser });
// };

// module.exports.createUser = createUser;
// module.exports.getUserData = getUserData;
// module.exports.updateUser = updateUser;
// module.exports.loginUser = loginUser;
