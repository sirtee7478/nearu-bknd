
const Data = {
  // users: [
  //   {
  //     firstName: "Wills",
  //     surname: "godwin",
  //     username: "godd=y006",
  //     email: "customer@nearuafrica.com",
  //     // using bcrypt.hashAsync will encrypt the hash_password
  //     hash_password: "Willie00",
  //     phone: "07033317497"

  //   },
  //   {
  //     firstName: "Godwin",
  //     surname: "Williams",
  //     email: "admin@nearuafrica.com",
  //     // using bcrypt.hashAsync will encrypt the hash_password
  //     hash_password: "Willie6",
  //     phone: "07033317496",
  //     isSuperAdmin: true,
  //     isAdmin: true,
  //     username: "jkf",

  //   },
  //   {
  //     firstName: "Seun",
  //     surname: "godwin",
  //     username: "goddy",
  //     email: "goddy@nearuafrica.com",
  //     // using bcrypt.hashAsync will encrypt the hash_password
  //     hash_password: "Willie06",
  //     phone: "07033317495",
  //     username: "goddy006",

  //   },
  //   {
  //     firstName: "Oluwaseun",
  //     surname: "godwin",
  //     email: "admi@nearuafrica.com",
  //     // using bcrypt.hashAsync will encrypt the hash_password
  //     hash_password: "Willie006",
  //     phone: "07033317494",
  //     isSuperAdmin: true,
  //     isAdmin: true,
  //     username: "gstrings"
  //   },
  // ],
  products: [
    {
      // id: 0,
      title: "Thet o",
      shortDescription: [
        "80% Cotton, 15% Polyester , 3% Nylon and 5% Spandex NEW PREMIUM MATERIAL ",
        "- These socks are made of high quality recycled cotton which is a new kind of environmental protection material provides you with a healthy, comfortable and environment-friendly wearing experience. EXTRA HEAVY CUSHION ",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
      ],

      titleDescription: " DescribesProduct a",

      sellerContent:
        "green and yello Red, green and yello First Prom,duct for the nearU app development.w pep",

      image: "../images/product1.jpg",
      thumbnail: [
        "../images/product6.jpg",
        "../images/product6.jpg",
        "../images/product6.jpg",
      ],
      sellingPrice: 203.09,
      regularPrice: null,
      currency: "???",
      testing2: "JUST TESTING",
      // coupon: false,
      coupon: {
        couponDiscount: false,
        couponType: "cash", // This should be an option for the seller to specify the kind of cooupon
        couponAmountAndGift: null,
        date: null,
      },
      // couponAmount: 10,
      rating: {
        one: 10090,
        two: 4005,
        three: 233,
        four: 50,
        five: 700,
      },
      sellerFollowers: 100034,
      sellerRating: {
        one: 34,
        two: 3,
        three: 333223,
        four: 5,
        five: 1,
      },
      // ratingNumber: 285,
      negotiable: true,
      categories: ["testin1", "testing2", "testing3"],
      // sponsor: false,
      sharingPrice: {
        sharable: false,
        regularPrice: null,
        divisionRatio: null,
        startDate: null,
        endDate: null,
      },
      pickUp: true,
      // freeDelivery:  true,
      freeDelivery: {
        free: false,
        minOrder: null,
      },
      availableQuantity: 50,
      tags: ["testing1", "testing2", "testing3", "testing4"],
      country: "Nigeria",
      state: "Lagos",
      location: "Kosofe",
      sellerAddress: "635, ikorodu road",
      sellerProductCount: "",
      brand: "None Yet",
      lga: "Ketu",

      sellerName: "WG Tech",
      minOrder: 4,
      maxOrder: 45,
      recommendedWith: ["Item1", "Item2"],
      frequentlyPurchasedWith: ["Item1", "Item2"],
      giftWithPurchase: {
        minPurchase: 4,
        maxPurchase: 8,
        periord: "6 days",
      },
      returnable: {
        status: true,
        periord: 10,
      },
    },

    {
      // id: 1,
      title: "development.",
      shortDescription: [
        "80% Cotton, 15% Polyester , 3% Nylon and 5% Spandex NEW PREMIUM MATERIAL ",
        "- These socks are made of high quality recycled cotton which is a new kind of environmental protection material provides you with a healthy, comfortable and environment-friendly wearing experience. EXTRA HEAVY CUSHION ",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
      ],

      titleDescription:
        " Describes Product yello Red, green and yello FProduct yello Red, green and yello FProduct yello Red, green and yello FProduct yello Red, green and yello Fthe meta",

      sellerContent:
        " green and yello Red, green and yelm,lo First Product for the nearU app development.w pep",

      image: "../images/product2.jpg",
      thumbnail: [
        "../images/product6.jpg",
        "../images/product6.jpg",
        "../images/product6.jpg",
      ],
      sellingPrice: 103.09,
      regularPrice: 603.09,
      currency: "???",
      testing2: "JUST TESTING",
      // coupon: true,
      coupon: {
        couponDiscount: false,
        couponType: "cash", // This should be an option for the seller to specify the kind of cooupon
        couponAmountAndGift: null,
        date: null,
      },
      // couponAmount: 10,
      rating: {
        one: 1000090,
        two: 54005,
        three: 3233,
        four: 500,
        five: 10,
      },
      sellerFollowers: 100034,
      sellerRating: {
        one: 34,
        two: 3,
        three: 333223,
        four: 5,
        five: 1,
      },
      // ratingNumber: 1223,
      negotiable: true,
      categories: ["testin1", "testing2", "testing3"],
      // sponsor: false,
      sharingPrice: {
        sharable: false,
        regularPrice: null,
        divisionRatio: null,
        startDate: null,
        endDate: null,
      },
      pickUp: true,
      // freeDelivery:  false,
      freeDelivery: {
        free: false,
        minOrder: null,
      },
      availableQuantity: 5,
      tags: ["testing1", "testing2"],
      country: "Nigeria",
      state: "Lagos",
      location: "Kosofe",
      sellerAddress: "635, ikorodu road",
      sellerProductCount: "",
      brand: "None Yet",
      lga: "Ketu",

      sellerName: "WG Tech",
      minOrder: 1,
      maxOrder: 9,
      recommendedWith: ["Item1", "Item2"],
      frequentlyPurchasedWith: ["Item1", "Item2"],
      giftWithPurchase: {
        minPurchase: null,
        maxPurchase: null,
        periord: "",
      },
      returnable: {
        status: false,
        periord: 10,
      },
    },

    {
      // id: 2,
      title: "Amazon Essentials Men's 10-Pack Cotton Half Cushioned Crew Socks",
      shortDescription: [
        "80% Cotton, 15% Polyester , 3% Nylon and 5% Spandex NEW PREMIUM MATERIAL ",
        "- These socks are made of high quality recycled cotton which is a new kind of environmental protection material provides you with a healthy, comfortable and environment-friendly wearing experience. EXTRA HEAVY CUSHION ",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
      ],

      titleDescription:
        " DescribeProduct yello Red, green and yello FProduct yello Red, green and yello FProduct yello Red, green and yello FProduct yello Red, green and yello Fs the meta",

      sellerContent:
        "green and yello Red, green and yello First Product form,. the nearU app development.w pep",

      image: "../images/product3.jpg",
      thumbnail: [
        "../images/product6.jpg",
        "../images/product6.jpg",
        "../images/product6.jpg",
      ],
      sellingPrice: 603.09,
      regularPrice: 903.09,
      currency: "???",
      testing2: "JUST TESTING",
      // coupon: true,
      coupon: {
        couponDiscount: false,
        couponType: "cash", // This should be an option for the seller to specify the kind of cooupon
        couponAmountAndGift: null,
        date: null,
      },
      // couponAmount: 10,
      rating: {
        one: 90,
        two: 5405,
        three: 13233,
        four: 5090,
        five: 10680,
      },
      sellerFollowers: 100034,
      sellerRating: {
        one: 34,
        two: 3,
        three: 333223,
        four: 5,
        five: 1,
      },
      // ratingNumber: 563,
      negotiable: true,
      categories: ["testin1", "testing2", "testing3"],
      // sponsor: false,
      sharingPrice: {
        sharable: false,
        regularPrice: null,
        divisionRatio: null,
        startDate: null,
        endDate: null,
      },
      pickUp: true,
      // freeDelivery:  true,
      freeDelivery: {
        free: false,
        minOrder: null,
      },
      availableQuantity: 10,
      tags: ["testing1", "testing2"],
      country: "Nigeria",
      state: "Lagos",
      location: "island",
      sellerAddress: "635, ikorodu road",

      sellerProductCount: "",
      brand: "None Yet",
      lga: "kosofe",
      sellerName: "WG Tech",
      minOrder: 2,
      maxOrder: 17,
      recommendedWith: ["Item1", "Item2"],
      frequentlyPurchasedWith: ["Item1", "Item2"],
      giftWithPurchase: {
        minPurchase: 4,
        maxPurchase: 8,
        periord: "6 days",
      },
      returnable: {
        status: true,
        periord: 10,
      },
    },

    {
      // id: 3,
      title: "The  Red, pepper",
      shortDescription: [
        "80% Cotton, 15% Polyester , 3% Nylon and 5% Spandex NEW PREMIUM MATERIAL ",
        "- These socks are made of high quality recycled cotton which is a new kind of environmental protection material provides you with a healthy, comfortable and environment-friendly wearing experience. EXTRA HEAVY CUSHION ",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
      ],

      titleDescription:
        " DescribesProduct yello Red, green and yello FProduct yello Red, green and yello FProduct yello Red, green and yello FProduct yello Red, green and yello F the meta",

      sellerContent:
        "  green and yello Red, green and yello First Product fjkjor the nearU app development.w pep",

      image: "../images/product5.jpg",
      thumbnail: [
        "../images/product6.jpg",
        "../images/product6.jpg",
        "../images/product6.jpg",
      ],
      sellingPrice: 603.09,
      regularPrice: 903.09,
      currency: "???",
      testing2: "JUST TESTING",
      // coupon: true,
      coupon: {
        couponDiscount: false,
        couponType: "cash", // This should be an option for the seller to specify the kind of cooupon
        couponAmountAndGift: null,
        date: null,
      },
      // couponAmount: 10,
      rating: {
        one: 500090,
        two: 7005,
        three: 33,
        four: 5400,
        five: 7007,
      },
      sellerFollowers: 100034,
      sellerRating: {
        one: 34,
        two: 3,
        three: 333223,
        four: 5,
        five: 1,
      },
      // ratingNumber: 209,
      negotiable: false,
      categories: ["testin1", "testing2", "testing3"],
      // sponsor: false,
      sharingPrice: {
        sharable: false,
        regularPrice: null,
        divisionRatio: null,
        startDate: null,
        endDate: null,
      },
      pickUp: false,
      // freeDelivery:  true,
      freeDelivery: {
        free: false,
        minOrder: null,
      },
      availableQuantity: 50,
      tags: ["testing1", "testing2"],
      country: "Nigeria",
      state: "Lagos",
      location: "Kosofe",
      sellerAddress: "635, ikorodu road",
      sellerProductCount: "",
      brand: "None Yet",
      lga: "kosofe",
      sellerName: "WG Tech",
      minOrder: 10,
      maxOrder: 45,
      recommendedWith: ["Item1", "Item2"],
      frequentlyPurchasedWith: ["Item1", "Item2"],
      giftWithPurchase: {
        minPurchase: 4,
        maxPurchase: 8,
        periord: "6 days",
      },
      returnable: {
        status: true,
        periord: 10,
      },
    },

    {
      // id: 4,
      title: "The Product",
      shortDescription: [
        "80% Cotton, 15% Polyester , 3% Nylon and 5% Spandex NEW PREMIUM MATERIAL ",
        "- These socks are made of high quality recycled cotton which is a new kind of environmental protection material provides you with a healthy, comfortable and environment-friendly wearing experience. EXTRA HEAVY CUSHION ",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
      ],

      titleDescription:
        " DescribesProduct yello Red, green and yello F the meta",

      sellerContent:
        "green and yello Red, green and yello First Product fohjr the nearU app development.w pep",

      image: "../images/product6.jpg",
      thumbnail: [
        "../images/product6.jpg",
        "../images/product6.jpg",
        "../images/product6.jpg",
      ],
      sellingPrice: 203.09,
      regularPrice: 300.34,
      currency: "???",
      testing2: "JUST TESTING",
      // coupon: true,
      coupon: {
        couponDiscount: false,
        couponType: "cash", // This should be an option for the seller to specify the kind of cooupon
        couponAmountAndGift: null,
        date: null,
      },
      // couponAmount: 10,
      rating: {
        one: 900,
        two: 8005,
        three: 53233,
        four: 5070,
        five: 10990,
      },
      sellerFollowers: 100034,
      sellerRating: {
        one: 34,
        two: 3,
        three: 333223,
        four: 5,
        five: 1,
      },
      // ratingNumber: 2563,
      negotiable: false,
      categories: ["testin1", "testing2", "testing3"],
      // sponsor: false,
      sharingPrice: {
        sharable: false,
        regularPrice: null,
        divisionRatio: null,
        startDate: null,
        endDate: null,
      },
      pickUp: true,
      // freeDelivery:  true,
      freeDelivery: {
        free: false,
        minOrder: null,
      },
      availableQuantity: 50,
      tags: ["testing1", "testing2"],
      country: "Nigeria",
      state: "Lagos",
      location: "Kosofe",
      sellerAddress: "635, ikorodu road",
      sellerProductCount: "",
      brand: "None Yet",
      lga: "kosofe",

      sellerName: "WG Tech",
      minOrder: 5,
      maxOrder: 20,
      recommendedWith: ["Item1", "Item2"],
      frequentlyPurchasedWith: ["Item1", "Item2"],
      giftWithPurchase: {
        minPurchase: 4,
        maxPurchase: 8,
        periord: "6 days",
      },
      returnable: {
        status: true,
        periord: 10,
      },
    },

    {
      // id: 5,
      title: "development.",
      shortDescription: [
        "80% Cotton, 15% Polyester , 3% Nylon and 5% Spandex NEW PREMIUM MATERIAL ",
        "- These socks are made of high quality recycled cotton which is a new kind of environmental protection material provides you with a healthy, comfortable and environment-friendly wearing experience. EXTRA HEAVY CUSHION ",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
      ],

      titleDescription:
        " DescribesProduct yello Red, green and yello FProduct yello Red, green and yello FProduct yello Red, green and yello FProduct yello Red, green and yello F the meta",

      sellerContent:
        " green and yello Red, green and yello First Product for the nearU appjjj development.w pep",

      image: "../images/product1.jpg",
      thumbnail: [
        "../images/product6.jpg",
        "../images/product6.jpg",
        "../images/product6.jpg",
      ],
      sellingPrice: 103.09,
      regularPrice: 300.34,
      currency: "???",
      testing2: "JUST TESTING",
      // coupon: false,
      coupon: {
        couponDiscount: false,
        couponType: "cash", // This should be an option for the seller to specify the kind of cooupon
        couponAmountAndGift: null,
        date: null,
      },
      // couponAmount: 10,
      rating: {
        one: 1090,
        two: 54,
        three: 33,
        four: 50,
        five: 10,
      },
      sellerFollowers: 100034,
      sellerRating: {
        one: 34,
        two: 3,
        three: 333223,
        four: 5,
        five: 1,
      },
      // ratingNumber: 3323,
      negotiable: true,
      categories: ["testin1", "testing2", "testing3"],
      // sponsor: false,
      sharingPrice: {
        sharable: false,
        regularPrice: null,
        divisionRatio: null,
        startDate: null,
        endDate: null,
      },
      pickUp: true,
      // freeDelivery:  false,
      freeDelivery: {
        free: false,
        minOrder: null,
      },
      availableQuantity: 50,
      tags: ["testing1", "testing2"],
      country: "Nigeria",
      state: "Lagos",
      location: "Kosofe",
      sellerAddress: "635, ikorodu road",
      sellerProductCount: "",
      brand: "None Yet",
      lga: "kosofe",

      sellerName: "WG Tech",
      minOrder: 3,
      maxOrder: 65,
      recommendedWith: ["Item1", "Item2"],
      frequentlyPurchasedWith: ["Item1", "Item2"],
      giftWithPurchase: {
        minPurchase: 4,
        maxPurchase: 8,
        periord: "6 days",
      },
      returnable: {
        status: false,
        periord: 10,
      },
    },

    {
      // id: 6,
      title: "development.",
      shortDescription: [
        "80% Cotton, 15% Polyester , 3% Nylon and 5% Spandex NEW PREMIUM MATERIAL ",
        "- These socks are made of high quality recycled cotton which is a new kind of environmental protection material provides you with a healthy, comfortable and environment-friendly wearing experience. EXTRA HEAVY CUSHION ",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
      ],

      titleDescription:
        " DescribesProduct yello Red, green and yello FProduct yello Red, green and yello FProduct yello Red, green and yello FProduct yello Red, green and yello F the meta",

      sellerContent:
        " green and yello Red, green and yello First Product for the kkjkjnearU app development.w pep",

      image: "../images/product7.jpg",
      thumbnail: [
        "../images/product6.jpg",
        "../images/product6.jpg",
        "../images/product6.jpg",
      ],
      sellingPrice: 103.09,
      regularPrice: 300.34,
      currency: "???",
      testing2: "JUST TESTING",
      // coupon: false,
      coupon: {
        couponDiscount: false,
        couponType: "cash", // This should be an option for the seller to specify the kind of cooupon
        couponAmountAndGift: null,
        date: null,
      },
      // couponAmount: 10,
      rating: {
        one: 10,
        two: 5,
        three: 3,
        four: 5,
        five: 1,
      },
      sellerFollowers: 100034,
      sellerRating: {
        one: 34,
        two: 3,
        three: 333223,
        four: 5,
        five: 1,
      },
      // ratingNumber: 3323,
      negotiable: true,
      categories: ["testin1", "testing2", "testing3"],
      // sponsor: false,
      sharingPrice: {
        sharable: false,
        regularPrice: null,
        divisionRatio: null,
        startDate: null,
        endDate: null,
      },
      pickUp: true,
      // freeDelivery:  false,
      freeDelivery: {
        free: false,
        minOrder: null,
      },
      availableQuantity: 50,
      tags: ["testing1", "testing2"],
      country: "Nigeria",
      state: "Lagos",
      location: "Kosofe",
      sellerAddress: "635, ikorodu road",
      sellerProductCount: "",
      brand: "None Yet",
      lga: "kosofe",
      sellerName: "WG Tech",
      minOrder: 4,
      maxOrder: 7,
      recommendedWith: ["Item1", "Item2"],
      frequentlyPurchasedWith: ["Item1", "Item2"],
      giftWithPurchase: {
        minPurchase: 7,
        maxPurchase: 8,
        periord: "6 days",
      },
      returnable: {
        status: false,
        periord: 10,
      },
    },

    {
      // id: 7,
      title: "development.",
      shortDescription: [
        "80% Cotton, 15% Polyester , 3% Nylon and 5% Spandex NEW PREMIUM MATERIAL ",
        "- These socks are made of high quality recycled cotton which is a new kind of environmental protection material provides you with a healthy, comfortable and environment-friendly wearing experience. EXTRA HEAVY CUSHION ",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
      ],

      titleDescription:
        " DescribesProduct yello Red, green and yello FProduct yello Red, green and yello FProduct yello Red, green and yello FProduct yello Red, green and yello F the meta",

      sellerContent:
        " green and yello Red, green and yello First Proiliiduct for the nearU app development.w pep",

      image: "../images/product6.jpg",
      thumbnail: [
        "../images/product6.jpg",
        "../images/product6.jpg",
        "../images/product6.jpg",
      ],
      sellingPrice: 103.09,
      regularPrice: 300.34,
      currency: "???",
      testing2: "JUST TESTING",
      // coupon: false,
      coupon: {
        couponDiscount: false,
        couponType: "cash", // This should be an option for the seller to specify the kind of cooupon
        couponAmountAndGift: null,
        date: null,
      },
      // couponAmount: 10,
      rating: {
        one: 10000090,
        two: 54005,
        three: 3233,
        four: 500,
        five: 10,
      },
      sellerFollowers: 100034,
      sellerRating: {
        one: 34,
        two: 3,
        three: 333223,
        four: 5,
        five: 1,
      },
      // ratingNumber: 3323,
      negotiable: true,
      categories: ["testin1", "testing2", "testing3"],
      // sponsor: false,
      sharingPrice: {
        sharable: false,
        regularPrice: null,
        divisionRatio: null,
        startDate: null,
        endDate: null,
      },
      pickUp: true,
      // freeDelivery:  false,
      freeDelivery: {
        free: false,
        minOrder: null,
      },
      availableQuantity: 50,
      tags: ["testing1", "testing2"],
      country: "Nigeria",
      state: "Lagos",
      location: "Kosofe",
      sellerAddress: "635, ikorodu road",
      sellerProductCount: "",
      brand: "None Yet",
      lga: "kosofe",

      sellerName: "WG Tech",
      minOrder: 4,
      maxOrder: 20, 
      recommendedWith: ["Item1", "Item2"],
      frequentlyPurchasedWith: ["Item1", "Item2"],
      giftWithPurchase: {
        minPurchase: 4,
        maxPurchase: 8,
        periord: "6 days",
      },
      returnable: {
        status: false,
        periord: 10,
      },
    },

    
    {
      // id: 7,
      title: "development.",
      shortDescription: [
        "80% Cotton, 15% Polyester , 3% Nylon and 5% Spandex NEW PREMIUM MATERIAL ",
        "- These socks are made of high quality recycled cotton which is a new kind of environmental protection material provides you with a healthy, comfortable and environment-friendly wearing experience. EXTRA HEAVY CUSHION ",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
        "- The fully cushioned foot and leg of the shock absorbs impact, better absorb sweat and keep your feet comfortable and dry. ARCH SUPPORT ",
        "- Our socks have suitable compression in arch to improve foot arch fatigue and keep sock in place. to protect you while walking, jogging and running, also stability for a perfect fit. Elastic cuff tab can lock the hell and promise our socks Non-Slip. REINFORCED HEELS AND TOES ",
        "- Reinforcement in heel and toe provide durability in high stress areas to dramatically in improve product life. AFTER SALE SERVICE ",
        "- If you have any quality problems or dissatisfaction with the purchase, please contact us and we will give you a satisfactory reply.",
      ],

      titleDescription:
        " DescribesProduct yello Red, green and yello FProduct yello Red, green and yello FProduct yello Red, green and yello FProduct yello Red, green and yello F the meta",

      sellerContent:
        " green and yello Red, green and yello First Proiliiduct for the nearU app development.w pep",

      image: "../images/product6.jpg",
      thumbnail: [
        "../images/product6.jpg",
        "../images/product6.jpg",
        "../images/product6.jpg",
      ],
      sellingPrice: 103.09,
      regularPrice: 300.34,
      currency: "???",
      testing2: "JUST TESTING",
      // coupon: false,
      coupon: {
        couponDiscount: false,
        couponType: "cash", // This should be an option for the seller to specify the kind of cooupon
        couponAmountAndGift: null,
        date: null,
      },
      // couponAmount: 10,
      rating: {
        one: 10000090,
        two: 54005,
        three: 3233,
        four: 500,
        five: 10,
      },
      sellerFollowers: 100034,
      sellerRating: {
        one: 34,
        two: 3,
        three: 333223,
        four: 5,
        five: 1,
      },
      // ratingNumber: 3323,
      negotiable: true,
      categories: ["testin1", "testing2", "testing3"],
      // sponsor: false,
      sharingPrice: {
        sharable: false,
        regularPrice: null,
        divisionRatio: null,
        startDate: null,
        endDate: null,
      },
      pickUp: true,
      // freeDelivery:  false,
      freeDelivery: {
        free: false,
        minOrder: null,
      },
      availableQuantity: 50,
      tags: ["testing1", "testing2"],
      country: "Nigeria",
      state: "Lagos",
      location: "Kosofe",
      sellerAddress: "635, ikorodu road",
      sellerProductCount: "",
      brand: "None Yet",
      lga: "kosofe",

      sellerName: "WG Tech",
      minOrder: 4,
      maxOrder: 20, 
      recommendedWith: ["Item1", "Item2"],
      frequentlyPurchasedWith: ["Item1", "Item2"],
      giftWithPurchase: {
        minPurchase: 4,
        maxPurchase: 8,
        periord: "6 days",
      },
      returnable: {
        status: false,
        periord: 10,
      },
    },
  ],
  cart: [],
  services: [],
  wishList: [],
  viewedProduct: [],
  purchasedProduct: [],
  sharedProduct: [],
  ratedProducts: [],
};

module.exports = Data;
