const Page = require("../../models/pageModel");

exports.createPage = (request, response) => {
    const { banners, products} = request.files;
    const { user } = request.body
    if(banners && banners.length > 0) {
        request.body.banners = banners.map((banner, index) => ({
            img: banner.filename,
            navigateTo: `bannerSelected?categoryId=${request.body.category}&type=${request.body.type}`
        }))
    };

    if(products && products.length > 0) {
        request.body.products = products.map((product, index) => ({
            img: product.filename,
            navigateTo: `productSelected?categoryId=${request.body.category}&type=${request.body.type}`
        }))
    };

    request.body.createdBy = request.user._id;
    // request.body.createdBy = user
    Page.findOne({ category: request.body.category})
    .exec((error, page) => {
        if(error) return response.status(400).json({error});
        if(page) {
            Page.findOneAndUpdate({ category: request.body.category}, requet.body)
            .exec((error, updatedPage) => {
                if(error) return response.status(400).json({error});
                if(updatedPage) return response.status(201).json({page: updatePage})
            })

        } else {
            const page = new Page(request.body);
    page.save((error, page) => {
        if(error) return response.status(400).json({error});
        if(page) return response.status(201).json({page});
    })

        }
    })
};

exports.getPages = (request, response) => {
    Page.find({})
    .select('_id category title description banners products createdBy createdAt updatedAt')
    .populate({
        path: 'createdBy', select: '_id firstName surname username', 
      })
    .exec((error, pages) => {
        if(error) return response.status(400).json({error: "There is error in server, cant get data"})
        if(pages) return response.status(201).json({pages})
    })
};

exports.getPageByURL = (request, response) => {
    const { category, type } = request.params;
    if(type === "page"){
        Page.findOne({category: category})
        .exec((error, page) =>{
            if(error) return response.status(400).json({error});
            if(page) return response.status(200).json({page})
        })
    }
}