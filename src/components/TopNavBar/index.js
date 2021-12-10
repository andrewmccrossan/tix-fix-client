import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {logout, profile} from "../../services/user-service";

const TopNavBar = ({page = "home"}) => {
    let [searchQuery, setSearchQuery] = useState("");
    const history = useHistory();
    const searchClickHandler = () => {
        history.push(`/search/results/${searchQuery}`);
    }

    const [currentProfile, setCurrentProfile] = useState({userProfile: {username: '', role:''}});
    const [loggedIn, setloggedIn] = useState(false);
    useEffect(() => {
        profile()
            .then(profile => {
                setCurrentProfile({userProfile: profile});
                setloggedIn(true);
            })
            .catch(() => {setloggedIn(false);});
    }, []);

    const attemptLogout = () => {
        logout()
            .then(() => history.push('/home'))
    }

    if (page === "home" || page === "search") {
        return(
            <>
                <nav className="navbar navbar-expand navbar-dark bg-primary">
                    <div className="container">
                        <Link className="navbar-brand mb-0 h1" to="/home">Tix-Fix <i className="fas fa-ticket-alt"></i></Link>

                        <ul className="navbar-nav ms-auto">
                            {
                                loggedIn &&
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Profile</Link>
                                </li>
                            }
                            {
                                !loggedIn &&
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            }
                            {
                                loggedIn &&
                                <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => attemptLogout()}>Log Out</button>
                            }
                        </ul>
                    </div>
                </nav>
            </>
        );
    } else {
        // If we reach here we are already on the profile page so we will not show it here
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

                            {/*{*/}
                            {/*    loggedIn &&*/}
                            {/*    <li className="nav-item">*/}
                            {/*        <Link className="nav-link" to="/profile">Profile</Link>*/}
                            {/*    </li>*/}
                            {/*}*/}
                            {
                                !loggedIn &&
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            }
                            {
                                loggedIn &&
                                <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => attemptLogout()}>Log Out</button>
                            }
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}
export default TopNavBar;