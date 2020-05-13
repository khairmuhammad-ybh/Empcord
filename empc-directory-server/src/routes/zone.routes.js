const express = require("express");
const router = express.Router();

const services = require("../services/zone.services");

router.get("/", (req, res) => {
  // retrieve all zone
  services
    .fetchAllZone()
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/;Id", (req, res) => {
  // retrieve all zone
  zoneId = req.params.zoneId;

  services
    .fetchZoneById(zoneId)
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  // create zone
  zoneName = req.body.zoneName;

  services
    .createZone(zoneName)
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  // Modify zone
  updateZone = {
    zoneId: req.params.id,
    zoneName: req.body.qrData,
  };

  services
    .updateZoneById(updateZone)
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
