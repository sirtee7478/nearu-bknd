const mongoose = require("mongoose");

const isRequestGlobalProductSchema = new mongoose.Schema(
  {
    sellerInfo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    productName: { type: String, required: false }, //Admin
    productSlug: { type: String, unique: true }, //Admin
    fullDescription: { type: String, required: false }, //Admin
    shortDescription: { type: String, required: false },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    location: { type: String, required: true },
    productImage: [{ img: { type: String } }], //Admin
    

    brand: { type: String, required: false },

    tags: [{ type: Array }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("IsRequestGlobalProduct", isRequestGlobalProductSchema);
