import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import profile from "./reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import Home from "./components/Home";
import Search from "./components/Search";
import Details from "./components/Details";
import LoginRegister from "./components/Login-Register";
import Profile from "./components/Profile";
import Privacy from "./components/Privacy";
import events_concerts from "./reducers/events-concerts";
import events_sports from "./reducers/events-sports";
import search_results from "./reducers/search-results";

const reducer = combineReducers({profile, events_concerts, events_sports, search_results});
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path={["/", "/home"]} exact={true}>
                    <Home/>
                </Route>
                <Route path="/search">
                    <Search/>
                </Route>
                <Route path="/search/results/:searchQuery">
                    <Search/>
                </Route>
                <Route path="/details">
                    <Details/>
                </Route>
                <Route path="/login">
                    <LoginRegister/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/privacy">
                    <Privacy/>
                </Route>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
