import React from "react";
import TopNavBar from "../TopNavBar";

const Privacy = () => {
    return (
        <>
            <TopNavBar page={"privacy"}/>
            <div className="container mt-5 pt-5">
                <h1>Privacy Policy</h1>
                <p>
                    Tix-Fix seeks to be fully transparent about the data that we collect and how it is used. We want to provide a useful service for all stakeholders. This means we have found a balance between respecting full privacy for our users and providing value to the performers, venues, and website. Our website uses cookies to maintain data about basic user information, including a user’s first name, last name, username, password, email address, zip code, singular artist they are interested in, and user role (buyer, seller, or reviewer). A user’s first name, last name, password, email address, and zip code are all kept private to the user, while the username, singular artist they are interested in, and user role are publicly available to all logged in users and anonymous users.
                </p>
                <p>
                    For sellers, an average rating (based on all review scores) is publicly available to all users, as well as the tickets that the seller is currently selling and the reviews for this seller. This information is provided so that all users have the security and trust that this seller is a fair provider of event tickets. A seller’s watch list for events is kept private since this does not provide value to other users, and therefore, should be kept private by default. For buyers, their wish list for event tickets is publicly available so that sellers and other users can get an idea of what events are popular and what events sellers could benefit from providing tickets for. For reviewers, their reviews of venues and sellers are publicly available so that other users can see all reviews from a reviewer that they trust. A reviewer’s to-do list of reviews is not visible so that they are not coerced by sellers and venues to write an undeservingly positive review (or an undeservingly negative review on a competitors event).
                </p>
                <p>
                    Sellers can remove tickets from their list of tickets they are selling and they can remove events from their watch list. Buyers can remove events from their wish list. Reviewers can remove events from their to-do list. This provides users with the freedom and security to remove what they make publicly available on our site. Furthermore, users should be aware that they can edit their profile to change or remove revealing information from their profile. This information is modified in our database and no record of old user information is kept. Users creating an account with this website should be aware of all of the privacy tradeoffs that come with contributing to this website.
                </p>
            </div>
        </>
    )
}

export default Privacy;