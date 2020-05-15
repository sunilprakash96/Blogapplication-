import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import axios from 'axios';

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = async () => {
    try{
    const register = {
      email: this.state.data.email,
      password: this.state.data.password,
      name: this.state.data.name
    }
    const post = await axios.post('http://localhost:5000/api/blogService/user',register);
    console.log(post);
    alert("Registered Successfully")
    window.location="/login"
  }
  catch(ex){
    alert(ex.response.data);
  }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
