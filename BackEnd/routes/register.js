const express = require("express");
const router = express();
const registerController = require("../controller/registerController");

router.post("/", registerController.handelNewUSer);

module.exports = router;
