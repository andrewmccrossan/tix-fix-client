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
        </>
    )
}
export default Home;