const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
cartItems: [//this is going to use foreign key to save the products into the cart
    {
        product: { type: mongoose.Schema.ObjectId, ref: "Product", required: true},
        bundle: { type: mongoose.Schema.ObjectId, ref: "Bundle", required: false},
        quantity: { type: Number, default: 1},
        price: { type: Number, required: true }
    }
]
},
{timestamps: true});

module.exports = mongoose.model("Cart", cartSchema);