import React, {useEffect, useState} from "react";
import TopNavBar from "../../TopNavBar";
import {editProfile, profile} from "../../../services/user-service";
import {useHistory} from "react-router-dom";
import Footer from "../../Home/Footer";

const EditProfile = () => {

    const history = useHistory();

    const [currentProfile, setCurrentProfile] = useState({
        userProfile: {
            username: '',
            email: '',
            lastName: '',
            firstName: '',
            role: '',
            zip: '',
        }
    });

    const [user, setUser] = useState({
            _id: '',
            email: '',
            lastName: '',
            firstName: '',
            zip: '',
    });

    useEffect(() => {
        profile()
            .then(profile => {
                    setCurrentProfile({userProfile: profile});
                    setUser({
                        _id: profile._id,
                        firstName: profile.firstName,
                        lastName: profile.lastName,
                        email: profile.email,
                        zip: profile.zip
                    });
                }
            )
    }, []);



    const updateProfileValues = (event, userInfo) => {
        // Referenced: https://stackoverflow.com/questions/64196021/why-i-am-getting-a-mark-at-the-end-of-the-link-after-using-usehistory-push
        //event.preventDefault()
        editProfile(userInfo)
            .then((response) => {
                    if(response.ok) {
                        history.push('/profile')
                    } else {
                        alert("That username or password is incorrect. Please try again.");
                    }
                })
    };

    return (
        <>
            <TopNavBar page={"home"}/>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-8 ms-auto me-auto mt-5 justify-content-center">
                        <div>
                            <label htmlFor="exampleInputEmail1" className="mt-3">First Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                   defaultValue={currentProfile.userProfile.firstName}
                                   onChange={event => setUser({...user, firstName: event.target.value})}
                            />
                        </div>
                        <div>
                            <label htmlFor="exampleInputEmail1" className="mt-3">Last Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                   defaultValue={currentProfile.userProfile.lastName}
                                   onChange={event => setUser({...user, lastName: event.target.value})}
                            />
                        </div>

                        <div>
                            <label htmlFor="exampleInputEmail1" className="mt-3">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                   defaultValue={currentProfile.userProfile.email}
                                   onChange={event => setUser({...user, email: event.target.value})}
                            />
                        </div>

                        <div>
                            <label htmlFor="exampleInputEmail1" className="mt-3">Zip Code</label>
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                   defaultValue={currentProfile.userProfile.zip}
                                   onChange={event => setUser({...user, zip: event.target.value})}/>
                        </div>

                        <button type="submit"
                                className="btn btn-primary mt-3"
                                onClick={ (event) => {updateProfileValues(event, user)} }>
                            Submit
                        </button>
                    </div>
                </div>
                <hr/>
                <Footer/>
            </div>
        </>
    )
}
export default EditProfile;