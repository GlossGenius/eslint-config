var merge = require("merge-deep");
var react = require("./react");

module.exports = merge(react, {
  "rules": {
    "react/destructuring-assignment": [0, "never"],
    "react/require-default-props": [2, { "forbidDefaultForRequired": false }],
    "react/default-props-match-prop-types": [2, { "allowRequiredDefaults": true }]
  }
});
