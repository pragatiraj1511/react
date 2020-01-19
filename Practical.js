import React, { Component } from "react";
import { render } from "react-dom";

class exp extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username:"TDC",
        usnm:"",
      password: "TDC",
      c_password: "",
    };

    this.submitData = this.submitData.bind(this);
  }
  inputPassword = event => {
    this.setState({ usnm: event.target.value });

  };

  confirmPassword = event => {
    this.setState({ c_password: event.target.value });
  };
  submitData(event) {
    event.preventDefault();
    const { password, c_password } = this.state;
    const { username, usnm } = this.state;
    const matches = (password === c_password && usnm === username);
    matches ? alert("Login successfully") : alert("Please enter correct password");  
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitData}>
          Password:
          <input
            type="text"
            name="username"
            onChange={this.inputPassword}
          />
          <input
            type="password"
            name="c_password"
            onChange={this.confirmPassword}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default exp;