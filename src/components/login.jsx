import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { Link } from "react-router-dom"
import axios from "axios";
import Cookie from "js-cookie";


class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .label("email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async (response) => {
    try {
      const login = {
        email: this.state.data.email,
        password: this.state.data.password
      }
      const post = await axios.post('http://localhost:5000/api/blogService/auth', login);
      const accessToken = post.headers["x-auth-accesstoken"];
      const refreshToken = post.headers["x-auth-refreshtoken"];
      Cookie.set('access-token', accessToken);
      Cookie.set('refresh-token', refreshToken);
      this.props.history.push('/blog');
    }
    catch (ex) {
      alert(ex.response.data);
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
          <p>New User-<Link to='/register'>Sign Up</Link></p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
