import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";




export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );   // Calls the endpoint in postman- auth
        const body = await resp.json();

        if ( body.ok ) {
            localStorage.setItem( 'token', body.token )
            localStorage.setItem( 'token-init-date', new Date().getTime());

            dispatch( login({
                uid: body.uid,
                name: body.name
            }))
        } else {
            Swal.fire( 'Error', body.msg, 'error' )
        }

    }

}

export const startRegister =  ( email, password, name ) => {
    return async( dispatch ) => {
        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );   // Calls the endpoint in postman- auth
        const body = await resp.json();

        if ( body.ok ) {
            localStorage.setItem( 'token', body.token ); // a problem with the uid
            localStorage.setItem( 'token-init-date', new Date().getTime());

            dispatch( login({
                uid: body.uid,
                name: body.name
            }))
        } else {
            Swal.fire( 'Error', body.msg, 'error' )
        }
    }
}

export const startChecking = () => {
    return async( dispatch ) => {

        const resp = await fetchConToken( 'auth/renew' );   // Calls the endpoint in postman- auth
        const body = await resp.json();

        if ( body.ok ) {
            localStorage.setItem( 'token', body.token ); // a problem with the uid
            localStorage.setItem( 'token-init-date', new Date().getTime());

            dispatch( login({
                uid: body.uid,
                name: body.name
            }))
        } else {
            dispatch( checkingFinished() );
        }
    }
}

const checkingFinished = () => ({
    type: types.authCheckingFinish
});


// need this syncron function (dont need thunk) to dispatch to the store to record the info of the user,
// dont need to export because its going to be used only here
const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();  //  This clear all the token and else
        dispatch( logout() );

    }
}

const logout = () => ({
    type: types.authLogout
})
