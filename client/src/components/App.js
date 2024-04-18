import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import LoginForm from './LoginForm';
import SignupForm from './Signup';
import Home from './Home'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={LoginForm} /> 
          <Route path="/signup" component={SignupForm} />
          <Route path="/" component={ProtectedRoute} />
        </Switch>
      </Router>
    </AuthProvider>
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
