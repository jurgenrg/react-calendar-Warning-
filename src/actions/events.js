import { types } from "../types/types";

export const eventStartAddNew = ( event ) => {
    return async( dispatch ) => {
        console.log(event)
    }
}

const eventAddNew = (event) => ({

    type: types.eventAddNew,
    payload: event

});


// TO OPEN MODAL ON ANY SLOT
//export const eventAddNewOnSlot = (e) => ({

//    type: types.eventAddNewOnSlot,
//    payload: e
//});

export const eventSetActive = (event) => ({

    type: types.eventSetActive,
    payload: event

});

export const eventUpdated = (event) => ({

    type: types.eventUpdated,
    payload: event

});

export const eventDeleted = (event) => ({

    type: types.eventDeleted

});


export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent });