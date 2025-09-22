const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

router.get("/search", ProductController.searchProduct);

router.get("/", ProductController.getAllProducts);

router.get("/:productId", ProductController.getProductById);

module.exports = router;  
