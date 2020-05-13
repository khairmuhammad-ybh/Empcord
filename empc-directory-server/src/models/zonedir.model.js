const mongoose = require("mongoose");

const zoneDirSchema = mongoose.Schema({
  _id: { type: String, required: true },
  zoneDirId: { type: String, required: true },
  zone: { type: String, required: true },
  directories: [
    {
      status: { type: String, required: true }, // (status: complete/pending)
      directory: { type: String, required: true }, // reference dirId
    },
  ],
  officers: [{ type: String, requred: false }],
});

module.exports = mongoose.model("ZoneDir", zoneDirSchema, "ZoneDir");
