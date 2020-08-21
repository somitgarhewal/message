var mongoose = require('mongoose');
const User = require('../models/userModel');

const userController = {

   getUser : async (req, res) => {
      try{
         const userData= await User.find()
         console.log("userData ", userData);
         res.send(userData.map((item) => item))
      }
      catch(error){
         console.error("ERROR MESSAGE SEE" ,error);
         res.send("Error occured",error)
      }
   },

   addUser : async (req, res) => {
     
      const userSchema = new User( req.body);
      try{
      
      await userSchema.save()
      console.log("success",userSchema)
            res.send({ data: userSchema, success: true })
     } 
     catch(error){
      console.error("ERROR MESSAGE SEE" ,error);
      res.send("Error occured",error)
     }
   },

   updateUser :async (req, res) => {
      try{
         let {_id} = req.params;
      var data = req.body;
      console.log(_id);
      console.log(data);
      
      const updatedUser= await User.findByIdAndUpdate(_id, data)
      console.log("updated user", updatedUser)
		res.send({user: data, success: true});   
      } 
      catch(error){
         res.send({ message:"error occured "+ error, success: false}) 
      }  
   },



}

module.exports = userController;

