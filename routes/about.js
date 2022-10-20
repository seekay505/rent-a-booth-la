const express = require("express");
const router =  express.Router();
const { showAboutPage } = require("../controllers/about");

// SHOW about page
router.get("/", showAboutPage);

module.exports = router;