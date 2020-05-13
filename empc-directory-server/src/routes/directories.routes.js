const express = require("express");
const router = express.Router();

const services = require("../services/directories.services");

// retrieve all directories
router.get("/", function (req, res) {
  services
    .fetchDirectory()
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

// retrieve single directory by id
router.get("/:id", function (req, res) {
  dirId = req.params.id;
  services
    .fetchDirectoryById(dirId)
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

// creation of directory
router.post("/", (req, res) => {
  body = req.body;

  services
    .createDirectory(body)
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

// modify directory
router.put("/:id", (req, res) => {
  let dirId = req.params.id;
  let data = req.body;
  updateData = {
    dirId: dirId,
    updatedAddr: {
      block: data.block,
      streetName: data.streetName,
    },
    updatedGeo: {
      lat: data.lat,
      long: data.long,
    },
  };

  services
    .updateDirectoryById(updateData)
    .then((resp) => {
      res.json(resp);
    })
    .catch((err) => {
      res.json(err);
    });
});

// assigning directory to zone
router.put("/:id/zone", (req, res) => {
  console.log(req.body.data);
  res.json({
    message: "RESTful Directory API!",
    function: "Assigning directory to zone",
  });
});

module.exports = router;
