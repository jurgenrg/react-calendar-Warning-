"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uiCloseModal = exports.uiOpenModal = void 0;

var _types = require("../types/types");

var uiOpenModal = function uiOpenModal() {
  return {
    type: _types.types.uiOpenModal
  };
};

exports.uiOpenModal = uiOpenModal;

var uiCloseModal = function uiCloseModal() {
  return {
    type: _types.types.uiCloseModal
  };
};

exports.uiCloseModal = uiCloseModal;