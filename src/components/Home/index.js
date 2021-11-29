import React from "react";
import Description from "./Description";
import SearchFromHome from "./SearchFromHome";
import Footer from "./Footer";
import GenericHomeContent from "./GenericHomeContent/index.js";
import LoggedInHomeContent from "./LoggedInHomeContent";
import './home.css';
import TopNavBar from "../TopNavBar";

const Home = () => {
    return (
        <>
            <TopNavBar page={"home"}/>
            <div className="container">
                <Description/>
                <SearchFromHome/>
                <hr/>
                <LoggedInHomeContent/>
                <hr/>
                <GenericHomeContent/>
                <hr/>
                <Footer/>
            </div>
        </>
    )
}
export default Home;