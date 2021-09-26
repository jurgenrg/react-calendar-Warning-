"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startLogout = exports.startChecking = exports.startRegister = exports.startLogin = void 0;

var _sweetalert = _interopRequireDefault(require("sweetalert2"));

var _fetch = require("../helpers/fetch");

var _types = require("../types/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var startLogin = function startLogin(email, password) {
  return function _callee(dispatch) {
    var resp, body;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _fetch.fetchSinToken)('auth', {
              email: email,
              password: password
            }, 'POST'));

          case 2:
            resp = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(resp.json());

          case 5:
            body = _context.sent;

            if (body.ok) {
              localStorage.setItem('token', body.token);
              localStorage.setItem('token-init-date', new Date().getTime());
              dispatch(login({
                uid: body.uid,
                name: body.name
              }));
            } else {
              _sweetalert["default"].fire('Error', body.msg, 'error');
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.startLogin = startLogin;

var startRegister = function startRegister(email, password, name) {
  return function _callee2(dispatch) {
    var resp, body;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap((0, _fetch.fetchSinToken)('auth/new', {
              email: email,
              password: password,
              name: name
            }, 'POST'));

          case 2:
            resp = _context2.sent;
            _context2.next = 5;
            return regeneratorRuntime.awrap(resp.json());

          case 5:
            body = _context2.sent;

            if (body.ok) {
              localStorage.setItem('token', body.token); // a problem with the uid

              localStorage.setItem('token-init-date', new Date().getTime());
              dispatch(login({
                uid: body.uid,
                name: body.name
              }));
            } else {
              _sweetalert["default"].fire('Error', body.msg, 'error');
            }

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.startRegister = startRegister;

var startChecking = function startChecking() {
  return function _callee3(dispatch) {
    var resp, body;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap((0, _fetch.fetchConToken)('auth/renew'));

          case 2:
            resp = _context3.sent;
            _context3.next = 5;
            return regeneratorRuntime.awrap(resp.json());

          case 5:
            body = _context3.sent;

            if (body.ok) {
              localStorage.setItem('token', body.token); // a problem with the uid

              localStorage.setItem('token-init-date', new Date().getTime());
              dispatch(login({
                uid: body.uid,
                name: body.name
              }));
            } else {
              dispatch(checkingFinished());
            }

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.startChecking = startChecking;

var checkingFinished = function checkingFinished() {
  return {
    type: _types.types.authCheckingFinish
  };
}; // need this syncron function (dont need thunk) to dispatch to the store to record the info of the user,
// dont need to export because its going to be used only here


var login = function login(user) {
  return {
    type: _types.types.authLogin,
    payload: user
  };
};

var startLogout = function startLogout() {
  return function (dispatch) {
    localStorage.clear(); //  This clear all the token and else

    dispatch(logout());
  };
};

exports.startLogout = startLogout;

var logout = function logout() {
  return {
    type: _types.types.authLogout
  };
};