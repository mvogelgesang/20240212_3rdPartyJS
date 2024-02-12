# 3rdPartyJS

Demonstrates the conversion of an ES6 module CountyJS to an IIFE so as to be consumed by a Lightning Web Component. This example shows how to convert the JS file within a Salesforce project. However, adding the IIFE generation as a build step in the JS library is the better way to go.

CountyJS is a simple ES6 module that exports two functions, `findCountiesByName` and `findCountiesByState`. The two functions are exported and made available via the CountyJS namespace. 

## Converting ES6 to IIFE

To convert the module to an IIFE, we will use webpack.

`npm install -D webpack webpack-cli`

Create webpack.config.js in the root of your project. This file determines the input and output files for the module. 

```js
const path = require("path");
// webpack.config.js
module.exports = {
  entry: "./countiesJS/src/countiesJS.js",
  output: {
    path: path.resolve(__dirname, "countiesJS/dist"), 
    filename: "countiesIIFE.js", 
  },
};
```

Add a command to `package.json` to execute webpack, in this repo it is called `buildJS`.

```json
"scripts": {
  "buildJS": "webpack --mode production",
  ...
}
```

Run buildJS and observe output to dist.

`npm run buildJS`

Copy contents of `countiesIIFE.js` into your static resource file.

Deploy source to org `sf project deploy start`.

## Seeing it in action

Deploy source to org `sf project deploy start`

Open any App or Home lightning page and drag the counties component into place.

Activate and Save