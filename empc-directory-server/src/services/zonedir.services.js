require("../datasources/db.helper");

const ZoneDir = require("../models/zonedir.model");

// uuid
const { v4: uuidv4 } = require("uuid");

var ns = {};

ns.fetchAllZoneDir = () => {
  return new Promise((resolve, reject) => {
    ZoneDir.find({})
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

ns.fetchAllZoneDirById = (zoneDirId) => {
  return new Promise((resolve, reject) => {
    ZoneDir.findOne({ zoneDirId: zoneDirId })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

ns.createZoneDir = (data) => {
  return new Promise((resolve, reject) => {
    
    // iterate directories into new list
    let directoriesArr = [];
    JSON.parse(data.directories).forEach((element) => {
      directoriesArr.push({
        status: "pending",
        directory: element,
      });
    });

    let NewZoneDir = new ZoneDir({
      _id: uuidv4(),
      zoneDirId: uuidv4(),
      zone: data.zoneId,
      directories: directoriesArr, // require iteration
      officers: JSON.parse(data.officers), // require validation
    });
    resolve(NewZoneDir);
    // NewZone.save()
    //   .then((data) => {
    //     resolve(data);
    //   })
    //   .catch((err) => {
    //     reject(err);
    //   });
  });
};

ns.updateZoneDir = (data) => {
  return new Promise((resolve, reject) => {});
};

// export all functions
for (prop in ns) {
  if (ns.hasOwnProperty(prop)) {
    module.exports[prop] = ns[prop];
  }
}
