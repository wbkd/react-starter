// https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/config/polyfills.js

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

Object.assign = require('object-assign');

// fetch() polyfill for making API calls.
// require('whatwg-fetch');
