import React from "react";
import Login from "./Login";
import Register from "./Register"
import TopNavBar from "../TopNavBar";
import Footer from "../Home/Footer";

const LoginRegister = () => {
    return (
        <>
            <TopNavBar page={"login"}/>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <Login/>
                    </div>
                    <div className="col-md-6 mt-4">
                        <Register/>
                    </div>
                </div>
                <hr/>
                <Footer/>
            </div>
        </>
    )
}
export default LoginRegister;