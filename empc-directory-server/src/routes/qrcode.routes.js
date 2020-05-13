const express = require("express");
const router = express.Router();

const services = require("../services/qrcode.services");

// retrieve all qrcode
router.get("/", function (req, res) {
  services
    .fetchAllQrCode()
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

// retrieve single qrcode by id
router.get("/:id", function (req, res) {
  qrId = req.params.id;

  services
    .fetchQrCodeById(qrId)
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

// create qrcode
router.post("/", (req, res) => {
  body = req.body;

  services
    .createQrCode(body)
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

// modify qrcode
router.put("/:id", (req, res) => {
  updateQrCode = {
    qrId: req.params.id,
    qrData: req.body.qrData,
    qrDesc: req.body.qrDesc,
  };

  services
    .updateQrCodeById(updateQrCode)
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      resp.json(err);
    });
});

// asssigning qrcode to directory
router.put("/:id/directory", (req, res) => {
  console.log(req.body.data);
  res.json({
    message: "RESTful Directory API!",
    function: "Assigning Qrcode to directory",
  });
});

module.exports = router;
