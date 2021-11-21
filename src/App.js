import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import profile from "./reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import Home from "./components/Home";
import Search from "./components/Search";
import Details from "./components/Details";
import LoginRegister from "./components/Login-Register";
import Profile from "./components/Profile";
import TopNavBar from "./components/TopNavBar";
import Privacy from "./components/Privacy";

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
                        <LoginRegister/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/privacy">
                        <Privacy/>
                    </Route>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
