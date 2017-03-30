# React Starterkit

A lightweight Starterkit including [React](https://facebook.github.io/react/), [Redux](http://redux.js.org/), [React Router v4](https://reacttraining.com/react-router/), [Stylus](http://stylus-lang.com/), [Webpack v2](https://webpack.js.org/) and [React Icons](https://gorangajic.github.io/react-icons/index.html).

## Get the kit

```sh
$ git clone git@github.com:wbkd/react-starter.git && cd react-starter
```

## Installation

Install all dependencies using [yarn](https://yarnpkg.com/).

```sh
$ yarn
```

otherwise

```sh
$ npm install
```

## Development

Builds the application and starts a webserver with hot loading.
Runs on [localhost:3000](http://localhost:3000/)

```sh
$ npm run start
```

## Build

Builds a minified version of the application in the build folder.

```sh
$ npm run build
```

## Zip
Creates an zip archive of your build into the build folder.

```sh
$ npm run zip
```

## Deploy
Runs the build and zip task and uploads to your server.

```sh
$ npm run deploy
```

## Embed version
Under [localhost:3000/index_iframe.html](http://localhost:3000/index_iframe.html) you will find a embed version of your for testing purposes.

## Helper functions in utils (ES6 exports)
log, isUndefined, isNumeric, numberFormat, addHelperClasses,
isSmartphone, isTablet, isDesktop, isSmallDevice, clickEvent, isOldIE

```javascript
import { isTablet } from '../../helper/utils';

console.log(isTablet);
```


## Contribute

Feel free to dive in! [Open an issue](https://github.com/wbkd/react-starter/issues/new) or submit PRs.
