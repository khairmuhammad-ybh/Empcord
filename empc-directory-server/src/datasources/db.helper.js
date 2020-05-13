const mongoose = require("mongoose");

var MONGO_URL;
var dsConfig = require("../utils/ds.config");
let env = process.env.ds_env;
if (env === "development") {
  MONGO_URL = dsConfig.DS_DEV.url;
} else {
  MONGO_URL = dsConfig.DS_AWS.url;
}

console.log(`Server instance running in ${env}`);
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log("database connected");
    },
    (err) => {
      console.log(`err: ${err}`);
    }
  );
