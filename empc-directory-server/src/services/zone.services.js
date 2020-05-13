require("../datasources/db.helper");

const Zone = require("../models/zone.model");

// uuid
const { v4: uuidv4 } = require("uuid");

var ns = {};

ns.fetchAllZone = () => {
  return new Promise((resolve, reject) => {
    Zone.find({})
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

ns.fetchZoneById = (zoneId) => {
  return new Promise((resolve, reject) => {
    Zone.findOne({ zoneId: zoneId })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

ns.createZone = (zoneName) => {
  return new Promise((resolve, reject) => {
    let NewZone = new Zone({
      _id: uuidv4(),
      zoneId: uuidv4(),
      zoneName: zoneName,
    });
    console.log(NewQrCode);
    NewZone.save()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

ns.updateZoneById = (data) => {
  return new Promise((resolve, reject) => {
    Zone.findOneAndUpdate(
      { zoneId: data.zoneId },
      { zoneName: data.zoneName },
      { new: true }
    )
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// export all functions
for (prop in ns) {
  if (ns.hasOwnProperty(prop)) {
    module.exports[prop] = ns[prop];
  }
}
