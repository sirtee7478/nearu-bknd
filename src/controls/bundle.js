const Bundle = require("../models/bundleModel");
const shortId = require("shortid");
const slugify = require("slugify");

exports.createBundle = async (request, response) => {
  const {
    
    totalPrice,
    slug,

    sellerInfo,
    bundlePrice,
    bundleName,
    bundleDescription,
    customerEligibility,
    locationEligibility,
    termsAndConditions,
    expirePeriord,
    oldPrice,
    preOrder,
    availableQuantity,
    giftWithPurchase,
    negotiable,
    tags,

    

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

    // Post order
    postOrder,
    postOrderAmount,
    postOrderPeriod,

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


    // returnable
    returnable,
    returnablePeriod,
    returnableCondition,
  } = request.body;

  const updatedAt = new Date();

  //This line is used for getting the image file in the database.
  let specialImage = [];
  if (request.files.length > 0) {
    specialImage = request.files.map((file) => {
      return { img: file.filename };
    });
  }

  let bundleItems = [];

    if(request.body.bundleItems.length > 0){
      bundleItems = request.body.bundleItems.map((product)=> {
        return {
          product,
          quantity,
          partnership, 
        }
      }
    )
  }
      
   
  

  const bundle = new Bundle({
    bundleName,
    totalPrice,

    sellerInfo,
    bundleItems,
    

    productSlug: slugify(slug),
    bundlePrice, 
    bundleDescription,
    customerEligibility,
    locationEligibility,
    termsAndConditions,
    expirePeriord,
    specialImage,
    oldPrice,
    preOrder,
    availableQuantity,
    updatedAt,
    giftWithPurchase,
    negotiable,
    tags,

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
  })

  bundle.save((error, bundle) =>{
      if(bundle) return response.status(200).json({bundle});
      
      if(error) return response.status(400).json({message: error});
  });
};

exports.bundle = (request, response) =>{};