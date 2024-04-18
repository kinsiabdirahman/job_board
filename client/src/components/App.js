import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"; // Import Redirect
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Home from "./Home";


function App() {
  const [registered, setRegistered] = useState(false);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {registered ? (
              <Redirect to="/home" />
            ) : (
              <SignupForm setRegistered={setRegistered} />
            )}
          </Route>
          <Route path="/login" component={LoginForm} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
