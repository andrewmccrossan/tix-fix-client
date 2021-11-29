import React from "react";
import SearchResultsItem from "./SearchResultsItem";
import TopNavBar from "../TopNavBar";

const Search = () => {
    return (
        <>
            <TopNavBar page={"search"}/>
            <div className="container">
                <h2 className="mt-5 mb-5">Results for: </h2>
                <SearchResultsItem/>
            </div>
        </>
    )
}

export default Search;