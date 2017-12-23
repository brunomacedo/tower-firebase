# Firebase project with TDD and ES6
Software management for parking vehicles.

## Important commands

1.0 - List global npm plugins

```prompt
npm list -g --depth=0
```


## Fix possible bugs

### 1.0 - Webpack > UglifyJSPlugin
Maybe you'll have some trouble with this plugin. However, you can solve this installing it separately.


```
npm i -D uglifyjs-webpack-plugin
```

#### Config your `webpack.config.js` file.

```javascript
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

[...]
plugins: [
  new UglifyJSPlugin({
    uglifyOptions: {
      compress: { warnings: false },
      output: { comments: false },
    },
    sourceMap: true,
  }),
],
```

### 2.0 - NPM Error while running the test
This is a problem when using npm run, it has to do with Mocha exiting with code !== 0 whenever a test fails.


![http://prntscr.com/hripxp](https://image.prntscr.com/image/3aW37MduTDGKydeFPv_-zg.png)


```javascript
"scripts": {
  "test": "./node_modules/.bin/mocha specs/**/*.spec.js || ECHO.",
},
```
