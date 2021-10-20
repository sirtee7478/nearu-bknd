const express = require("express");
const {
  signup,
} = require("../../controls/sellers/authSellerControl");
const { validateSignUpRequest, validateSignInRequest, isRequestValidated, requireSignin } = require("../../utils");

const sellerRouter = express.Router(); // this help the code become modular so that we can define multiple files to have different routers

sellerRouter.post("/seller/signup", validateSignUpRequest, isRequestValidated, signup);



sellerRouter.post("/profile", requireSignin, (request, response) =>{ 
  response.status(200).json({user: "Profile page"});
})

module.exports = sellerRouter;
