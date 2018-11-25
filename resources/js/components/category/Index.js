import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Add from './Add';
import Listing from './Listing';

export default class Index extends Component {
    render() {
        return (
          <div>
          <Router>
          <div>
         <Link className="nav-link" to="/category">Listing</Link>
         <Link className="nav-link" to="/category/Add">Add</Link>

          <Route exact path="/category" component={Listing}/>
          <Route exact path="/category/Add" component={Add}/>
           </div>
          </Router>
          </div>
          
         
        );
    }
}