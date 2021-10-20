const mongoose = require("mongoose");

const bundleSchema = new mongoose.Schema(
  {
    sellerInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    bundleItems: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, default: 1 },
        partnership: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
      },
    ],
    totalPrice: { type: Number, required: true }, //This is the total price of the items inside the bundle
    bundlePrice: { type: Number, required: true }, // This iis the new price for the bundle
    bundleName: { type: String, required: true },
    bundleDescription: { type: String, required: true },
    customerEligibility: { type: String, required: true },
    locationEligibility: { type: Array, required: true },
    termsAndConditions: { type: String, required: false },
    expirePeriord: { type: Date },
    productSlug: { type: String, unique: true }, //Admin
    negotiable: { type: Boolean, required: false, default: false },

    specialImage: [{ img: { type: String } }], //Admin

    oldPrice: { type: Number, required: false }, // (Amount and old date and new date. This is going to help customers keep track of the price changes

    preOrder: { type: Boolean, default: true },

    availableQuantity: { type: Number, default: 0 },

    updatedAt: { type: Date },

    currency: {
      currency: { type: Boolean, default: true },
      currencyPuhkeh: { type: Boolean },
      currencyNaira: { type: Boolean },
      currencyUSD: { type: Boolean },
      currencyPound: { type: Boolean },
      currencyEuro: { type: Boolean },
      currencyBTC: { type: Boolean },
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

    delivery: {
      delivery: { type: Boolean, default: true },
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
  { timestamps: true }
);

module.exports = mongoose.model("Bundle", bundleSchema);
