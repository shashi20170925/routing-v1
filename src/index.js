import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import {Home} from  './components/tabs/Home';
import {Admin} from  './components/tabs/Admin';
import {Profile} from  './components/tabs/Profile';
import {RouteNotFound} from './components/RouteNotFound'
import App from './App';


ReactDOM.render(


  <Router>
    <App>
    <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/admin' component={Admin} />
      <Route path='/profile' component={Profile} />
      <Route exact path='/' component={Home} />
      <Route render={(props) => (<h1>I tried my best to get you into a Route, however no route is matching for path you entered. Try different path. Route not found with render </h1> )}  />
      <Route  component={RouteNotFound} />

    </Switch>
    </App>
  </Router>, document.getElementById('root'));
