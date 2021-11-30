import React from "react";
import EventCardItem from "../EventCardItem";

const LoggedInHomeContent = () => {
    return(
        <>
            <div className="row">
                <h3 className="mt-2">Events near you on Tix-Fix (IF LOGGED IN)</h3>
                <div className="row mt-2">
                    <div className="col-4">
                        <EventCardItem/>
                    </div>
                    <div className="col-4">
                        <EventCardItem/>
                    </div>
                    <div className="col-4">
                        <EventCardItem/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoggedInHomeContent;