const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const shortId = require("shortid");
const slugify = require("slugify");

exports.createProduct =  (request, response) => {
  //i am going to be accepting images here so i will not be accepting a json data but a form data

  //by default mongodb would give me a file attribute. so i will use that in this code to get files in the database
//   response.status(200).json({ file: request.files, body: request.body });
// response.status(200).json({file: request.files, body: request.body})

const { 
  sellerName,
  globalProductName,
  productName,
  fullDescription,
  shortDescription,
  productInstruction,
  sellingPrice,
  oldPrice,//this will be done when a prodcut price is edited
  regularPrice,
  brandImage,
  sellerId,
  globalId,
  // currency 
  currencyPuhkeh,
  currencyNaira,
  currencyUSD,
  currencyPound,
  currencyEuro,
  currencyBTC,

  // Subscription 
  subscription,
  randomDaysSubscription,
  dailySubscription,
  weeklySubscription,
  monthlySubscription,
  yearlySubscription,

  // offer
  offer,
  offerAmount,
  offerQuantityCondition,
  offerStartDate,
  offerEndDate,
  
  // promo
  promo,
  promoAmount,
  promoCode,
  promoStartDate,
  promoEndDate,

  // Post order
  postOrder,
  postOrderAmount,
  postOrderPeriod,

  


  preOrder,
  negotiable,
  category,

  // delivery
  pickupDelivery,
  dispatchDelivery,


  // Free delivery 
  freeDelivery,
  freeDeliveryAmountCondition,
  freeDeliveryQuantityCondition,
  freeDeliveryLocationCondition,
  freeDeliveryLocationList,
  freeDeliveryMinimumAmountPurchase,
  freeDeliveryMinimumQuantityPurchase,
  freeDeliveryStartDate,
  freeDeliveryEndDate,

  availableQuantity,
  tags,
  brand,
  globalStore,
  sellerInfo,
  minOrder,
  maxOrder,
  recommendedWith,
  frequentlyPurchasedWith,
  giftWithPurchase,
  
  // returnable
  returnable,
  returnablePeriod,
  returnableCondition,

  jointVenture
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


  let slug;
  if(sellerName && globalProductName){
    slug = `Quickly buy ${globalProductName} from ${sellerName} ${sellerId}`;
  } else if(sellerName && productName){
    slug = `Quickly buy ${productName} from ${sellerName} ${sellerId}`;
  }

  // let globalId;
  // if(request.body.globalId){
  //   globalId = request.body.globalId
  // } else { null }
  // const slugName = parentTitle + sellerInfo;

const product = new Product({
productName,
productSlug: slugify(slug),
sellerId,
globalId,
fullDescription,
shortDescription,
productInstruction, //this should be set back to unique: true
productImage,
sellingPrice,
oldPrice,
regularPrice,
brandImage,

currency: {
  currencyPuhkeh,
  currencyNaira,
  currencyUSD,
  currencyPound,
  currencyEuro,
  currencyBTC,
},


subscription: {
  subscription,
  randomDaysSubscription,
  dailySubscription,
  weeklySubscription,
  monthlySubscription,
  yearlySubscription,
},

postOrder : {
  postOrder,
  postOrderAmount,
  postOrderPeriod,
},

returnable: {
  returnable,
  returnablePeriod,
  returnableCondition,
},

// offer
offer: {
  offer,
  offerAmount,
  offerQuantityCondition,
  offerStartDate,
  offerEndDate,
},

// promo
promo: {
  promo,
  promoAmount,
  promoCode,
  promoStartDate,
  promoEndDate,
},

freeDelivery: {
  freeDelivery,
  freeDeliveryAmountCondition,
  freeDeliveryQuantityCondition,
  freeDeliveryLocationCondition,
  freeDeliveryLocationList,
  freeDeliveryMinimumAmountPurchase,
  freeDeliveryMinimumQuantityPurchase,
  freeDeliveryStartDate,
  freeDeliveryEndDate,
},

// delivery
delivery: {
  pickupDelivery,
  dispatchDelivery,
},
preOrder,
negotiable,
category,
availableQuantity,
globalStore,
tags,
brand,
sellerInfo,
updatedAt,
minOrder,
maxOrder,
recommendedWith,
frequentlyPurchasedWith,
giftWithPurchase,
jointVenture
});

product.save((error, product) => {

  // try {
  //   response.status(200).json({product})
  // } catch(error){
  //   response.status(500).json({error})
  // }
  if(product){
    return response.status(200).json({product})
  }
  if(error) return response.status(500).json({message: error})

});

};

exports.product =  (request, response) => {};
