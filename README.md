# GlossGenius JavaScript Style Guide

## Table of contents

1. [Installation](#installation)
2. [How to use](#how-to-use)
   * [Vanilla JS](#vanilla-js-aka-pure-javascript)
   * [React](#react)
   * [React Native](#react-native)
   * [Vue.js](#vuejs)
3. [Contributing](#contributing)

## Installation

*Please notice* you can install additional packages with `npm` or `yarn`.

Via `npm`

```
npm install --save-dev eslint eslint-plugin-import @glossgenius/eslint-config
```

Via `yarn`

```
yarn add -D eslint eslint-plugin-import @glossgenius/eslint-config
```

## How to use

Depends of what main JS framework you have, you might need a different
eslint configuration. Below you can find files you need to use in
your `extends` directive.

Please notice you can *use JS or JSON config type* for eslint.

### Vanilla JS aka pure JavaScript

#### Additional packages

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

#### Eslint Config

If you use JS type:
```js
// .eslintrc.js

module.exports = {
  extends: '@glossgenius'
}
```

If you use JSON type:
```json
// .eslintrc.json

{
  "extends": "@glossgenius"
}
```

### React

#### Additional packages

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

#### Eslint Config

If you use JS type:
```js
// .eslintrc.js

module.exports = {
  extends: '@glossgenius/eslint-config/react'
}
```

If you use JSON type:
```json
// .eslintrc.json

{
  "extends": "@glossgenius/eslint-config/react"
}
```

### React Native

#### Additional packages

For React Native you need exactly the same additional packages
as for React (please see above)

#### Eslint Config

If you use JS type:
```js
// .eslintrc.js

module.exports = {
  extends: '@glossgenius/eslint-config/react-native'
}
```

If you use JSON type:
```json
// .eslintrc.json

{
  "extends": "@glossgenius/eslint-config/react-native"
}
```

### Vue.js

#### Additional packages

Additionally you need to install:

- eslint-plugin-vue

Via npm

```
npm install --save-dev eslint-plugin-vue
```

Via yarn

```
yarn add -D eslint-plugin-vue
```

#### Eslint Config

If you use JS type:
```js
// .eslintrc.js

module.exports = {
  extends: '@glossgenius/eslint-config/vue'
}
```

If you use JSON type:
```json
// .eslintrc.json

{
  "extends": "@glossgenius/eslint-config/vue"
}
```

## Contributing

You are more than welcome to make contribution. Please follow our contribution guidelines.
