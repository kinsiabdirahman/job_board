import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import Home from '../Home';
import Jobs from './Jobs';
import Careers from './Careers';

function Pages() {
 return (
    <div className="pages">
      <div className="page">
        <Switch>
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/Jobs" component={Jobs} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
 );
}

export default Pages;
