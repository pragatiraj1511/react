import React from 'react';
import ReactDOM from 'react-dom';
import { data } from './data';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            json: []
        }
        //const classes = useStyles();
    }

    componentDidMount() {
        this.setState((prevState) => {
            return {
                json: data()
            }
        })
    }

    render() {
        return (
            <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Emailid</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.json.map(data => (
            <TableRow >
    
              <TableCell align="center">{data.firstname}</TableCell>
              <TableCell align="center">{data.lastname}</TableCell>
              <TableCell align="center">{data.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
        )
    }
}

export default List;
  