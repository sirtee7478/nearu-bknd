const express = require("express"); // express server for routing
const {
  isRequestGlobalProduct,
  createIsRequestGlobalProduct,
} = require("../../controls/admins/isRequestGobalProductControl");
const isRequestGlobalProductRouter = express.Router(); // creating router for the global product
const { upload, adminAndSellerAuthRequired } = require("../../utils");

//Subject to change
isRequestGlobalProductRouter.post(
  "/global-product/request",
  //   adminAndSellerAuthRequired,
  upload.array("productImage"),
  createIsRequestGlobalProduct
);

isRequestGlobalProductRouter.get(
  "/global-product/getproducts",
  isRequestGlobalProduct
);

module.exports = isRequestGlobalProductRouter;
