const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.json({
    message: "RESTful Directory API!",
    functions: ["Assigning directories details", "Assigning QR Code"],
  });
});

router.get("/qr-location", function (req, res) {
  res.json({
    message: "RESTful Directory API!",
    function: "assign qr location",
  });
});

router.get("/dir-to-zone", function (req, res) {
  res.json({
    message: "RESTful Directory API!",
    function: "assign directory to zone",
  });
});

module.exports = router;
