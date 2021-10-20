const User = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");
const { generateToken,  } = require("../utils");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.signup = (request, response) => {
  User.findOne({ email: request.body.email })
  .exec( async (error, user) => {
    if (user)
      return response.status(400).json({ 
        message: "Email already registered"
       });

    const { firstName, 
      surname, 
      email, 
      password, 
      username 
    } = request.body;

    const hash_password = await bcrypt.hash(password, 10);

    const _user = new User({
      firstName,
      surname,
      username,
      email,
      hash_password,
    });

    _user.save((error, data) => {
      //this will save the user
      if (error) {
        return response.status(400).json({ message: "Pls try again later" });
      }
      if (data) {
        return response.status(201).json({
          message: "Your signup is successful..!",
          // data
        });
      }
    });
  });
};

exports.signin =  (request, response) => {
   User.findOne({ email: request.body.email }).exec((error, user) => {
    if (error) return response.status(400).json({ error });
    if (user) {
      if (user.authenticate(request.body.password)) {
        //i am returning a unique web token for the user so that the token will be sent to the server for every request the user is goiing to be making to the server. In other words this web token will help the server recorgnise the user.
       
      
        const { _id, firstName, surname, email, role, fullName, settings, username } = user;
        response.cookie("token", token, {expiresIn: "1hr"});
        response.status(200).json({
         user: { _id, firstName, surname, email, role, fullName, username, settings},
         token: generateToken(user), //I already defined this function in the utility file
        });
      } else
        return response
          .status(400)
          .json({ message: "Invalid password or email" });
    } else {
      return response.status(400).json({ 
        message: "Wrong information, please check again or create an account" 
      });
    }
  });
};

exports.signout = (request, response) => {
  response.clearCookie("token");
  response.status(200).json({message: "Signout successfully...!"})
}
