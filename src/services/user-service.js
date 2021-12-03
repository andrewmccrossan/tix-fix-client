require('dotenv').config();
const SERVER_API = process.env.REACT_APP_ENVIRONMENT ? 'https://tix-fix-server.herokuapp.com/api' : 'http://localhost:4000/api'; // TODO - set to server url

export const register = (user) =>
    fetch(`${SERVER_API}/register`, {
              method: 'POST',
              body: JSON.stringify(user),
              headers: {
                  'content-type': 'application/json',
                  'credentials': 'include',
              }
          }
    )
        .then(response => response.json())

        // .then(profileData =>
        //           dispatch({
        //                        type: 'fetch-profile',
        //                        profileData
        //                    })
        // );

// export const updateCurrentProfile = (dispatch, profileData) =>
//     fetch(PROFILE_API, {
//         method: 'PUT',
//         body: JSON.stringify(profileData),
//         headers: {
//             'content-type': 'application/json'
//         }
//     })
//         .then(response => response.json())
//         .then(profileData =>
//                   dispatch({
//                                type: 'edit-profile',
//                                profileData
//                            }));