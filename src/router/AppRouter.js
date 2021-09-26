import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from 'react-loading-screen';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

    const dispatch = useDispatch(); // to dispatch startCheking as an effect
    const { checking, uid } = useSelector(state => state.auth); // to show the logged user the calendar

    useEffect(() => {

      dispatch( startChecking() );

    }, [dispatch])

    if ( checking ) {
      return (
        <LoadingScreen
          loading={true}
          bgColor='#ffffff'
          spinnerColor='#0599ee'
          textColor='#36363'
          //logoSrc='/logo.png'
          text='Cargando...'
        >

          {/*<div></div>*/}
        </LoadingScreen>
      )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                      exact
                      path="/login"
                      component={ LoginScreen }
                      isAuthenticated={ !!uid }
                      />

                    <PrivateRoute
                      exact
                      path="/"
                      component={ CalendarScreen }
                      isAuthenticated={ !!uid }
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
