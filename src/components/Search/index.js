import React from "react";
import SearchResultsItem from "./SearchResultsItem";

const Search = () => {
    return (
        <>
            <div className="container">
                <h2 className="mt-4 mb-4">Results for: </h2>
                <SearchResultsItem/>
            </div>
        </>
    )
}

export default Search;