import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import Home from "./Home";
import Jobs from "./Pages/Jobs";
import AboutUs from "./Pages/AboutUs";
import Careers from "./Pages/Careers";

import JobDescription from "./JobDescription";
import ApplicationForm from "./ApplicationForm";

function App() {
  const [registered, setRegistered] = React.useState(false);

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
          <Route path="/job/:id" component={JobDescription} />
          <Route path="/apply/:id" component={ApplicationForm} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/Jobs" component={Jobs} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
