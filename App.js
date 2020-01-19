import React from 'react';
import {Router, Route,browerHistory} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Dashboard from './dashboard';
import List from './list';
import DialogBox from './dialogbox';
import Nav from './nav';
import ButtonAppBar from './appBar';
import FooterPage from './footer';
import Exp from './Practical';
import BasicExample from './test';
 
class App extends React.Component {  
  constructor(props){
    super(props);
    this.state={
      //login:[],
      //uploadScreen:[]
    }
    
  }
  
  render() {
    return (

      //<Login/>
      //<List/>
     <DialogBox/>
     //<Nav/>
     //<ButtonAppBar/>
     //<FooterPage/>
     //<Exp/>
     //<Dashboard/>
     //<BasicExample/>


    );
  }
}

export default App;

