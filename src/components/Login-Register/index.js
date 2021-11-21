import React from "react";
import Login from "./Login";
import Register from "./Register"

const LoginRegister = () => {
    return (
        <>
            <div className="d-block d-sm-none fa-2x">XS</div>
            <div className="d-none d-sm-block d-md-none fa-2x">S</div>
            <div className="d-none d-md-block d-lg-none fa-2x">M</div>
            <div className="d-none d-lg-block d-xl-none fa-2x">L</div>
            <div className="d-none d-xl-block d-xxl-none fa-2x">XL</div>
            <div className="d-none d-xxl-block fa-2x">XXL</div>

            <div className="row mt-2">
                <div className="col-6">
                    <Login/>
                </div>
                <div className="col-6">
                    <Register/>
                </div>
            </div>
        </>
    )
}
export default LoginRegister;