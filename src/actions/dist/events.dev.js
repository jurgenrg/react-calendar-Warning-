"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventClearActiveEvent = exports.eventDeleted = exports.eventUpdated = exports.eventSetActive = exports.eventStartAddNew = void 0;

var _types = require("../types/types");

var eventStartAddNew = function eventStartAddNew(event) {
  return function _callee(dispatch) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(event);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.eventStartAddNew = eventStartAddNew;

var eventAddNew = function eventAddNew(event) {
  return {
    type: _types.types.eventAddNew,
    payload: event
  };
}; // TO OPEN MODAL ON ANY SLOT
//export const eventAddNewOnSlot = (e) => ({
//    type: types.eventAddNewOnSlot,
//    payload: e
//});


var eventSetActive = function eventSetActive(event) {
  return {
    type: _types.types.eventSetActive,
    payload: event
  };
};

exports.eventSetActive = eventSetActive;

var eventUpdated = function eventUpdated(event) {
  return {
    type: _types.types.eventUpdated,
    payload: event
  };
};

exports.eventUpdated = eventUpdated;

var eventDeleted = function eventDeleted(event) {
  return {
    type: _types.types.eventDeleted
  };
};

exports.eventDeleted = eventDeleted;

var eventClearActiveEvent = function eventClearActiveEvent() {
  return {
    type: _types.types.eventClearActiveEvent
  };
};

exports.eventClearActiveEvent = eventClearActiveEvent;