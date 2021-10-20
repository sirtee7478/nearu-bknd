const express = require("express");
const { createProduct, product } = require("../controls/productControl");
const productRouter = express.Router();
const { upload } = require("../utils")


//Subject to change
productRouter.post(
  "/product/create",
  //
  upload.array("productImage"),
  createProduct
);

productRouter.get("/product", product);

module.exports = productRouter;



// productRouter.get("/",

// expressAsyncHandler(async(request, response) => {
//         // await Product.remove({});
//     const createdProduct = await Product.insertMany(data.products);
//     response.send({createdProduct})
// }));

// productRouter.get("/:id", expressAsyncHandler(async(request, response) =>{
//  const product = await Product.findById(request.params.id);
//     if(product){
//         response.send(product);
//     }
//     else {
//         response.status(404).send({message: "product not found"});
//     }
// }))
// module.exports = productRouter;
