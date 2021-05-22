import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import jwt_decode from "jwt-decode";
import store from "./store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import setAuthToken from "./utils/setAuthToken";
// import Navbar from "./components/reusable/Navbar";
import PrivateRoute from "./components/reusable/PrivateRoute";
// import PrivateRoute2 from "./components/reusable/PrivateRoute2";
// import Test from "./components/pages/Test";
// import Tests from "./components/pages/Tests";
// import Results from "./components/pages/Results";
// import Result from "./components/pages/Result";
import Docs from './components/pages/Docs'
import Doc from './components/pages/Doc'
import Login from "./components/pages/Login";
import Upload from "./components/pages/Upload";
// import Settings from "./components/pages/Settings";
function App() {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      window.location.href = "/";
    }
  }

  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Login} />
        <Switch>
          <PrivateRoute exact path='/dashboard' component={Docs} />
          <PrivateRoute exact path='/fetch/:id' component={Doc} />
          <PrivateRoute exact path='/upload' component={Upload} />
          {/* <PrivateRoute exact path='/document/:id' component={Result} />
          <PrivateRoute exact path='/settings' component={Settings} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
