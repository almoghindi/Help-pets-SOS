const express = require("express");

const shopController = require("../controllers/shop-controllers");

const router = express.Router();

router.get("/", shopController.getProducts);
router.get("/:productId", shopController.getProduct);
router.post("/", shopController.addToCart);
router.post("/cart", shopController.cartProducts);
router.delete("/", shopController.deleteCartItem);
router.post("/create-payment-intent", shopController.strip);

module.exports = router;
