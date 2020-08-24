var mongoose = require('mongoose');
const User = require('../models/userModel');

const userController = {

   getUser: async (req, res) => {
      try {
         const userData = await User.find()
         res.send(userData.map((item) => item))
      }
      catch (error) {
         res.send("Error occured", error)
      }
   },

   addUser: async (req, res) => {

      const userSchema = new User(req.body);
      try {
         await userSchema.save()
         res.send({ data: userSchema, success: true })
      }
      catch (error) {
         res.send("Error occured", error)
      }
   },

   updateUser: async (req, res) => {
      try {
         let { _id } = req.params;
         var data = req.body;
         console.log(_id);
         console.log(data);

         const updatedUser = await User.findByIdAndUpdate(_id, data)
         res.send({ user: data, success: true });
      }
      catch (error) {
         res.send({ message: "error occured " + error, success: false })
      }
   },

   deleteUser: async (req, res) => {
      try {
         await User.findByIdAndDelete({ _id: req.params._id })
         res.send({ message: "user successfully deleted ", success: true })
      }
      catch (error) {
         res.send({ message: "ERROR OCCURED " + error, success: false });
      }
   }

}

module.exports = userController;

