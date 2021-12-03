import React from "react";

const DetailsEventReviews = () => {
    return (
        <>
            <div className="row mt-4">
                <div className="col">
                    <div className="card">
                        <h3 className="card-header h4">Reviews</h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-2">
                                        Reviewer Name
                                    </div>
                                    <div className="col-2">
                                        4 <i className="fas fa-star"></i>
                                    </div>
                                    <div className="col-8">
                                        This band is really great to see live. Best show I've been to.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DetailsEventReviews;