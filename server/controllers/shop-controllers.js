const HttpError = require("../models/http-error");
const Product = require("../models/product");
const User = require("../models/user");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const getProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find({});
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({
    products: products.map((product) => product.toObject({
      getters: true
    })),
  });
};

const getProduct = async (req, res, next) => {
  const productId = req.params.productId;
  let product;
  try {
    product = await Product.findById(productId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a product.",
      500
    );
    return next(error);
  }

  if (!product) {
    const error = new HttpError(
      "Could not find place for the provided id.",
      404
    );
    return next(error);
  }

  res.json({
    product: product.toObject({
      getters: true
    })
  });
};

const addToCart = async (req, res, next) => {
  const { userId, productId, imageUrl, title, secondTitle, price, quantity } = req.body;
  let user;
  try {
    user = await User.findById(userId, "-_id");
  } catch (err) {
    const error = new HttpError(
      "Adding to cart failed, please try again.",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided id.", 404);
    return next(error);
  }

  try {
    let exist = false;
    for (let i = 0; i < user.cart.length; i++) {
      if (user.cart[i].productId.equals(productId)) {
        user.cart[i].quantity = user.cart[i].quantity + quantity;
        exist = true;
      }
    }
    if (!exist) {
      user.cart.push({
        productId: productId,
        quantity: quantity,
        imageUrl: imageUrl,
        title: title,
        secondTitle: secondTitle,
        price: price
      });
    }
    await User.findByIdAndUpdate(userId, user);
  } catch (err) {
    const error = new HttpError(
      "Adding to cart failed, please try again.",
      500
    );
    return next(error);
  }
};

const cartProducts = async (req, res, next) => {
  const { userId } = req.body;
  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Adding to cart failed, please try again.",
      500
    );
    return next(error);
  }
  if (!user) {
    const error = new HttpError("Could not find user for provided id.", 404);
    return next(error);
  }
  const products = user.cart.map((product) => product.toObject({ getters: true }));
  let quantity = 0;
  let totalPrice = 0;

  for (let i = 0; i < products.length; i++) {
    quantity += products[i].quantity;
    totalPrice += products[i].quantity * products[i].price;
  }
  
  res.json({
    products: products,
    quantity: quantity,
    totalPrice: totalPrice.toFixed(2),
  });
}

const deleteCartItem = async (req, res, next) => {
  const { userId, cartProductId } = req.body;
  let user;
  try {
    user = await User.findById(userId);
    const productIndex = user.cart.map(obj => obj.id).indexOf(cartProductId);
    user.cart.splice(productIndex, 1);
    await User.findByIdAndUpdate(userId, user);

  } catch (err) {
    const error = new HttpError(
      "Adding to cart failed, please try again.",
      500
    );
    return next(error);
  }
}

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  let total = 0;
  for (let i = 0; i < items.length; i++){
    total += items[i].price * items[i].quantity;
  }
  return Math.round(total)*100;
  // return 50;
};

const strip = async (req, res, next) => {
  const { userId } = req.body;

   let existingUser;

   try {
     existingUser = await User.findById(userId, "-password");
   } catch (err) {
     const error = new HttpError(
       "Logging in failed, please try again later.",
       500
     );
     return next(error);
   }
   if (!existingUser) {
     const error = new HttpError(
       "Invalid credentials, could not log you in.",
       401
     );
     return next(error);
   }
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(existingUser.cart),
    currency: "USD",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}


exports.strip = strip;
exports.deleteCartItem = deleteCartItem; 
exports.cartProducts = cartProducts;
exports.addToCart = addToCart;
exports.getProducts = getProducts;
exports.getProduct = getProduct;