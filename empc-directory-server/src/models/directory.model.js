const mongoose = require("mongoose");

const directorySchema = mongoose.Schema({
  _id: { type: String, required: true },
  dirId: { type: String, required: true },
  address: {
    block: { type: Number, required: true },
    streetName: { type: String, required: true },
  },
  geo: {
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
  },
});

module.exports = mongoose.model("Directories", directorySchema, "Directories");
