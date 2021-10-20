const express = require("express");
const {
  signup,
  signin,
  signout,
  accountUpdate,
} = require("../../controls/admins/authAdminControl");

const {
  validateSignUpRequest, // middleware to control access to this api
  validateSignInRequest, // middleware to control access to this api
  isRequestValidated, // middleware to control access to this api
  requireSignin // middleware to control access to this api
} = require("../../utils");

const adminRouter = express.Router(); // this help the code become modular so that we can define multiple files to have different routers

adminRouter.post( 
  "/admin/signup",
  validateSignUpRequest, // middleware to control access to this api
  isRequestValidated, // middleware to control access to this api
  signup // this is a controller 
);

// This is the sign in router
adminRouter.post(
  "/admin/signin",
  validateSignInRequest, // middleware to control access to this api
  isRequestValidated, // middleware to control access to this api
  signin //this is a signin controller 
);

adminRouter.post(
  "/admin/update-account", accountUpdate
)

// This is the sign out router
adminRouter.post("/admin/signout", validateSignInRequest, signout);

adminRouter.post("/profile", requireSignin, (request, response) => {
  response.status(200).json({ user: "Profile page" });
});

module.exports = adminRouter;
