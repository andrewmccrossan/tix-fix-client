import profileData from './data/profile.json';

const profile = (state = profileData, action) => {
    switch (action.type) {
        case 'fetch-profile':
            return action.profileData;
        case 'edit-profile':
            return action.profileData;
        default:
            return(state);
    }
};

export default profile;