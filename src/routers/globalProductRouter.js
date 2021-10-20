const express = require("express"); // express server for routing
const {
  createGlobalProduct,
  getProductsBySlug,
  getSelectedProductSellers,
} = require("../controls/globalProductControl");
const globalProductRouter = express.Router(); // creating router for the global product
const { upload, adminAndSellerAuthRequired } = require("../utils");

//Subject to change
globalProductRouter.post(
  "/global-product/create",
  //   adminAndSellerAuthRequired,
  upload.array("productImage"),
  createGlobalProduct
);

globalProductRouter.get("/global-products/:slug", getProductsBySlug);

globalProductRouter.post("/global-products/selected", getSelectedProductSellers)

// globalProductRouter.get("/global-product", globalProduct);

module.exports = globalProductRouter;
