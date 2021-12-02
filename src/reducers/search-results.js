import searchResultsData from './data/search-results.json';

const search_results = (state = searchResultsData, action) => {
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