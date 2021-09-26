import moment from "moment";
//import { eventSetActive } from "../actions/events";
import { types } from "../types/types";

const initialState = {
    events: [{
        id: new Date().getTime(),
        title: 'Cumpleaños del jefe',
        start: moment().toDate(), // new Date()
        end: moment().add( 2, 'hours' ).toDate(),
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

export const calendarReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }

        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
// Open TO OPEN MODAL ON SLOT
        //case types.eventAddNewOnSlot:
        //    return {
        //        ...state,
        //        events: [
        //            ...state.events,
        //            action.payload
        //        ]
        //    }

        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }
// To update- .map
        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e // The condition will be if the event.id is equal to the id of the event I just changed) then I will take back the action. payload with all the modified info : opposite case will return the event
                )
            }
// To delete- .filter
        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter(
                    e => ( e.id !== state.activeEvent.id )  // Here the envent is in the state/ if event id is diferent from the event I want to Delete, they are going to get back
                ),
                activeEvent: null  // Deactivate the active Event
            }

        default:
            return state;
    }
}
