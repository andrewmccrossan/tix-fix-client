import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {login} from "../../services/user-service";

const Login = () => {
    const history = useHistory();
    const [user, setUser] = useState({username: '', password: ''});

    const attemptLogin = (userInfo) => {
        login(userInfo)
            .then(() => history.push('/profile'))
            .catch(error => {
                alert("That username or password is incorrect. Please try again.");
            })
    };

    return(
        <>
            <div className="w-75">
                <h4 className="mb-3">Log in to Tix-Fix</h4>
                <div className="mb-3">
                    <label htmlFor="loginUsername" className="form-label">Username</label>
                    <input type="text"
                           placeholder="jsmith"
                           className="form-control"
                           id="loginUsername"
                           onChange={event => setUser({...user, username: event.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">Password</label>
                    <input type="password"
                           placeholder="password"
                           className="form-control"
                           id="loginPassword"
                           onChange={event => setUser({...user, password: event.target.value})}
                    />
                </div>
                <button type="submit"
                        className="btn btn-primary mb-2"
                        onClick={() => attemptLogin(user)}
                >Log In</button>
                <div id="privacy" className="form-text">By signing in, you agree to and understand our <Link className="text-info" to="/privacy" >privacy policy</Link>.</div>
            </div>
        </>
    );
}

export default Login;