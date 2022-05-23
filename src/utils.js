const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const expressAsyncHandler = require("express-async-handler");
const multer = require("multer");
const shortId = require("shortid");
const path = require("path");

//Generating token for all users
exports.generateToken = (user) => {
  return jwt.sign(
    {
      //this has 3 parameters, first is the object to be stored in the token, second is to encript the data and should be kept in a secret environment like .env
      _id: user._id,
      firstName: user.firstName,
      surname: user.surname,
      username: user.username,
      phone: user.phone,
      image: user.image,
      address: user.address,
      email: user.email,
      role: user.role,
      subscription: user.subscription,
    },
    process.env.JWT_SECRET, // this is the second parameter used to secretly store the token. this must be stored in an environmental variable.
    { expiresIn: "1hr" } // this is the third parameter that gives the periord of time the token is to be stored
  );
};

//Sign up form validation
exports.validateSignUpRequest = [
  check("firstName").notEmpty().withMessage("firstName is required"),
  check("surname").notEmpty().withMessage("surname is required"),
  check("username")
    .notEmpty()
    .withMessage("Please provide unique username")
    .isLength({ min: 3, max: 15 })
    .withMessage("your username should be at least 3 characters long"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("your password must be at least 8 characters long"),
  // .matches("(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
  // .withMessage(
  //   "Your password must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters"
  // ),
  check("email")
    .matches("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")
    .withMessage("Email is not valid, please check"),
];

//Sign in form validation
exports.validateSignInRequest = [
  check("email").isEmail().withMessage("Provide your email"),
  check("password").notEmpty().withMessage("Password is required"),
];

// Request validation with the next function to be passed to the routers
exports.isRequestValidated = (request, response, next) => {
  const errors = validationResult(request);
  if (errors.array().length > 0)
    return response.status(400).json({ error: errors.array()[0].msg });
  next();
};

exports.requireSignin = (request, response, next) => {
  if (request.headers.authorization) {
    const token = request.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    request.user = user;
  } else {
    return response.status(400).json({ message: "Authorization required" });
  }
  next();
};

//******************************************************************** */
//this code is for image storage

const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    // 1. path itself will give the parent directory which in this case is the backend
    // 2. the path.dirname(_ _ dirname) will give the current directory of this file
    // 3. i am joining the parent directory with the current directory
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function (request, file, cb) {
    cb(null, shortId.generate() + "-" + file.originalname);
  },
});

exports.upload = multer({ storage });

//Middle for only admin and user to be able to add categories
exports.userAuthRequired = (request, response, next) => {
  if (request.user.role !== "user") 
    return response.status(400).json({ Message: "access denied" });
  next();
};  

exports.userAndSellerAuthRequired = (request, response, next) => {
  if (request.user.role === "admin")
    return response.status(400).json({ message: "Please log in as a user" });
  next();
}; 

exports.adminAndSellerAuthRequired = (request, response, next) => {
  if (request.user.role !== "admin" || request.user.role !== "seller")
    return response
      .status(400) 
      .json({ Message: "You do not have access here" });
  next();
};

exports.adminAuthRequired = (request, response, next) => {
  if (request.user.role !== "admin" )
    return response
      .status(400)
      .json({ Message: "You do not have access as a user" });
  next();
};
