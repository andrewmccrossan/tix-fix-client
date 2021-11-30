import React from "react";
import Description from "./Description";
import MainSearchBar from "./MainSearchBar";
import Footer from "./Footer";
import GeneralHomeContent from "./GeneralHomeContent/index.js";
import LoggedInHomeContent from "./LoggedInHomeContent";
import './home.css';
import TopNavBar from "../TopNavBar";

const Home = () => {
    return (
        <>
            <TopNavBar page={"home"}/>
            <div className="container">
                <Description/>
                <MainSearchBar/>
                {/*<LoggedInHomeContent/>*/}
                <GeneralHomeContent/>
                <hr/>
                <Footer/>
            </div>
        </>
    )
}
export default Home;