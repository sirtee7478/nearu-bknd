const GlobalProduct = require("../models/globalProductModel");
const Products = require("../models/productModel");
const slugify = require("slugify");
const Category = require("../models/category");

exports.createGlobalProduct = (request, response) => {
  const {
    productName,
    fullDescription,
    shortDescription,
    createdBy,
    productInstruction,
    globalItem,
    promos,
    category,
    location,
    tags,
    brand,
    reviews,
    ratings,

    recommendedWith,
    frequentlyPurchasedWith,
  } = request.body;

  let productImage = [];
  if (request.files.length > 0) {
    productImage = request.files.map((file) => {
      return { img: file.filename };
    });
  }

  const globalProduct = new GlobalProduct({
    productName,
    createdBy,
    productSlug: slugify(productName),
    fullDescription,
    shortDescription,
    productInstruction,
    globalItem,
    category,
    location,
    globalProductImage: productImage,
    brand,
    reviews,
    ratings,
    tags,
    recommendedWith,
    frequentlyPurchasedWith,
    promos,
  });

  globalProduct.save((error, globalProduct) => {
    if (globalProduct) {
      return response.status(200).json({ globalProduct });
    }
    if (error) {
      return response.status(500).json({ message: "error" });
    }
  });
};

exports.getProductsBySlug = (request, response) => {
  const { slug } = request.params;
  Category.findOne({ slug: slug })
    .select("_id")
    .exec((error, category) => {
      if (error) return response.status(400).json({ error });

      if (category)
        return GlobalProduct.find({ category: category._id }).exec(
          (error, globalProducts) => {
            if (error) return response.status(400).json({ error });

            if (globalProducts.length > 0)
              return response.status(200).json({
                globalProducts,
              });
          }
        );
    });
};

exports.getSelectedProductSellers = async (request, response) => {
  const { _id } = request.body;

  Products.find({})
    .select(
      "sellerId productName productSlug globalId fullDescription shortDescription productInstruction productImage sellingPrice oldPrice regularPrice brandImage currency subscription postOrder returnable offer promo freeDelivery delivery preOrder negotiable category availableQuantity globalStore tags brand sellerInfo updatedAt minOrder maxOrder recommendedWith frequentlyPurchasedWith giftWithPurchase jointVenture"
    )
    .populate([
      { path: "sellerId", select: "firstName surname username image seller" },
      { path: "category", select: "_id name children" },
    ])
    .exec((error, items) => {
      if (error) return response.status(400).json({ error });
      if (items) {
        const products = items.filter((item) => item.globalId == _id);
        response.status(200).json({ products });
      }
    });
};

// exports.getGlobalProductsById = (request, response) => {
//   const {_id} = request.body;
//   Products.findOne({_id: })

// }
