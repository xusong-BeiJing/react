
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router-dom';
import home from "../pages/index"
import attention from "../pages/index"


const RouteConfig = (
    
        <Router>
            <Switch>
                <Route path="/" component={home}></Route>
                <Route path="/attention" Component={attention}></Route>
            </Switch>
        </Router>
   
    
)

export default RouteConfig;

