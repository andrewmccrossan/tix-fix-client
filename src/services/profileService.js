require('dotenv').config();
const PROFILE_API = process.env.REACT_APP_ENVIRONMENT ? 'https://tix-fix-server.herokuapp.com/api/profile' : 'http://localhost:4000/api/profile'; // TODO - set to server url

export const getCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profileData =>
                  dispatch({
                               type: 'fetch-profile',
                               profileData
                           })
        );

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