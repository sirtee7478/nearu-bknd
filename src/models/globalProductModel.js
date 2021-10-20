const mongoose = require("mongoose");

const globalProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: false }, //Admin
    productSlug: { type: String, unique: true }, //Admin
    fullDescription: { type: String, required: false }, //Admin
    shortDescription: { type: String, required: false, default: "testing"},
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    globalProduct: {type: String},
    location: { type: String, required: true },
    globalProductImage: [{ img: { type: String } }], //Admin
    testing: { type: String, required: false},

    brand: { type: String, required: false },

    reviews: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          review: String,
        },
      },
    ],
    ratings: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          rating: Number,
        },
      },
    ],
    tags: [{ type: Array }],

    recommendedWith: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          required: false,
        },
      },
    ],
    frequentlyPurchasedWith: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          required: false,
        },
      },
    ],

    promos: [
      // This is going to add to product some promotions from the promotions object
      {
        promotions: {
          type: mongoose.Schema.ObjectId,
          ref: "Promotions",
          required: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("GlobalProduct", globalProductSchema);
