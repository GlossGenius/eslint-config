const config = {
  "globals": {
    "fetch": false
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "no-confusing-arrow": ["error", { "allowParens": true }],
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
    "camelcase": 1,
    "react/destructuring-assignment": [0, "never"],
    "react/require-default-props": [2, { "forbidDefaultForRequired": false }],
    "react/default-props-match-prop-types": [2, { "allowRequiredDefaults": true }]
  }
};

export default config 
