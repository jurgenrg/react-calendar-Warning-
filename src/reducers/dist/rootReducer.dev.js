"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducer = void 0;

var _redux = require("redux");

var _calendarReducer = require("./calendarReducer");

var _authReducer = require("./authReducer");

var _uiReducer = require("./uiReducer");

// This is the reducer that contains all the rest of reducers
var rootReducer = (0, _redux.combineReducers)({
  ui: _uiReducer.uiReducer,
  calendar: _calendarReducer.calendarReducer,
  auth: _authReducer.authReducer
});
exports.rootReducer = rootReducer;