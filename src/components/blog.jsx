import React, { Component } from "react";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";
import { Link } from "react-router-dom";

class Blog extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <SideBar/>
                <h1>Recent Posts</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Migration of Birds</td>
                            <td><Link to="www.google.com">Google</Link></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>)
    }
}

export default Blog;