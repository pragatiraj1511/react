//import React from 'react';
import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import List from './list';
import { browserHistory } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Login extends Component {
constructor(props){
  super(props);
  this.state={
    username:"TDC",
    usnm:"",
  password: "TDC",
  c_password: "",

  };

  this.submitData = this.submitData.bind(this);
}
inputUsername = event => {
  this.setState({ usnm: event.target.value });

};
inputPassword = event => {
  this.setState({ c_password: event.target.value });
};
submitData(event) {
  event.preventDefault();
  const { password, c_password } = this.state;
  const { username, usnm } = this.state;
  const matches = (password === c_password && usnm === username);
 // matches ? alert("Login successfully") : alert("Please enter correct username and password");
 // matches ? (this.props.browserHistory.push('list')) : alert("Please enter correct username and password");
  matches ? (this.props.browserHistory.push('list')) : alert("Please enter correct username and password");
  //this.props.history.push('list');  
}
//function
 
render() {
    return (
      <Router browserHistory>
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {this.inputUsername}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {this.inputPassword}
               />
             <br/>
             <Link to="/list"><RaisedButton label="Submit" primary={true} style={style} onClick={this.submitData}/></Link>
         </div>
         </MuiThemeProvider>
      </div>
      <Switch>
          <Route path="/list" >
            <List />
          </Route>
          </Switch>
      </Router>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;