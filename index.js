module.exports = {
  "globals": {
    "fetch": false
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "import"
  ],
  "rules": {
    "no-confusing-arrow": ["error", { "allowParens": true }],
    "camelcase": 1
  }
};
