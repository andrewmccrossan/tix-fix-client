require('dotenv').config();
const SERVER_API = process.env.REACT_APP_ENVIRONMENT ? 'https://tix-fix-server.herokuapp.com/api' : 'http://localhost:4000/api'; // TODO - set to server url

export const login = (user) =>
    fetch(`${SERVER_API}/login`, {
              method: 'POST',
              body: JSON.stringify(user),
              headers: {
                  'content-type': 'application/json',
              },
              credentials: 'include'
          }
    ) .then (response=> {
        console.log(response)
        if(response.ok)
            return response.json()
        else{
            throw new Error()
        }
    });

export const register = (user) =>
    fetch(`${SERVER_API}/register`, {
              method: 'POST',
              body: JSON.stringify(user),
              headers: {
                  'content-type': 'application/json',
              },
              credentials: 'include'
          }
    ) .then (response=> {
        console.log(response)
        if(response.ok)
            return response.json()
        else{
            throw new Error()
        }
    });

export const profile = () =>
    fetch(`${SERVER_API}/profile`, {
        method: 'POST',
        credentials: 'include'
    }).then(response => response.json());

export const logout = () =>
    fetch(`${SERVER_API}/logout`, {
        method: 'POST',
        credentials: 'include'
    });
