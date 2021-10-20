const express = require("express");
const { createPage, getPages, getPageByURL } = require("../../controls/admins/pageControl");
const page = express.Router(); // this help the code become modular so that we can define multiple files to have different routers

const {
  upload,
  adminAndSellerAuthRequired,
  requireSignin,
} = require("../../utils");

page.post(
  `/page/create`,
  upload.fields([
    {
      name: "banners",
      //   maxCount: 10 // Maximum number of uploads allowed
    },
    {
      name: "products",
    },
  ]),
  requireSignin,
  // adminAndSellerAuthRequired,
  createPage
);

page.get(
  `/page/get-pages`,
  requireSignin, 
  getPages
);

page.get(
  `/page/:category/:type`, getPageByURL
)

module.exports = page;
