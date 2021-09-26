"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchConToken = exports.fetchSinToken = void 0;
var baseUrl = process.env.REACT_APP_API_URL;

var fetchSinToken = function fetchSinToken(endpoint, data) {
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  var url = "".concat(baseUrl, "/").concat(endpoint); // add to localhost the respective endpoint

  if (method === 'GET') {
    return fetch(url);
  } else {
    // if is not get...
    return fetch(url, {
      method: method,
      // put, delete, update... any method
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data) // return the body like a json string

    });
  }
};

exports.fetchSinToken = fetchSinToken;

var fetchConToken = function fetchConToken(endpoint, data) {
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  var url = "".concat(baseUrl, "/").concat(endpoint); // add to localhost the respective endpoint

  var token = localStorage.getItem('token') || ''; // Here would return null, so let an empty string if is null

  if (method === 'GET') {
    return fetch(url, {
      method: method,
      headers: {
        'x-token': token
      }
    });
  } else {
    // if is not get...
    return fetch(url, {
      method: method,
      // put, delete, update... any method
      headers: {
        'Content-type': 'application/json',
        'x-token': token
      },
      body: JSON.stringify(data) // return the body like a json string

    });
  }
};

exports.fetchConToken = fetchConToken;