import React from "react";

const SearchResultsItem = () => {
    return (
        <>
            <div className="row mt-3">
                <div className="col-lg-2"/>
                <div className="col-12 col-lg-8">
                    <div className="row border">
                        <div className="col-2 ">
                            <div className="d-flex justify-content-center fw-bold">Date</div>
                            <div className="d-flex justify-content-center">TIme</div>
                        </div>
                        <div className="col-7">
                            <div className="d-flex justify-content-center fw-bold">Event Name</div>
                            <div className="d-flex justify-content-center">Venue - Location</div>
                        </div>
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <button type="button" className="btn btn-primary mt-1 mb-1">Get Details</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2"/>
            </div>
        </>
    )
}

export default SearchResultsItem;