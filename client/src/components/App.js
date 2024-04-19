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
import JobDescription from "./JobDescription";
import ApplicationForm from "./ApplicationForm";
import NavBar from "./NavBar";
import Pages from "./Pages/Pages";
import './App.css'
import Footer from './Footer';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
