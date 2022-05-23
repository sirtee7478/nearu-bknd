const User = require("../../models/userModel");
const expressAsyncHandler = require("express-async-handler");
const { generateToken, verifyToken } = require("../../utils");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.signup = (request, response) => {
  User.findOne({ email: request.body.email })
  .exec(async (error, user) => {
    if (user)
      return response.status(400).json({
        message: `Email already registered as ${user.role}`,
      });
 
    const {
      firstName,
      surname,
      email,
      password,
      username,
      department,
      
    } = request.body;

    

    const hash_password = await bcrypt.hash(password, 10);

    const _user = new User({
      firstName, 
      surname,
      username,
      email,
      hash_password,
      role: "admin",
      department,
    });

    _user.save((error, data) => {
      //this will save the user
      if (error) {
        return response.status(400).json({ message: "Pls try again later" });
      }
      if (data) {
        return response.status(201).json({
          message: "Your signup is successful..!",
          
        });
      }
    });
  });
};

exports.signin = (request, response) => {
   User.findOne({ email: request.body.email }).exec((error, user) => {
    if (error) return response.status(400).json({ error });
    if (user) { 
      if (user.authenticate(request.body.password) && user.role === "admin") {
        const token = jwt.sign(
          {
            //this has 3 parameters, first is the object to be stored in the token, second is to encript the data and should be kept in a secret environment like .env
            _id: user._id,
            firstName: user.firstName,
            surname: user.surname,
            username: user.username,
            phone: user.phone,
            address: user.address,
            email: user.email,
            role: user.role,
            subscription: user.subscription
          },
          process.env.JWT_SECRET, // this is the second parameter used to secretly store the token. this must be stored in an environmental variable.
          { expiresIn: "1hr" } // this is the third parameter that gives the periord of time the token is to be stored
        );
        const { _id, firstName, surname, email, role, fullName, department, username, settings } = user;
        // generateToken(user); //I already defined this function in the utility file
        response.cookie("token", token, { expiresIn: "1hr" });
        response.status(200).json({
          user: { _id, firstName, surname, email, role, fullName, department, username, settings},
          token,
        });
      } else 
      if(user.authenticate(request.body.password) && user.role === "seller"){
        const token = jwt.sign(
          {
            //this has 3 parameters, first is the object to be stored in the token, second is to encript the data and should be kept in a secret environment like .env
            _id: user._id,
            firstName: user.firstName,
            surname: user.surname,
            username: user.username,
            phone: user.phone,
            address: user.address,
            email: user.email,
            role: user.role, 
            subscription: user.subscription
          },
          process.env.JWT_SECRET, // this is the second parameter used to secretly store the token. this must be stored in an environmental variable.
          { expiresIn: "1hr" } // this is the third parameter that gives the periord of time the token is to be stored
        );
        const { _id, firstName, surname, email, role, fullName, seller, username, settings } = user;


        // generateToken(user);
        response.cookie("token", token, { expiresIn: "1hr" });
        response.status(200).json({
         user: { _id, firstName, surname, email, role, fullName, seller, username, settings},
         token
        });
      } else 
        return response
          .status(400)
          .json({ message: "Invalid password or email" }); 
    } 
    else {
      return response.status(400).json({
        message: "You do not have any business here",
      });
    }
  });
};

exports.accountUpdate = (request, response) => {
  const {_id, firstName, surname, email, role, fullName, seller, username, phone, settings} = request.body;
  const editedAccount = {firstName, surname, email, role, fullName, seller, username, phone, settings};
  User.findOndeAndUpdate({_id}, editedAccount, {new: true}).exec((error, updatedAccount)=>{
    if(error) return response.status(400).json({error});
    if(updatedAccount) return response.status(201).json({updatedAccount});
  })


}

exports.signout =  (request, response) => {
  response.clearCookie("token");
  response.status(200).json({ message: "Signout successfully...!" });
};
