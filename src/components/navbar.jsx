import React, { Component } from "react";
import { Link } from "react-router-dom";


class NavBar extends Component {
    state = {};
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
                <a class="navbar-brand" href="#">Blog </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <form class="form-inline my-2 my-lg-0 m-7">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <Link>Logout</Link>
            </nav >
        )
    }
}

export default NavBar;