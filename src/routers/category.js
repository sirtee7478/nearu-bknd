const express = require("express");
const categoryRouter = express.Router();

const { addCategory, getCategories, updateCategories, deleteCategories } = require("../controls/categoryControl");
const { upload } = require("../utils");
const { isRequestValidated, requireSignin } = require("../utils");



categoryRouter.post(
  "/category/create",
  requireSignin,
  upload.single("categoryImage"),
  addCategory
);

// Backend
categoryRouter.get(
  "/category/get-categories", 
  getCategories
  );



categoryRouter.post(
  "/category/update",
  requireSignin,
  upload.array("categoryImage"),
  updateCategories
);

categoryRouter.post(
  "/category/delete",
  requireSignin,
  deleteCategories
);


module.exports = categoryRouter; 






















