import React from "react";
import "./App.css";
import RegisterForm from "../src/components/register";
import LoginForm from "../src/components/login";
import Blog from "./components/blog";
import NotFound from "../src/components/notFound";
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
    return (
        <React.Fragment >
            <main className="container" >
                <Switch >
                    <Route path="/register" component={RegisterForm} />
                    <Route path="/" component={LoginForm} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect to="/not-found" exact />
                </Switch>
            </main >
        </React.Fragment>
    );
}

export default App;