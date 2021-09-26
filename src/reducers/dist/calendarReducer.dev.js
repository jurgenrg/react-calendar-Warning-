"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calendarReducer = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _types = require("../types/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  events: [{
    id: new Date().getTime(),
    title: 'Cumpleaños del jefe',
    start: (0, _moment["default"])().toDate(),
    // new Date()
    end: (0, _moment["default"])().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    //slots: moment().toDate(),
    //action: "doubleClick",
    //box: { // For "click" or "doubleClick" actions
    //    clientX: { clientX },
    //    clientY: { clientY },
    //    x: { x },
    //    y: { y },
    //},
    user: {
      _id: '123455',
      name: 'Lila'
    }
  }],
  activeEvent: null
};

var calendarReducer = function calendarReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types.types.eventSetActive:
      return _objectSpread({}, state, {
        activeEvent: action.payload
      });

    case _types.types.eventAddNew:
      return _objectSpread({}, state, {
        events: [].concat(_toConsumableArray(state.events), [action.payload])
      });
    // Open TO OPEN MODAL ON SLOT
    //case types.eventAddNewOnSlot:
    //    return {
    //        ...state,
    //        events: [
    //            ...state.events,
    //            action.payload
    //        ]
    //    }

    case _types.types.eventClearActiveEvent:
      return _objectSpread({}, state, {
        activeEvent: null
      });
    // To update- .map

    case _types.types.eventUpdated:
      return _objectSpread({}, state, {
        events: state.events.map(function (e) {
          return e.id === action.payload.id ? action.payload : e;
        } // The condition will be if the event.id is equal to the id of the event I just changed) then I will take back the action. payload with all the modified info : opposite case will return the event
        )
      });
    // To delete- .filter

    case _types.types.eventDeleted:
      return _objectSpread({}, state, {
        events: state.events.filter(function (e) {
          return e.id !== state.activeEvent.id;
        } // Here the envent is in the state/ if event id is diferent from the event I want to Delete, they are going to get back
        ),
        activeEvent: null // Deactivate the active Event

      });

    default:
      return state;
  }
};

exports.calendarReducer = calendarReducer;