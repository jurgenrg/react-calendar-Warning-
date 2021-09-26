import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import moment from 'moment';
import 'moment/locale/es';

import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive } from '../../actions/events';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-esp';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('esp'); // Moment makes all changes to spanish

const localizer = momentLocalizer(moment); // or globalizeLocalizer


export const CalendarScreen = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar)

    // Estado que cuando cambia actualiza las cosas
    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' );

    const doubleClick = (e) => {
        //console.log(e)
        dispatch( uiOpenModal() );
        //dispatch( eventAddNewOnSlot()) // TO OPEN THE MODAL ON SLOT
    }
    //const onDoubleClickEvent
    const onSelectEvent = (e) => {
        dispatch( eventSetActive(e) );
        //dispatch( uiOpenModal(e) )
    }
    const onViewChange = (e) => {  // Change the month, day, week... tabs
        setLastView(e);
        localStorage.setItem('lastView', e); // e= current view
    }

    const onSelectSlot = (e) => {
        console.log(e) // console shows the exact place where clicks on the calendar: MAKE OPEN THE MODAL ANYWHERE
        dispatch( eventClearActiveEvent() );
    }

    const eventStyleGetter = ( event, start, end, isSelected ) => {

        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {   // A way to apply styles
            style
        }
    }


    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={localizer}
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ doubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                onSelectSlot={ onSelectSlot } // To unselect the event once I the user clicks outside it in the calendar
                selectable={ true } // It has to be in true to use the onSelectorSlot
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewFab />

            {
                (activeEvent) && <DeleteEventFab />  // Condition: if activeEvent exists then We'll show the button Delete/ if is null don't
            }

            <CalendarModal />


        </div>
    )
}
