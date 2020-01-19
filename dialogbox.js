import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import BorderColor from 'material-ui/svg-icons/editor/border-color';
//import SvgIcon from 'material-ui-next/SvgIcon';
//import Add from 'material-ui-icons/Add';

class DialogBox extends Component {
   constructor() {
      super();
      this.state = {
         ids:['129', '105', '131', '151'],
         myid: '',
         open_dialog: false
      }
      this.openFunc = this.openFunc.bind(this);
   }
   check_today() {
      let container = [];
      let i;

      for(i=0; i<this.state.ids.length;i++) {
         container.push(
                //<BorderColor onClick = {this.openFunc} data-id ={this.state.ids[i]}/>
                <BorderColor onClick = {() => this.openFunc(this.state.ids[i])}/>
         )
      }

      if(container.length === 0){
        return(
            <div>show none!</div>
            )
      }
      else{
        return (
          <table>
            <tr>
                {container}
            </tr>
          </table>  
        )
      }
   }
   openFunc(value) {
    this.setState({
       open_dialog: true,
       myid: value
    });
  }
   handleClose = () => {
      this.setState({open_dialog: false});
   };
   render() {
      return(
        <div>
          <div>
           {this.check_today()}
          </div>
          <Dialog
           autoDetectWindowHeight={true}
           modal={false}
           open={this.state.open_dialog}
           onRequestClose={this.handleClose}
          >
           <div>
             It's the dialog-box!
             My id is {this.state.myid}
           </div>
          </Dialog>
        </div>
      )
   }
}
export default DialogBox