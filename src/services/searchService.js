const SEARCH_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/search/results';
    } else {
        return 'https://tix-fix-server.herokuapp.com/search/results';
    }
}

export const getSearchResults = (dispatch, searchQuery) => {
    console.log(searchQuery);
    fetch(`${SEARCH_API()}/${searchQuery}`)
        .then(response => response.json())
        .then(searchResult => {
            dispatch({
                type: 'fetch-search-results',
                searchResult
            })
        });
}
