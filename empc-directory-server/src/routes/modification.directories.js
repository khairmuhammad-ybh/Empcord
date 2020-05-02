const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json({
    message: "RESTful Directory API!",
    functions: ["Modified directories details", "Modified QR Code"],
  });
});

router.get("/dir-details", function (req, res) {
  res.json({
    message: "RESTful Directory API!",
    function: "Modified directory details",
  });
});

router.get("/qr-details", function (req, res) {
  res.json({
    message: "RESTful Directory API!",
    function: "Modified qr details",
  });
});

module.exports = router;
