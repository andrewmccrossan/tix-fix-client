import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <ul className="tx-home-footer-links blue">
                <li className="text-info me-2"><Link to="/home" >Home</Link></li>
                <li className="text-info me-2"><Link to="/profile">Profile</Link></li>
                <li className="text-info me-2"><Link to="/search">Search</Link></li>
                <li className="text-info me-2"><Link to="/privacy">Privacy</Link></li>
            </ul>
        </>
    )
}
export default Footer;
