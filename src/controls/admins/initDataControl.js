const Category = require("../../models/category");
const Product = require("../../models/productModel");
const GlobalProduct = require("../../models/globalProductModel");
const Page = require("../../models/pageModel");
const IsRequestGlobalProduct = require("../../models/isRequestGlobalProductModel")


//This is a recursive function. Get more info on recursive function
const createCategories = (categories, parentId = null) => {
    const categoryList = [];
    let category;
    if (parentId == null) {
      category = categories.filter((x) => x.parentId == undefined);
    } else {
      category = categories.filter((x) => x.parentId == parentId);
    }
    for( let cat of category){
        categoryList.push({
            _id: cat._id,
            name: cat.name,
            slug: cat.slug,
            parentId: cat.parentId,
            categoryImage: cat.categoryImage,
            type: cat.type,
            children: createCategories(categories, cat._id)
        });
    };
  
    return categoryList;
  };

 
exports.initDataControl = async (request, response) => {
    // i will be finding all the items in the categories. So i will use an empty object to get all the categories
    const { id } = request.body;
    const categories = await Category.find({}).exec(); //.exec will execute the code and return a promise asynchronously
    const globalProduct = await GlobalProduct.find({}).exec();
    const pages = await Page.find({}).exec();
    const sellerProducts = await Product.find({id})
    .select('_id category sellerId globalId productName  fullDescription shortDescription productImage sellingPrice regularPrice availableQuantity updatedAt minOrder maxOrder currency offer promo postOrder subscription reviews rating negotiable delivery freeDelivery returnable tags recommendedWith frequentlyPurchasedWith giftWithPurchase timestamps ')
    .populate([{path: 'category', select: '_id name type children'}, { path: 'sellerId', select: 'username role'}, { path: 'globalId', select: 'productName fullDescription productImage'}])
    .exec()


    const products = await Product.find({})
    .select('_id category sellerId globalId productName  fullDescription shortDescription productImage sellingPrice regularPrice availableQuantity updatedAt minOrder maxOrder currency offer promo postOrder subscription reviews rating negotiable delivery freeDelivery returnable tags recommendedWith frequentlyPurchasedWith giftWithPurchase timestamps ')
    .populate({path: 'category', select: '_id name children'})
    .exec();
    try {
      response.status(200).json({
        categories: createCategories(categories), // here is a key
        products, // here is another key
        globalProduct,
        sellerProducts,
        pages
    })
    } catch(error){
      response.status(400).json({
        message: error
      })
    }
   

}

