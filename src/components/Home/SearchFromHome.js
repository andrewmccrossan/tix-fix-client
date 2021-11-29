import React from "react";

const SearchFromHome = () => {
    return (
        <>
            <div className="row mt-3 mb-5">
                <div className="col-lg-1"/>
                <div className="col-9 col-lg-8">
                    <div className="row">
                        <div className="col-7 input-group input-group-lg">
                            <input className="form-control rounded-pill ps-5"
                                   type="text"
                                   placeholder="Search for an event, artist, team"/>
                        </div>
                    </div>
                </div>
                <div className="col-3 col-lg-3">
                    <button className="btn btn-primary btn-lg">Search</button>
                </div>
            </div>
        </>
    )
}
export default SearchFromHome;