const express = require("express");
const {
  signup,
  signin,
  signout
} = require("../controls/authUserControl");

const { 
  validateSignUpRequest, 
  validateSignInRequest, 
  isRequestValidated, 
  requireSignin 
} = require("../utils");

const userRouter = express.Router(); // this help the code become modular so that we can define multiple files to have different routers

userRouter.post(
  "/signup", 
  validateSignUpRequest, 
  isRequestValidated, 
  signup
  );

// This is the sign in router
userRouter.post(
  "/signin", 
  validateSignInRequest, 
  isRequestValidated, 
  signin
  );

  userRouter.post(
    "/user/signout", 
    validateSignInRequest,
    signout
  );

userRouter.post("/profile", requireSignin, (request, response) =>{
  response.status(200).json({user: "Profile page"})
})

module.exports = userRouter;
