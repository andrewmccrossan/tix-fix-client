import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <>
            <div className="w-75">
                <h4 className="mb-3">Log in to Tix-Fix</h4>
                <div className="mb-3">
                    <label htmlFor="loginUsername" className="form-label">Username</label>
                    <input type="text" placeholder="jsmith" className="form-control" id="loginUsername"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">Password</label>
                    <input type="password" placeholder="password" className="form-control" id="loginPassword"/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Log In</button>
                <div id="privacy" className="form-text">By signing in, you agree to and understand our <Link className="text-info" to="/privacy" >privacy policy</Link>.</div>
            </div>
        </>
    );
}

export default Login;