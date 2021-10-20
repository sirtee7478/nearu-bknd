// const mongoose = require("mongoose");

// const prodRepoSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     shortDescription: { type: Array, required: true },
//     titleDescription: { type: String, required: true },
//     sellerContent: { type: String, required: false }, //this should be set back to unique: true
//     image: { type: String, required: true },
//     thumbnail: { type: Array, required: true },
//     sellingPrice: { type: Number, required: true, default: null },
//     regularPrice: { type: Number, default: null },
//     currency: { type: String, required: false },
//     coupon: { type: Object, required: false, default: false },
//     rating: { type: Object, required: false },
//     sellerFollowers: { type: Number },
//     sellerRating: { type: Object, required: false },
//     negotiable: { type: Boolean, required: false, default: false },
//     categories: { type: Array, required: true },
//     sharingPrice: { type: Object, required: false },
//     pickUp: { type: Boolean, required: true, default: true },
//     freeDelivery: { type: Object, required: false },
//     availableQuantity: { type: Number, required: true },
//     tags: { type: Array },
//     country: { type: String, required: true },
//     state: { type: String, required: true },
//     location: { type: String, required: true },
//     sellerAddress: { type: String, required: true },
//     brand: { type: String, required: false },
//     lga: { type: String, required: true },
//     sellerName: { type: String, required: true },
//     minOrder: { type: Number, required: false },
//     maxOrder: { type: String, required: false },
//     recommendedWith: { type: Array, required: false },
//     frequentlyPurchasedWith: { type: Array, required: false },
//     giftWithPurchase: { type: Object, required: false },
//     returnable: { type: Object, required: false },
//   },
//   {
//     timestamps: true,
//   }
// );

// const ProductRepo = mongoose.model("ProductRepo", prodRepoSchema);

// module.exports = ProductRepo;
