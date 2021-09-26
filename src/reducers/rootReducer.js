// This is the reducer that contains all the rest of reducers

import { combineReducers } from "redux";
import { calendarReducer } from "./calendarReducer";
import { authReducer } from "./authReducer";

import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({

    ui: uiReducer,
    calendar: calendarReducer,
    auth: authReducer

})
