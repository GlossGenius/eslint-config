var path = require("path");

module.exports = {
  "extends": [
    path.resolve(__dirname, "./index"),
    "plugin:vue/recommended",
  ],
  "parser": "vue-eslint-parser"
  "rules": {
    "camelcase": 0
  }
};
