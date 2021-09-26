const baseUrl = process.env.REACT_APP_API_URL;


const fetchSinToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;    // add to localhost the respective endpoint

    if ( method === 'GET' ) {
        return fetch( url );
    } else {                                     // if is not get...
        return fetch( url, {
            method,                              // put, delete, update... any method
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )         // return the body like a json string
        });
    }
}

const fetchConToken = ( endpoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`;    // add to localhost the respective endpoint
    const token = localStorage.getItem('token') || '';  // Here would return null, so let an empty string if is null

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {                                     // if is not get...
        return fetch( url, {
            method,                              // put, delete, update... any method
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )         // return the body like a json string
        });
    }
}

export {
    fetchSinToken,
    fetchConToken
}