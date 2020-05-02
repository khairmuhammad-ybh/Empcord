const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// routes declarations
const directories = require("./routes/directories");
const assign = require("./routes/assignment.directories");
const mod = require("./routes/modification.directories");

const app = express();
const port = 3000;

app.use(cors());

//Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/", directories);
app.use("/assign", assign);
app.use("/mod", mod);

app.listen(port, () =>
  console.log(`Directory APi app listening on port ${port}`)
);
