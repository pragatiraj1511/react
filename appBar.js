import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";
import Login from './Login.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
 // const history = useHistory();
  const classes = useStyles();

 // function handleClick() {
   // history.push("/login");
  //}

  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            DashBoard
          </Typography>
          <Link to ="/login"> <Button color="inherit" >Login</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
    <Switch>
    <Route path="/login" >
      <Login />
    </Route>
    </Switch>
</Router>
  );
}