require("../datasources/db.helper");

const Directories = require("../models/directory.model");

// uuid
const { v4: uuidv4 } = require("uuid");

var ns = {};

ns.createDirectory = (body) => {
  return new Promise((resolve, reject) => {
    let NewDirectory = new Directories({
      _id: uuidv4(),
      dirId: uuidv4(),
      address: {
        block: body.block,
        streetName: body.streetName,
      },
      geo: {
        lat: body.lat,
        long: body.long,
      },
    });

    NewDirectory.save()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

ns.fetchDirectory = () => {
  return new Promise((resolve, reject) => {
    Directories.find()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

ns.fetchDirectoryById = (dirId) => {
  return new Promise((resolve, reject) => {
    Directories.findOne({ dirId: dirId })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

ns.updateDirectoryById = (data) => {
  return new Promise((resolve, reject) => {
    Directories.fi;
    Directories.findOneAndUpdate(
      { dirId: data.dirId },
      { address: data.updatedAddr, geo: data.updatedGeo },
      { new: true }
    )
      .then((updatedData) => {
        resolve(updatedData);
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
