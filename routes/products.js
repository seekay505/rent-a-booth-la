const express = require("express");
const router =  express.Router();
const { showProductsPage } = require("../controllers/products");

// SHOW products page
router.get("/", showProductsPage);

module.exports = router;