import React, {useState} from "react";
import {getSearchResults} from "../../services/searchService";
import {Link} from "react-router-dom";

const SearchFromHome = () => {
    let [searchQuery, setSearchQuery] = useState("");
    const searchClickHandler = () => {
        getSearchResults(searchQuery);
    }
    return (
        <>
            <div className="row mt-3 mb-5">
                <div className="col-lg-1"/>
                <div className="col-9 col-lg-8">
                    <div className="row">
                        <div className="col-7 input-group input-group-lg">
                            <input className="form-control rounded-pill ps-5 me-sm-2"
                                   type="text"
                                   placeholder="Search for an event, artist, team"
                                   onChange={(event) => setSearchQuery(event.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className="col-3 col-lg-3">
                    <Link to="/search" className="wd-text-no-underline">
                        <button className="btn btn-primary btn-lg" onClick={searchClickHandler}>Search</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default SearchFromHome;