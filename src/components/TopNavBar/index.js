import React from "react";
import {Link} from "react-router-dom";

const TopNavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand mb-0 h1" to="/home">Tix-Fix <i className="fas fa-ticket-alt"></i></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarColor01" aria-controls="navbarColor01"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login/Register</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <input className="form-control me-sm-2" type="text"
                                   placeholder="Search"/>
                                <button className="btn btn-secondary my-2 my-sm-0"
                                        type="submit">Search
                                </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
)
}
export default TopNavBar;