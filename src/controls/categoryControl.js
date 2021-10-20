const expressAsyncHandler = require("express-async-handler");
const Category = require("../models/category");
const slugify = require("slugify");
const shortid = require("shortid")


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

exports.addCategory = (request, response) => {
  const categoryObj = {
    name: request.body.name,
    slug: `${slugify(request.body.name)}-${shortid.generate()}`,
    type: request.body.type
  };

  

  if(request.file){
    const envPath = process.env.API;
    categoryObj.categoryImage = "/public/" + request.file.filename;
  }
  if (request.body.parentId) {
    categoryObj.parentId = request.body.parentId;
  }

  const newCategory = new Category(categoryObj);
  newCategory.save((error, category) => {
    if (error) return response.status(400).json({ error });
    if (category) return response.status(201).json(category);
  });
};

exports.getCategories =  (request, response) => {
  Category.find({}).exec((error, categories) => {
    if (error) return response.status(400).json({ error: "Can not process your request" });
    if (categories) {
      const categoryList = createCategories(categories);
      response.status(200).json( categoryList );
    }
  });
};

exports.updateCategories = async (request, response) => {
  const {_id, name, parentId, type} = request.body;
  const updatedCategories = [];

  if(name instanceof Array){
    for(let i = 0; i < name.length; i++){
      const category = {
        name: name[i],
        type: type[i], 
        slug: slugify(name[i]) 
      };
      if(parentId[i] !== "") category.parentId = parentId[i];
    
    // Here will find the particular category to update in the Category database 
    // The {new: true} will return an updated item from the database
    const updatedCategory = await Category.findOneAndUpdate({_id: _id[i]}, category, {new: true});
    updatedCategories.push(updatedCategory);
  } 
    return response.status(201).json( updatedCategories );
  }else {
    const category = {
      name,
      type,
      slug: name
    };
    if(parentId !== "") category.parentId = parentId;
    const updatedCategory = await Category.findOneAndUpdate({_id}, category, {new: true});
    updatedCategories.push(updatedCategory);
    return response.status(201).json({ updatedCategories });

  };
  // response.status(200).json({body: request.body})
}

exports.deleteCategories = async (request, response) => {
  const { ids } = request.body.payload;
  const deletedCategories = [];
  for(let i=0; i < ids.length; i++){
    const deleteCategory = await Category.findOneAndDelete({_id: ids[i]._id})
    deletedCategories.push(deleteCategory)
  }

  try {
    if(deletedCategories.length === ids.length){
      response.status(201).json({message: "Categories removed"})
    } 
  } catch(error){
    response.status(400).json({message: "There was an issue", serverError: error})
  }
 
}