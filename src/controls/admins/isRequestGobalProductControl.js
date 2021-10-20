const expressAsyncHandler = require("express-async-handler");
const IsRequestGlobalProduct = require("../../models/isRequestGlobalProductModel");
const shortId = require("shortid");
const slugify = require("slugify");

exports.createIsRequestGlobalProduct =  (request, response) => {
  //i am going to be accepting images here so i will not be accepting a json data but a form data

  //by default mongodb would give me a file attribute. so i will use that in this code to get files in the database
//   response.status(200).json({ file: request.files, body: request.body });
// response.status(200).json({file: request.files, body: request.body})


const {
    productName,
    fullDescription,
    shortDescription,
    productInstruction,
    category,
    location,
    brand,  
    tags 
} = request.body



const updatedAt = new Date();

  //This line is used for getting the image file in the database.
  let productImage = [];
  if(request.files.length > 0){
    productImage = request.files.map(file => {
      return {img: file.filename}
    }
    );
  };

  let primaryImage = [];
      if(request.file.length > 0) {
        primaryImage = request.files.map(file => {
            return {img: file.filename}
          }
        );
      }
  

  // const slugName = parentTitle + sellerInfo;

const isRequestGlobalProduct = new IsRequestGlobalProduct({
    productName,
    productSlug: slugify(productName),
    fullDescription,
    shortDescription,
    productInstruction,
    category,
    location,
    primaryImage,
    productImage,
    brand,
    tags
});

isRequestGlobalProduct.save((error, isRequestGlobalProduct) => {

  // try {
  //   response.status(200).json({product})
  // } catch(error){
  //   response.status(500).json({error})
  // }
  if(isRequestGlobalProduct){
    return response.status(200).json({isRequestGlobalProduct})
  }
  if(error) return response.status(500).json({message: error})

});

};

exports.isRequestGlobalProduct =  (request, response) => {
    IsRequestGlobalProduct.find({}).exec((error, isRequestGlobalProduct) => {
        if(error) return response.status(400).json({error});
        if(isRequestGlobalProduct) return response.status(200).json({isRequestGlobalProduct})
    })
};

