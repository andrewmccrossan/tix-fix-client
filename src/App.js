import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import Home from "./components/Home";
import Search from "./components/Search";
import Details from "./components/Details";
import LoginRegister from "./components/Login-Register";
import Profile from "./components/Profile";
import EditProfile from "./components/Profile/EditProfile";
import Privacy from "./components/Privacy";
import search_results from "./reducers/search-results";
import SearchResult from "./components/Search/SearchResult";
import events_zipcode from "./reducers/events-zipcode";
import ProfileOthers from "./components/Profile/ProfileOthers";

const reducer = combineReducers({search_results, events_zipcode});
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path={["/", "/home"]} exact={true}>
                    <Home/>
                </Route>
                <Route path="/search" exact={true}>
                    <Search/>
                </Route>
                <Route path="/search/results/:searchCriteria">
                    <SearchResult/>
                </Route>
                <Route path="/details/:uniqueIdentifier">
                    <Details/>
                </Route>
                <Route path="/login">
                    <LoginRegister/>
                </Route>
                <Route path="/profile" exact={true}>
                    <Profile/>
                </Route>
                <Route path="/profile/:username">
                    <ProfileOthers/>
                </Route>
                <Route path="/privacy">
                    <Privacy/>
                </Route>
                <Route path="/edit-profile">
                    <EditProfile/>
                </Route>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
