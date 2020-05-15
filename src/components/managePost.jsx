import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SideBar from "../components/sidebar";

class ManagePost extends Component {
    state = {
        posts:[]
    };

    async componentDidMount() {
        const { data } = await axios.get('http://localhost:5000/api/blogService/blog');
        console.log(data);
        this.setState({posts: data});
    }

    render() {
        return (
            <div>
                <SideBar/>
                <h1>ManagePost</h1>
                <Link to="/modalwindow">Add</Link>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(post => (
                            <tr>
                                <td>{post.title}</td>
                        <td><Link to="www.google.com">{post.post.substring(0,30)}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>);

    }
}

export default ManagePost;