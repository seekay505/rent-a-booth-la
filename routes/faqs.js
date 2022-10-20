const express = require("express");
const router = express.Router();
const { showFAQsPage } = require("../controllers/faqs");

// SHOW faqs page
router.get("/", showFAQsPage);

module.exports = router;