const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json({
    message: "RESTful Directory API!",
    functions: ["Retrieving directories details", "data viewing manipulations"],
  });
});

router.get("/get-block-dir", function (req, res) {
  res.json({
    message: "RESTful Directory API!",
    function: "Get block directories",
  });
});

router.get("/get-qrcode", function (req, res) {
  res.json({
    message: "RESTful Directory API!",
    function: "Get qr code details",
  });
});

module.exports = router;
