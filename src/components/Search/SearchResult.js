import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import SearchResultsItem from "./SearchResultsItem";
import TopNavBar from "../TopNavBar";
import {getSearchResults} from "../../services/searchService";
import {useParams} from "react-router-dom";

const SearchResult = () => {
    const {searchCriteria} = useParams();
    const searchResults = useSelector((state) => state.search_results);
    const dispatch = useDispatch();
    useEffect(() => getSearchResults(dispatch, searchCriteria), [searchCriteria]);
    return(
        <>
            <TopNavBar page={"results"}/>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <h3 className="mt-2">Search results for "{searchCriteria}"</h3>
                    {searchResults.length > 0 ?
                        searchResults.map(result => {
                            return (<SearchResultsItem result={result} key={result.id}/>);
                        })
                     : <div className="mt-5">Sorry, there are no events related to "{searchCriteria}". Please try another key phrase like "football".</div>
                    }
                </div>
            </div>
        </>
    );
}

export default SearchResult;