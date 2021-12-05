const search_results = (state = [], action) => {
    switch (action.type) {
        case 'fetch-search-results':
            return(
                    action.searchResult
            );
            break;
        default:
            return(state);
    }
};

export default search_results;