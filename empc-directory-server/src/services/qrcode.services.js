const QrCode = require("../models/qrcode.model");

// uuid
const { v4: uuidv4 } = require("uuid");

var ns = {};

ns.createQrCode = (body) => {
  return new Promise((resolve, reject) => {
    let NewQrCode = new QrCode({
      _id: uuidv4(),
      qrId: uuidv4(),
      qrData: body.qrData,
      qrDesc: body.qrDesc,
    });
    console.log(NewQrCode);
    NewQrCode.save()
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

ns.fetchAllQrCode = () => {
  return new Promise((resolve, reject) => {
    QrCode.find({})
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

ns.fetchQrCodeById = (qrId) => {
  return new Promise((resolve, reject) => {
    QrCode.findOne({ qrId: qrId })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

ns.updateQrCodeById = (data) => {
  return new Promise((resolve, reject) => {
    QrCode.findOneAndUpdate(
      { qrId: data.qrId },
      { qrData: data.qrData, qrDesc: data.qrDesc },
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
