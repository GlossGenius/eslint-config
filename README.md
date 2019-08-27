# GlossGenius JavaScript Style Guide

### Table of contents

1. Installation
2. How to use
   * Vanilla JS
   * React
   * React Native
   * Vue.js
3. Contributing

## Installation

Via npm

```
npm install --save-dev eslint eslint-plugin-import eslint-config-glossgenius
```

Via yarn

```
yarn add -D eslint eslint-plugin-import eslint-config-glossgenius
```

## How to use

Depends of what main JS framework you have, you might need a different
eslint configuration. Below you can find files you need to use in
your `extends` directive.

### Vanilla JS aka pure JavaScript

```js
// .eslintrc.js

module.exports = {
  extends: 'glossgenius'
}
```

Additionally you need to install:

- babel-eslint 

Via npm

```
npm install --save-dev babel-eslint
```

Via yarn

```
yarn add -D babel-eslint
```

### React

```js
// .eslintrc.js

module.exports = {
  extends: 'glossgenius/react'
}
```

Additionally you need to install:

- babel-eslint 
- eslint-plugin-react
- eslint-plugin-jsx-a11y

Via npm

```
npm install --save-dev babel-eslint eslint-plugin-react eslint-plugin-jsx-a11y
```

Via yarn

```
yarn add -D babel-eslint eslint-plugin-react eslint-plugin-jsx-a11y
```

### React Native

```js
// .eslintrc.js

module.exports = {
  extends: 'glossgenius/react-native'
}
```

For React Native you need exactly the same additional packages
as for React (please see above)

### Vue.js

```js
// .eslintrc.js

module.exports = {
  extends: 'glossgenius/vue'
}
```

Additionally you need to install:

- eslint-config-vue

Via npm

```
npm install --save-dev eslint-config-vue
```

Via yarn

```
yarn add -D eslint-config-vue
```

## Contributing

You are more than welcome to make contribution. Please follow our contribution guidelines.
