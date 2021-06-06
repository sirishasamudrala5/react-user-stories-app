import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch,Route} from "react-router-dom";
import Login from './components/Login';
import UserHome from './components/UserHome';
import AdminHome from './components/AdminHome';
import CreateStory from './components/CreateStory';
import history from './history';

ReactDOM.render(
  <Router history={history}>
     <div style={{ display: "flex",
    justifyContent: "center",
    alignItems: "center"}}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/user-home" component={UserHome} />
        <Route exact path="/admin-home" component={AdminHome} />
        <Route exact path="/createStory" component={CreateStory} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);