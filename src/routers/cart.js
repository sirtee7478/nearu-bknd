const express = require("express");
const { addToCart } = require("../controls/cart");

const cartRouter = express.Router();
const { userAndSellerAuthRequired, requireSignin } = require("../utils");

cartRouter.post("/user/cart/addtocart", requireSignin, userAndSellerAuthRequired, addToCart)

module.exports = cartRouter;