import React from "react";
import CardItem from "./CardItem";

const GenericHomeContent = () => {
    return(
        <>
            <div className="row">
                <h3 className="mt-2">Popular Events on Tix-Fix</h3>
                <div className="row mt-2">
                    <div className="col-4">
                        <CardItem/>
                    </div>
                    <div className="col-4">
                        <CardItem/>
                    </div>
                    <div className="col-4">
                        <CardItem/>
                    </div>
                </div>
            </div>
            <div className="row">
                <h3 className="mt-2">Happening this week</h3>
                <div className="row mt-2">
                    <div className="col-4">
                        <CardItem/>
                    </div>
                    <div className="col-4">
                        <CardItem/>
                    </div>
                    <div className="col-4">
                        <CardItem/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GenericHomeContent;