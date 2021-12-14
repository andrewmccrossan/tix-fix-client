import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const MainSearchBar = () => {
    let [searchQuery, setSearchQuery] = useState("");
    const history = useHistory();
    const searchClickHandler = () => {
        history.push(`/search/results/${searchQuery}`);
    }

    return (
        <>
            <div className="row mt-3 mb-5">
                <div className="col-lg-2"/>
                <div className="col-9 col-lg-7">
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
                    <button className="btn btn-primary btn-lg" onClick={searchClickHandler}>Search</button>
                </div>
            </div>
        </>
    )
}
export default MainSearchBar;