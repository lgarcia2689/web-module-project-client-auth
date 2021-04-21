import React from "react";
import Friends from './components/Friends'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'


export default function App() {
  const logout = () => {
    // request to /api/logout
    window.localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout} to="/login">
              Logout
            </Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          {/* history (navigating), match (access params), location (url info) */}
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route render={(props) => <Login {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}
