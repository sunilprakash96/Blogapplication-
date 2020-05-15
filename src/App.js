import React from "react";
import "./App.css";
import RegisterForm from "../src/components/register";
import LoginForm from "../src/components/login";
import Blog from "./components/blog";
import ManagePost from "../src/components/managePost";
import NotFound from "../src/components/notFound";
import { Route, Redirect, Switch } from "react-router-dom";
import ModalWindow from "./components/modalWindow";

function App() {
    return (
        <React.Fragment > 
            <main className="container w-100" >
                <Switch >
                    <Route path="/register"exact component={RegisterForm} />
                    <Route path="/login" exact component={LoginForm} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/manageposts" exact component={ManagePost}/>
                    <Route path="/modalwindow" exact component={ModalWindow}/>
                    <Route path="/not-found" exact component={NotFound} />
                    <Redirect to="/not-found" exact />
                </Switch>
            </main >
        </React.Fragment>
    );
}

export default App;