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
import Jobdescription from "./JobDescription";
import Home from "./Home";
import { AuthProvider, useAuth } from './AuthContext';

//import Home from "./Home";

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

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const history = useHistory();

  useEffect(() => {
    
    if (!isAuthenticated) {
      history.push('/login');
    }
  }, [isAuthenticated, history]);

  
  return isAuthenticated ? <Home /> : null;
};

export default App;
