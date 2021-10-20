const User = require("../../models/userModel");
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { generateToken, verifyToken } = require("../../utils");
// Here there should be a way to update the daabase to seller or user instead of creating a new account with a different email for each user and seller
exports.signup = expressAsyncHandler(async (request, response) => {
  await User.findOne({ email: request.body.email }).exec( async(error, user) => {
    if (error) return response.status(400).json({ error });
    if (user) return response.status(400).json({ message: `Email already registered as ${user.role}` });
    

    //I am going to start with a very simple seller form for development
    const {
      firstName,
      surname,
      email,
      password,
      //subscription,
      username,
       
    } = request.body;

    const hash_password = await bcrypt.hash(password, 10);


    const _user = new User({
      firstName,
      surname,
      username,
      email,
      hash_password,
      role: "seller",
    });

    _user.save((error, data) => {
      //this will save the user
      if (error) {
        return response.status(400).json(
          {
           message: "Pls try again later",
           error
          }
        );
      }
      if (data) {
        return response.status(201).json({
          message: "Your signup as a seller is successful..!",
          data
        });
      }
    });
  });
});
