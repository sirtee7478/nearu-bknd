const express = require("express");
const mongoose = require("mongoose");

const UserRoutes = require("./routers/authUserRouter");
const adminRoutes = require("./routers/adminRouter/authAdminRouter");
const categoryRoutes = require("./routers/category");
const productRoutes = require("./routers/productRouter");
const globalProductRoutes = require("./routers/globalProductRouter");
const sellerRoutes = require("./routers/sellersRouter/authSellerRouter");
const cartRoutes = require("./routers/cart");
const initDataRoutes = require("./routers/adminRouter/initDataRouter");
const bundleRoutes = require("./routers/bundleRouter");
const pageRoute = require("./routers/adminRouter/pageRouter");
const isRequestGlobalProductRoutes = require("./routers/adminRouter/isRequestGlobalProductRouter");
const path = require("path"); 
const cors = require("cors");



const env = require("dotenv");

const app = express();
//calling the environmental variable to encript data 
env.config();

// This are middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended : true}));




// This will connect the app to mongodb
mongoose.connect( process.env.MONGO_DB_CONNECTION || "mongodb://localhost/nearuafrica", {
  //using environment variable if it does not exist use the localhost url
  useNewUrlParser: true,  //The reasons for this option parameters is to stop duplicated errors
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() =>{console.log("database connected")});

//this will expose the file path to the browser because of the static files
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", UserRoutes);
app.use("/api", sellerRoutes);
app.use("/api", adminRoutes);
app.use("/api", bundleRoutes);
app.use("/api", categoryRoutes)
app.use("/api", productRoutes);
app.use("/api", globalProductRoutes);
app.use("/api", isRequestGlobalProductRoutes); 
app.use("/api", cartRoutes);
app.use("/api", initDataRoutes); 
app.use("/api", pageRoute);

// app.use("api/productrepos", productRepoRouter);


// use this middleware function to catch the error from the server
app.use((error, request, response, next) => {
  //understand http status code...
  response.status(500).send({ message: error.message }); //This will catch the error from the server and send it as response to the user.
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});


