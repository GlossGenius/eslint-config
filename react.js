var merge = require("merge-deep");
var base = require("./index");

module.exports = merge(base, {
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "rules": {
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": [0, { "ignorePureComponents": true }]
  }
});
