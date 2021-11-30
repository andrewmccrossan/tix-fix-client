
const SEARCH_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/search';
    } else {
        return 'https://tix-fix-server.herokuapp.com/search';
    }
}

export const getSearchResults = (searchQuery) =>
    fetch(`${SEARCH_API()}/${searchQuery}`)
        .then(response => response.json())
        .then(searchResult => {
            console.log(searchResult);
        });
