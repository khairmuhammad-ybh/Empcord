const mongoose = require("mongoose");

const qrCodeSchema = mongoose.Schema({
  _id: { type: String, required: true },
  qrId: { type: String, required: true },
  qrData: { type: String, required: true },
  qrDesc: { type: String, required: true },
});

module.exports = mongoose.model("QrCodes", qrCodeSchema, "QrCodes");
