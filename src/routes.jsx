import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './App.jsx';
import CreatePost from './pages/createPost.jsx'; 

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/createPost" component={CreatePost} />
      </Switch>
    </Router>
  );
};

export default Routes;
