const mongoose = require("mongoose");

const zoneSchema = mongoose.Schema({
  _id: { type: String, required: true },
  zoneId: { type: String, required: true },
  zoneName: { type: String, required: true },
});

module.exports = mongoose.model("Zones", zoneSchema, "Zones");
