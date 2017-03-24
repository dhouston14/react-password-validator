import React, { Component } from 'react';
import Validator from "./Validator"
import "./Validator.css";

class Login extends Component {
  constructor(props) {
    super()
    this.state = {
      user: "",
      password: "",
      validator: ""
    };
    this.validUser = this.validUser.bind(this);
    this.validPassword = this.validPassword.bind(this);
    this.validValidator = this.validValidator.bind(this);
    this.areYouCorrect = this.areYouCorrect.bind(this);
  }

  validUser(lit) {
    this.setState({user: lit.target.value})
  }

  validPassword(lit) {
    this.setState({password: lit.target.value})
  }

  validValidator(lit) {
    this.setState({validator: lit.target.value})
  }

  areYouCorrect(lit) {
    lit.preventDefault();

    if(this.state.password === this.state.validator) {
      alert("Logged in. Welcome...");
    } else {
      alert("Failure Login...");
    };
  }

render() {
  return (
    <form onSubmit={this.areYouCorrect}>
      <h1>Sign Up</h1>
      <input type="text" value={this.state.user} placeholder="Enter Email" onChange={this.validUser}/>
      <input type="password" value={this.state.password} placeholder="Enter Password" onChange={this.validPassword} />
      <input type="password" value={this.state.validator} placeholder="Re-Enter Password" onChange={this.validValidator}/>
      <input type="submit" value="Submit" />
      </form>
      );
    }
  }

export default Login
