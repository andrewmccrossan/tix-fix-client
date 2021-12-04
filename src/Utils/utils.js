
// referenced https://stackoverflow.com/questions/29206453/best-way-to-convert-military-time-to-standard-time-in-javascript
export const convertMilitaryTime = (inputDateTime) => {
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
};

// referenced https://stackoverflow.com/questions/47575119/how-to-get-month-name-from-an-html-date-input-value
export const formatDate = (inputDateTime) => {
    const dateTime = inputDateTime;
    const eventDate = dateTime.split('T')[0];
    const dateSplit = eventDate.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return months[dateSplit[1]-1] + " " + dateSplit[2] + ", " + dateSplit[0];
};

// referenced https://www.joshwcomeau.com/snippets/javascript/random/
export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;