const express = require("express");
const path = require("path")
const mainControllers = require(path.join(__dirname, "../controllers/mainController.js"))
const router = express.Router();

router.get("/", mainControllers.index);
router.get("/about", mainControllers.about);

module.exports = router;

