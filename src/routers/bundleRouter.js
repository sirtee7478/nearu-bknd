const express = require("express");
const {createBundle, bundle} = require("../controls/bundle");
const bundleRouter = express.Router();
const {upload} = require("../utils");

bundleRouter.post("/bundle/create", upload.array("productImage"), createBundle);
bundleRouter.get("/bundle", bundle);

module.exports = bundleRouter;