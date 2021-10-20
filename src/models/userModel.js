const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// this is an object from mongoose.schema and we can create use model with it
const userSchema = new mongoose.Schema(
  {
    //understand SCHEMA...
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      min: 3,
      max: 20,
      index: true,
      lowecase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    hash_password: {
      type: String,
      required: true,
      max: 40,
      min: 8,
    },
   
    role: {
      type: String,
      enum: [
        "user",
        "affiliate",
        "storeManager", //The work of a store manager is to assist managing the store activities. They will have access to some settings in the store admin
        "storeAbassador",// This is an individual that promotes items in a store
        "seller",//This is the seller or store owner account. it will be used to organize and monitor the activities within the store
        "admin",//This is for the staff of the company to monitor, execute and control some of the activities on the platform
        "superAdmin", // This is me. I control everything that happens on this platform from one secured dashboard
        "brandAmbassador" //This brand ambassador is going to possibly represent multiple stores. If the stores are more than one then onClick of this item to purchase will display the details of stores to purchase from
      ],
      default: "user",
    },
   
    image: [{ img: { type: String } }],
   
    seller: {
      phone: {
        type: String,
        required: false,
        unique: false,
      },
      subscription: {
        type: String,
        enum: ["free", "silver", "gold", "diamond"],
        defualt: "free",
      },
      specialSubscription: {
        brandAmbassador: {type: String, enum: ["silver", "gold", "diamond"]},
        sellerAmbassador: {type: String, enum: ["silver", "gold", "diamond"] },
        seller: {type: String, enum: ["silver", "gold", "diamond"]}
      },
      address: {
        type: String,
        required: false,
        min: 3,
        max: 20,
      },
      settings: {
        stroeWideNegotiation: { type: Boolean },
        myLocation: { type: String, trim: true },
        storeItemDailyUpdate: { type: Boolean, default: false },
        storeWideDelivery: {
          delivery: { type: Boolean },
          pickupDelivery: { type: Boolean },
          dispatchDelivery: { type: Boolean },
        },
        storeWideCurrency: {
          currency: { type: Boolean, default: true },
          currencyPuhkeh: { type: Boolean },
          currencyNaira: { type: Boolean },
          currencyUSD: { type: Boolean },
          currencyPound: { type: Boolean },
          currencyEuro: { type: Boolean },
          currencyBTC: { type: Boolean },
        },
        stroreWidePostOrder: {
          postOrder: { type: Boolean },
          postOrderAmount: { type: Number },
          postOrderPeriod: { type: Number },
        },
        storeWideSubscription: {
          subscription: { type: Boolean },
          randomDaysSubscription: { type: Boolean },
          dailySubscription: { type: Boolean },
          weeklySubscription: { type: Boolean },
          monthlySubscription: { type: Boolean },
          yearlySubscription: { type: Boolean },
        },
  
        storeWideFreeDelivery: {
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
        storeWideReturnable: {
          returnable: { type: Boolean },
          returnablePeriod: { type: Number },
          returnableCondition: { type: String },
        },
        storeWideGiftWithPurchase: [
          {
            product: {
              type: mongoose.Schema.ObjectId,
              ref: "Product",
              required: false,
            },
          },
        ],
      },

    },
    department: {
      type: String,
      default: "none",
      trim: true,
      lowercase: true,
    },
    settings: {
      displayType: { type: String, trim: true, default: "lite" }, //Display value could either be lite or pro
      myLocation: { type: String, trim: true },
    },
  },
  {
    // with this time stamp, monoose will provide a record table that will show updates on these schemas
    timestamps: true,
  }
);

// Create a virtual field. this is for transforming the input data of a specified field in the schema. e.g: we could transform the entered password into harsh-password before its sent to the database

// userSchema.virtual("password").set(function (password) {
//   this.hash_password = bcrypt.hashSync(password, 10);
// });

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.surname}`;
});

// this is a method that will compare the user password with the existing password in the database. So if it matches it will return true or false. Check the documentation

userSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compare(password, this.hash_password);
  },
};
// create a user model: first parameter will be the user and the second parameter will be the schema
module.exports = mongoose.model("User", userSchema); //First parameter is the model name and the second parameter is the schema... understand MODEL...
