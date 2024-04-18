import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ApplicationForm from "./ApplicationForm";
import Jobdescription from "./JobDescription";
import Home from "./Home";
import { AuthProvider, useAuth } from './AuthContext';


function App() {
  const [registered, setRegistered] = useState(false);

  return (
    <>
    <AuthProvider>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {registered ? (
              <Redirect to="/login" />
            ) : (
              <SignupForm setRegistered={setRegistered} />
            )}
          </Route>
          <Route path="/login" component={LoginForm} />
          <Route path="/" Component={ProtectedRoute} />
        </Switch>

      </div>
    </Router>
    </AuthProvider>
    </>
  );
}

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const history = useHistory();

  useEffect(() => {
    // Redirect to the login page if the user is not authenticated
    if (!isAuthenticated) {
      history.push('/login');
    }
  }, [isAuthenticated, history]);

  // Render the component for authenticated users directly
  return isAuthenticated ? <Home /> : null;
};

export default App;
