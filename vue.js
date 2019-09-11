var path = require("path");

module.exports = {
  "extends": [
    path.resolve(__dirname, "./index"),
    "plugin:vue/recommended"
  ],
  "parser": "vue-eslint-parser",
  "rules": {
    "max-len": ["error", { "code": 120 , "ignoreUrls": true }],
    "camelcase": 0
  },
  "settings": {
    "import/resolver": {
      "node": {
        // For using absolute path for our code base
        "path": ["src"],
        // Please don't forget to update `vue.config.js` in your project with the following configuration:
        //
        // const path = require('path');
        //
        // module.exports = {
        //   configureWebpack: {
        //     resolve: {
        //       modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        //     },
        //   },
        // };
        "extensions": [".js", ".jsx", ".vue"],
      },
    },
  },
};

