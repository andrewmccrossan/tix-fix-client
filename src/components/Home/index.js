import React from "react";
import Description from "./Description";
import SearchFromHome from "./SearchFromHome";

const Home = () => {
    return (
        <>
            <div className="container">
                <Description/>
                <SearchFromHome/>
            </div>
        </>
    )
}
export default Home;