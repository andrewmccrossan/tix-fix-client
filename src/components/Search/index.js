import React from "react";
import TopNavBar from "../TopNavBar";
import MainSearchBar from "../Home/MainSearchBar";

const Search = () => {
    return (
        <>
            <TopNavBar page={"search"}/>
            <div className="container">
                <div className="row">
                    <div className="mt-5 mb-5">
                        <h2 className="d-flex justify-content-center mt-5">Don't wish you went, make it happen!</h2>
                    </div>
                </div>
                <MainSearchBar/>
            </div>
        </>
    )
}

export default Search;