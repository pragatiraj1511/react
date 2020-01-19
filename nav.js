import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login.js';
import List from './list';
import {
	withRouter
} from 'react-router-dom';

class Nav extends Component {
    render() {
    return(
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <div className="navbar-hearder">
                <ul className=" nav navbar-nav">
                    <li><Link to={"/login"}> login</Link></li>
                    <li><Link to={"/list"}> list</Link></li>
                    </ul>
            </div>
        </div>
        </nav>
        <div>
         
         <Route path="/login" Component={Login}/>
         <Route path="/list" Component={List}/>
         </div>
      </Router>
        
    );
};
}

export default  (Nav);