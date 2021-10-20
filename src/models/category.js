const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({

    name: { type: String, required: true, trim: true, unique: true},
    // _id: {type: String},
    slug: {
        type: String, required: false, unique: true
    },
    type: {type: String},
    categoryImage: {type: String},
    parentId: { type: String}
}, {timestamps: true});

module.exports = mongoose.model("Category", categorySchema); 