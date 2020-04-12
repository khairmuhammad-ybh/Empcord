const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "../../app.json");
const apiPath = path.join(__dirname, "./apikeys.utils.js");
const templates = require(path.join(__dirname, "./templates.utils.js"));

const appObj = templates.appJsonObj;

function initAppJson() {
  return new Promise((resolve, reject) => {
    const createStream = fs.createWriteStream(fileName);
    createStream.end();

    fs.writeFile(fileName, JSON.stringify(appObj, null, 2), function writeJSON(
      err
    ) {
      if (err) reject(err);
      // console.log(JSON.stringify(appObj, null, 2));
      console.log("Creating file " + fileName);
      resolve();
    });
  });
}

function amendAppJson() {
  return new Promise((resolve, reject) => {
    try {
      if (fs.existsSync(apiPath)) {
        // file exist
        const apiKeys = require(apiPath);
        const file = require(fileName);
        // file.expo.android.config.googleMaps.apiKey = apiKeys.googleMapApi;
        file.expo.android.config = {
          googleMaps: {
            apiKey: apiKeys.googleMapApi,
          },
        };

        fs.writeFile(
          fileName,
          JSON.stringify(file, null, 2),
          function writeJSON(err) {
            if (err) reject(err);
            // console.log(JSON.stringify(appObj, null, 2));
            console.log("Modifying file" + fileName);
            resolve("API KEY INJECTED");
          }
        );
      } else {
        reject("NO API KEY INJECTED");
      }
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}

function createAppJson() {
  initAppJson()
    .then(() => {
      amendAppJson()
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

createAppJson();
