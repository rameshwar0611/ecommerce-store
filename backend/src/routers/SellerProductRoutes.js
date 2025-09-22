const express = require("express");
const sellerMiddleware = require("../middlewares/sellerAuthMiddleware.js");
const ProductController = require("../controllers/ProductController.js");
const router = express.Router();

router.get("/", sellerMiddleware, ProductController.getProductBySellerId);

router.post("/", sellerMiddleware, ProductController.createProduct);

router.delete("/:productId", sellerMiddleware, ProductController.deleteProduct);

router.patch("/:productId", sellerMiddleware, ProductController.updateProduct);

module.exports = router;
