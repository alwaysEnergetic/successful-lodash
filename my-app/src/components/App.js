import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route ,Redirect } from "react-router-dom";
import Home from "./Home";
import Show from "./Show";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/home" component = {Home} />
        <Route exact path = "/show" component = {Show} />
        
      </Switch>
    </Router>
  );
}
export default App;