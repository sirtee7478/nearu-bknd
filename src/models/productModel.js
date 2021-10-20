const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true,
    },
    globalId: {type: mongoose.Schema.Types.ObjectId, ref: "GlobalProduct", default: null, required: false},
    productName: { type: String, required: false }, //Admin
    productSlug: { type: String, unique: true }, //Admin
    fullDescription: { type: String, required: false }, //Admin
    shortDescription: { type: String, required: false },
    productInstruction: { type: String, required: false }, //this should be set back to unique: true
    productImage: [{ img: { type: String } }], //Admin
    sellingPrice: { type: Number, required: true }, //Admin. by default this should be set to zero and any product with zero value should show not available
    brandImage: {type: String}, 
    oldPrice: { type: Number, required: false }, // (Amount and old date and new date. This is going to help customers keep track of the price changes
    regularPrice: { type: Number, default: null },
    preOrder: { type: Boolean, default: true },
    availableQuantity: { type: Number, default: 0 },
    globalStore: { type: Boolean }, //This means that this item is exactly as it was manufactured using the same product details as provided by the manufacturer
    brand: { type: String, required: false },
    updatedAt: {type: Date},
    minOrder: { type: Number, required: false, default: 1 },
    maxOrder: { type: Number, required: false, default: 25 },
    
    currency: {
      currency: {type: Boolean, default: true},
      currencyPuhkeh: { type: Boolean },
      currencyNaira: { type: Boolean },
      currencyUSD: { type: Boolean },
      currencyPound: { type: Boolean },
      currencyEuro: { type: Boolean },
      currencyBTC: { type: Boolean },
    },

    offer: {
      offer: { type: Boolean, required: false },
      offerAmount: { type: Number },
      offerQuantityCondition: { type: Number },
      offerStartDate: { type: Date },
      offerEndDate: { type: Date },
    },

    promo: {
      promo: { type: Boolean },
      promoAmount: { type: Number },
      promoCode: { type: String },
      promoStartDate: { type: Date },
      promoEndDate: { type: Date },
    },

    postOrder: {
      postOrder: { type: Boolean },
      postOrderAmount: { type: Number },
      postOrderPeriod: { type: Number },
    },

    subscription: {
      subscription: { type: Boolean },
      randomDaysSubscription: { type: Boolean },
      dailySubscription: { type: Boolean },
      weeklySubscription: { type: Boolean },
      monthlySubscription: { type: Boolean },
      yearlySubscription: { type: Boolean },
    },

    reviews: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          review: String,
        },
      },
    ],
    rating: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          rating: Number,
        },
      },
    ],
    negotiable: { type: Boolean, required: false, default: false },
    


    delivery: {
      delivery: {type: Boolean, default: true},
      pickupDelivery: { type: Boolean },
      dispatchDelivery: { type: Boolean },
    },

    freeDelivery: {
      freeDelivery: { type: Boolean },
      freeDeliveryAmountCondition: { type: Boolean },
      freeDeliveryQuantityCondition: { type: Boolean },
      freeDeliveryLocationCondition: { type: Boolean },
      freeDeliveryLocationList: { type: String },
      freeDeliveryMinimumAmountPurchase: { type: Number },
      freeDeliveryMinimumQuantityPurchase: { type: Number },
      freeDeliveryStartDate: { type: Date },
      freeDeliveryEndDate: { type: Date },
    },

    returnable: {
      returnable: { type: Boolean },
      returnablePeriod: { type: Number },
      returnableCondition: { type: String },
    },

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
    giftWithPurchase: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          required: false,
        },
       
      },
    ],

    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
