import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";

const TopNavBar = ({page = "home"}) => {
    let [searchQuery, setSearchQuery] = useState("");
    const history = useHistory();
    const searchClickHandler = () => {
        history.push(`/search/results/${searchQuery}`);
    }

    if (page === "home" || page === "search") {
        return(
            <>
                <nav className="navbar navbar-expand navbar-dark bg-primary">
                    <div className="container">
                        <Link className="navbar-brand mb-0 h1" to="/home">Tix-Fix <i className="fas fa-ticket-alt"></i></Link>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    } else {
        return(
            <>
                <nav className="navbar navbar-expand navbar-dark bg-primary">
                    <div className="container">
                        <Link className="navbar-brand mb-0 h1" to="/home">Tix-Fix <i className="fas fa-ticket-alt"></i></Link>

                        <div className="ms-auto d-flex w-50">
                            <input className="form-control rounded-pill ps-5 me-sm-2"
                                   type="text"
                                   placeholder="Search for an event, artist, team"
                                   onChange={(event) => setSearchQuery(event.target.value)}/>
                            <button className="btn btn-secondary" onClick={searchClickHandler}>Search</button>
                        </div>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}
export default TopNavBar;