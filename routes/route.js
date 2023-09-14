const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.get("/", controller.getTodo);
router.post("/save", controller.saveTodo);

module.exports = router;
