import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {register} from "../../services/user-service";

const Register = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        username: null,
        password:null,
        firstName: null,
        lastName: null,
        email: null,
        zip: null,
        artistInterest: null,
        role: null});

    const registerInfo = (userInfo) => {
        const inputNotGiven = (userInfo.username === null || userInfo.password === null || userInfo.role === null
            || userInfo.firstName === null || userInfo.lastName === null || userInfo.email === null
            || userInfo.zip === null || userInfo.artistInterest === null);
        if (inputNotGiven) {
            alert("Please fill in all fields in order to create an account");
        } else {
            register(userInfo)
                .then(() => history.push('/profile'))
                .catch(error => {
                    alert("Username already taken. Try another one!");
                })
        }
    };

    const setRadioRole = (event) => setUser({...user, role: event.currentTarget.value})

    return(
        <>
            <div className="w-75">
                <h4 className="mb-3">Register to create an account with Tix-Fix</h4>
                <div className="mb-3">
                    <label htmlFor="registerFirstName" className="form-label">First Name</label>
                    <input type="text"
                           placeholder="John"
                           className="form-control"
                           id="registerFirstName"
                           onChange={event => setUser({...user, firstName: event.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="registerLastName" className="form-label">Last Name</label>
                    <input type="text"
                           placeholder="Smith"
                           className="form-control"
                           id="registerLastName"
                           onChange={event => setUser({...user, lastName: event.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="registerUsername" className="form-label">Username</label>
                    <input type="text"
                           placeholder="jsmith"
                           className="form-control"
                           id="registerUsername"
                           onChange={event => setUser({...user, username: event.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="registerPassword" className="form-label">Password</label>
                    <input type="password"
                           placeholder="password"
                           className="form-control"
                           id="registerPassword"
                           onChange={event => setUser({...user, password: event.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="registerEmail" className="form-label">Email</label>
                    <input type="email"
                           placeholder="jsmith@jsmith.com"
                           className="form-control"
                           id="registerEmail"
                           onChange={event => setUser({...user, email: event.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="registerZipCode" className="form-label">US Zip/Postal Code</label>
                    <input type="number"
                           pattern="[0-9]{5}"
                           max="99999"
                           placeholder="02101"
                           className="form-control"
                           id="registerZipCode"
                           onChange={event => setUser({...user, zip: event.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="registerInterests" className="form-label">Name an artist, team, or performer you REALLY want to see at an event?</label>
                    <input type="text"
                           placeholder="Ed Sheeren"
                           className="form-control"
                           id="registerInterests"
                           onChange={event => setUser({...user, artistInterest: event.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="registerRole" className="form-label">Role:</label><br/>
                    <input type="radio"
                           value="BUYER"
                           name="user-role"
                           id="user-buyer"
                           className="ms-1 form-check-input"
                           onChange={setRadioRole}
                    />
                    <label htmlFor="user-buyer" className="form-check-label ms-2">I am a ticket buyer</label><br/>
                    <input type="radio"
                           value="SELLER"
                           name="user-role"
                           id="user-seller"
                           className="ms-1 form-check-input"
                           onChange={setRadioRole}
                    />
                    <label htmlFor="user-seller" className="form-check-label ms-2">I am a ticket seller</label><br/>
                    <input type="radio"
                           value="REVIEWER"
                           name="user-role"
                           id="user-reviewer"
                           className="ms-1 form-check-input"
                           onChange={setRadioRole}
                    />
                    <label htmlFor="user-reviewer" className="form-check-label ms-2">I am a reviewer</label><br/>
                </div>
                <div id="privacy" className="text mb-2">By creating an account, you agree to our <Link className="text-info" to="/privacy" >privacy policy</Link>. Please take a few minutes to check it out!</div>
                <button type="submit"
                        className="btn btn-primary mt-2 mb-2"
                        onClick={() => registerInfo(user)}
                >Register new account</button>

            </div>
        </>
    );
}

export default Register;