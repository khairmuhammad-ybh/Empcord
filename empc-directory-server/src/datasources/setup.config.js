const dbConf = require("../datasources/db.config");

// modelSchemas
const QrCodeSchema = require("../models/qrcode.model");
const DirectorySchema = require("../models/directory.model");

const createQrCollection = () => {
  return new Promise((resolve, reject) => {
    dbConf
      .openConnection()
      .then((client) => {
        client
          .db()
          .createCollection("QrCode", QrCodeSchema)
          .then((resp) => {
            resolve("QrCode collection successfully created");
          })
          .catch((err) => {
            reject("unable to create QrCode collection");
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const checkCollectionExist = (colName) => {
  return new Promise((resolve, reject) => {
    dbConf
      .openConnection()
      .then((client) => {
          console.log(client.db())
         client.db().listCollections().toArray()
      })
      .then(cols => {
          console.log(cols)
          resolve(cols)
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// createQrCollection()
//   .then((resp) => {
//     console.log(resp);
//     process.exit();
//   })
//   .catch((err) => {
//     console.log(err);
//     process.exit();
//   });

checkCollectionExist()
  .then((resp) => {
    console.log(resp);
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
