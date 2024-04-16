import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import Home from '../Home';

function Pages() {
 return (
    <div className="pages">
      <div className="page">
        <Switch>
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
 );
}

export default Pages;
