var path = require("path");

module.exports = {
  "extends": [
    path.resolve(__dirname, "./index"),
    "plugin:vue/recommended"
  ],
  "parser": "vue-eslint-parser",
  "rules": {
    "max-len": ["error", { "code": 120 , "ignoreUrls": true }],
    "camelcase": 0,
    "no-param-reassign": ["error", {
      "props": true,
      "ignorePropertyModificationsFor": [
        "state", // for vuex state
        "acc" // for reduce accumulators
      ]
    }]
  },
};

