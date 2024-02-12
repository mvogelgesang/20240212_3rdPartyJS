const path = require("path");
// webpack.config.js
module.exports = {
  entry: "./countiesJS/src/countiesJS.js",
  output: {
    path: path.resolve(__dirname, "countiesJS/dist"), 
    filename: "countiesIIFE.js", 
  },
};