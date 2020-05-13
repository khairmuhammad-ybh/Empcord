const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// routes declarations
const directories = require("./src/routes/directories.routes");
const qrcode = require("./src/routes/qrcode.routes");
const zoneDir = require("./src/routes/zonedir.routes");
const zone = require("./src/routes/zone.routes");

const app = express();
const port = 3000;

app.use(cors());

//Configuring middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/directory", directories);
app.use("/qrcode", qrcode);
app.use("/zonedir", zoneDir);
app.use("/zone", zone);

app.listen(port, () =>
  console.log(`Directory APi app listening on port ${port}`)
);
