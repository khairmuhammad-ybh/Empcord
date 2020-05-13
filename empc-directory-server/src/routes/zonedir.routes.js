const express = require("express");
const router = express.Router();

const services = require("../services/zonedir.services");

router.get("/", (req, res) => {
  // retrieve all zoneDir
  services
    .fetchAllZoneDir()
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:id", (req, res) => {
  // retrieve zoneDir by id
  zoneDirId = req.params.zoneDirId;

  services
    .fetchAllZoneDir(zoneDirId)
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/", (req, res) => {
  // create zoneDir
  zoneId = req.body.zoneId;
  directories = req.body.directories; // require an object of string
  officers = req.body.officers; // require an object of string

  newZoneDir = {
    zoneDirId: zoneId,
    directories: directories,
    officers: officers,
  };

  services
    .createZoneDir(newZoneDir)
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  // Modify zoneDir
});

module.exports = router;
