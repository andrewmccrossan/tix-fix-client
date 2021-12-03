import React from "react";
import {useHistory} from "react-router-dom";
import {convertMilitaryTime, formatDate} from "../../Utils/utils";

const SearchResultsItem = ({result}) => {

    const history = useHistory();
    const detailsClickHandler = (resultID) => {
        history.push(`/details/${resultID}`);
    }

    return (
        <>
            <div className="row mt-3">
                <div className="col-lg-1"/>
                <div className="col-12 col-lg-10">
                    <div className="row border">
                        <div className="col-2 ">
                            <div className="d-flex justify-content-center fw-bold">{formatDate(result.datetime_local)}</div>
                            <div className="d-flex justify-content-center">{convertMilitaryTime(result.datetime_local)}</div>
                        </div>
                        <div className="col-8">
                            <div className="d-flex justify-content-center fw-bold">{result.title}</div>
                            <div className="d-flex justify-content-center">{result.venue.name} - {result.venue.display_location}</div>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <button type="button"
                                    className="btn btn-primary mt-1 mb-1"
                                    onClick={()=> detailsClickHandler(result.id)}>
                                Get Details
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"/>
            </div>
        </>
    )
}

export default SearchResultsItem;