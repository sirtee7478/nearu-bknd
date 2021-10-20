const express = require("express");
const {initDataControl} = require("../../controls/admins/initDataControl");
const { isRequestValidated, requireSignin } = require("../../utils");
const initData = express.Router(); // this help the code become modular so that we can define multiple files to have different routers


//creating api for initial data
initData.post( "/initdata", requireSignin, isRequestValidated, initDataControl );



module.exports = initData; 
