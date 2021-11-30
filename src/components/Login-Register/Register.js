import React from "react";
import {Link} from "react-router-dom";

const Register = () => {
    return(
        <>
            <div className="w-75">
                <h4 className="mb-3">Register to create an account with Tix-Fix</h4>
                <div className="mb-3">
                    <label htmlFor="registerFirstName" className="form-label">First Name</label>
                    <input type="text" placeholder="John" className="form-control" id="registerFirstName"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="registerLastName" className="form-label">Last Name</label>
                    <input type="text" placeholder="Smith" className="form-control" id="registerLastName"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="registerUsername" className="form-label">Username</label>
                    <input type="text" placeholder="jsmith" className="form-control" id="registerUsername"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="registerPassword" className="form-label">Password</label>
                    <input type="password" placeholder="password" className="form-control" id="registerPassword"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="registerEmail" className="form-label">Email</label>
                    <input type="email" placeholder="jsmith@jsmith.com" className="form-control" id="registerEmail"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="registerZipCode" className="form-label">US Zip/Postal Code</label>
                    <input type="tel" pattern="[0-9]{5}" max="99999" placeholder="02101" className="form-control" id="registerZipCode"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="registerInterests" className="form-label">Name an artist, team, or performer you REALLY want to see at an event?</label>
                    <input type="text" placeholder="Ed Sheeren" className="form-control" id="registerInterests"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="registerRole" className="form-label">Role:</label><br/>
                    <input type="radio" value="BUYER" name="user-role" id="user-buyer" className="ms-1 form-check-input"/> <label htmlFor="user-buyer" className="form-check-label">I am a ticket buyer</label><br/>
                    <input type="radio" value="SELLER" name="user-role" id="user-seller" className="ms-1 form-check-input"/> <label htmlFor="user-seller" className="form-check-label">I am a ticket seller</label><br/>
                    <input type="radio" value="REVIEWER" name="user-role" id="user-reviewer" className="ms-1 form-check-input"/> <label htmlFor="user-reviewer" className="form-check-label">I am a reviewer</label><br/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Register new account</button>
                <div id="privacy" className="form-text">By creating an account, you agree to and understand our <Link className="text-info" to="/privacy" >privacy policy</Link>.</div>
            </div>
        </>
    );
}

export default Register;