import React from "react";

// referenced https://stackoverflow.com/questions/29206453/best-way-to-convert-military-time-to-standard-time-in-javascript
const convertMilitaryTime = (inputDateTime) => {
    const dateTime = inputDateTime;
    const eventTime = dateTime.split('T')[1];
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
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[dateSplit[1]-1] + " " + dateSplit[2] + ", " + dateSplit[0];
}

const EventCardItem = ({event}) => {
    return (
        <>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                </div>
                <div>
                    <img src={event.performers[0].image}
                         alt="link image"
                         className="img-thumbnail mx-auto d-block"/>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{formatDate(event.datetime_local)} </li>
                    <li className="list-group-item">{convertMilitaryTime(event.datetime_local)} </li>
                    <li className="list-group-item">{event.venue.name}</li>
                    <li className="list-group-item">{event.venue.display_location}</li>
                </ul>
            </div>
        </>
    )
}
export default EventCardItem;