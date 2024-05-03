/** @format */

const path = require("path");

module.export = {
  entry: "./src/app.ts",
  output: {
    filename: "bundle.ts",
    path: path.resolve(__dirname, "dist"),
  },
};
