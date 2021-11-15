import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import profile from "./reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import Home from "./components/Home";
import Search from "./components/Search";
import Details from "./components/Details";
import Login from "./components/Login";
import Profile from "./components/Profile";
import TopNavBar from "./components/TopNavBar";

const reducer = combineReducers({profile});
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <TopNavBar/>
                <div className="container">
                    <Route path={["/", "/home"]} exact={true}>
                        <Home/>
                    </Route>
                    <Route path="/search">
                        <Search/>
                    </Route>
                    <Route path="/details">
                        <Details/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
