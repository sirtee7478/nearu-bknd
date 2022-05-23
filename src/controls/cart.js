const expressAsyncHandler = require("express-async-handler");
const Cart = require("../models/cartModel");

exports.addToCart = expressAsyncHandler(async (request, response) => {
  Cart.findOne({ user: request.user._id }).exec((error, cart) => {
    if (error) return response.status(401).json({ error });
    if (cart) {
      //this will return an array of cart items of the same product
      //if cart item already exist this code should update the cart quantity

      const product = request.body.cartItems.product;
      //this will find one out of all the cart items
      const item = Cart.cartItems.find((c) => c.product == product);

      let condition, action; 

      //If the item exist i want to only update the quantity
      if (item) {
        condition = { user: request.user._id, "cartItems.product": product };
        action = {
          $set: {
            "cartItems.$": {
              // the reason why i added dot dollar symbol is so that the set cartItems replace all other items in the cart
              ...request.body.cartItems, //spread all the items in the cart
              quantity: item.quantity + request.body.cartItems.quantity, // it takes the specific item as indicated above and change the quantity
              price: item.price * request.body.cartItems.quantity,
            },
          },
        };

      } else {
        condition = { user: request.user._id };
        action = {
          $push: {
            cartItems: request.body.cartItems,
          },
        };
      }

      Cart.findOneAndUpdate( condition, action)
        .exec((error, _cart) => {
          if (error) return response.status(401).json({ error });
          if (_cart) {
            return response.status(201).json({ cart: _cart });
          }
        });
        
      // response.status(200).json({message: cart})
    } else {
      const cart = new Cart({
        user: request.user._id,
        cartItems: [request.body.cartItems],
      });

      cart.save((error, cart) => {
        if (error) return response.status(400).json({ error });
        if (cart) {
          return response.status(200).json({ cart });
        }
      });
    }
  });
});
