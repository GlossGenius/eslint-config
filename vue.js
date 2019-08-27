var merge = require("merge-deep");
var base = require("./index");

module.exports = merge(base, {
  "extends": "plugin:vue/recommended",
  "plugins": [
    "import"
  ],
});
