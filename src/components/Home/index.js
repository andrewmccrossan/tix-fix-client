import React, {useEffect, useState} from "react";
import Description from "./Description";
import MainSearchBar from "./MainSearchBar";
import Footer from "./Footer";
import GeneralHomeContent from "./GeneralHomeContent/index.js";
import './home.css';
import TopNavBar from "../TopNavBar";
import {profile} from "../../services/user-service";
import BuyerHomeContent from "./BuyerHomeContent";
import SellerHomeContent from "./SellerHomeContent";
import ReviewerHomeContent from "./ReviewerHomeContent";

const Home = () => {

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

    useEffect(() => {
        profile()
            .then(profile => {setCurrentProfile({userProfile: profile});})
    }, []);

    const getUserSpecificHomeContent = () =>{
        if (currentProfile.userProfile.role === 'BUYER'){
            return <BuyerHomeContent/>
        }else if (currentProfile.userProfile.role === 'SELLER'){
            return <SellerHomeContent/>
        }else if (currentProfile.userProfile.role === 'REVIEWER'){
            return <ReviewerHomeContent currentUser={currentProfile.userProfile}/>
        }else{
            return <></>
        }
    }

    return (

        <>

            <TopNavBar page={"home"}/>
            <div className="container mt-5">
                <Description/>
                <MainSearchBar/>
                {getUserSpecificHomeContent()}
                <GeneralHomeContent/>
                <hr/>
                <Footer/>
            </div>
            {/*<div className="d-block d-sm-none fa-2x">XS</div>
            <div className="d-none d-sm-block d-md-none fa-2x">S</div>
            <div className="d-none d-md-block d-lg-none fa-2x">M</div>
            <div className="d-none d-lg-block d-xl-none fa-2x">L</div>
            <div className="d-none d-xl-block d-xxl-none fa-2x">XL</div>
            <div className="d-none d-xxl-block fa-2x">XXL</div>*/}
        </>
    )
}
export default Home;