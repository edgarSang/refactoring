# Vanilla Js Boiler Plate with webpack, webpack-dev-server
---
## 1. Start and Build and Info
### 1.1. Script
```
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack",
	"test": "jest"
  }
```

### 1.2. Initilize Library

```
  yarn add webpack webpack-dev-server webpack-cli style-loader css-loader html-webpack-plugin babel-loader babel-jest jest @babel/core @babel/preset-env
 -d
```  


### 1.3. For Test with jest

```
  "babel": {
    "presets": [
      "@babel/preset-env"
    ]
  }
```