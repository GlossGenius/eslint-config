module.exports = {
  "globals": {
    "fetch": false
  },
  "extends": "airbnb-base",
  "parser": "babel-eslint",
  "plugins": [
    "import"
  ],
  "rules": {
    "no-confusing-arrow": ["error", { "allowParens": true }],
    "import/prefer-default-export": "off",
    "camelcase": 1
  }
};
