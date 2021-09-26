"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = void 0;
var types = {
  // Open and Close Modal
  uiOpenModal: '[ui] Open modal',
  uiCloseModal: '[ui] Close modal',
  // Add a new Event on the Calendar
  eventSetActive: '[event] Set active',
  eventStartAddNew: '[event] Start add new',
  eventAddNew: '[event] Add new',
  //eventAddNewOnSlot: '[event] Add new here', // TO OPEN MODAL ON ANY SLOT
  eventClearActiveEvent: '[event] Clear active event',
  eventUpdated: '[event] Event updated',
  eventDeleted: '[event] Event deleted',
  //authChecking: '[auth] Checking login state',    // To check if is working (not needed at the final)
  authCheckingFinish: '[auth] Finish checking login state',
  // To know at the end of the checking if token is rigth or not
  authStartLogin: '[auth] Start login',
  authLogin: '[auth] Login',
  // Here is when we get the authentification and we want to call something to stablish teh user auth.
  authStartRegister: '[auth] Start register',
  authStartTokenRenew: '[auth] Start token renew',
  authLogout: '[auth] Logout'
};
exports.types = types;