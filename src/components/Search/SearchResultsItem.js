import React from "react";

// referenced https://stackoverflow.com/questions/29206453/best-way-to-convert-military-time-to-standard-time-in-javascript
const convertMilitaryTime = (inputDateTime) => {
    const eventTime = inputDateTime.split('T')[1];
    const time = eventTime.split(':');

    const hours = Number(time[0]);
    const minutes = Number(time[1]);

    let timeValue;
    if (hours > 0 && hours <= 12) {
        timeValue= "" + hours;
    } else if (hours > 12) {
        timeValue= "" + (hours - 12);
    } else if (hours === 0) {
        timeValue= "12";
    }

    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;
    timeValue += (hours >= 12) ? " PM" : " AM";
    return timeValue;
}

// referenced https://stackoverflow.com/questions/47575119/how-to-get-month-name-from-an-html-date-input-value
const formatDate = (inputDateTime) => {
    const dateTime = inputDateTime;
    const eventDate = dateTime.split('T')[0];
    const dateSplit = eventDate.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return months[dateSplit[1]-1] + " " + dateSplit[2] + ", " + dateSplit[0];
}

const SearchResultsItem = ({result}) => {
    console.log(result);
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
                            <button type="button" className="btn btn-primary mt-1 mb-1">Get Details</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"/>
            </div>
        </>
    )
}

export default SearchResultsItem;