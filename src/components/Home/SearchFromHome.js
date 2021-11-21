import React from "react";

const SearchFromHome = () => {
    return (
        <>
            <div className="row mt-5 d-flex justify-content-center">
                <div className="w-50 input-group input-group-lg">
                    <input className="form-control rounded-pill ps-5"
                           type="text"
                           placeholder="Search for your next event"/>
                </div>
            </div>
            <div className="row mt-2 d-flex justify-content-center">
                <button className="btn btn-primary w-25">Find your next event</button>
            </div>
        </>
    )
}
export default SearchFromHome;