import React, { Component } from "react";
import { bubble as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
import '../css/sideBar.css';

class Sidebar extends Component {

    render() {
        return (
            <div>
                <Menu>
                    <Link to="/Dashboard">Dashboard</Link>
                    <Link to="/manageposts">ManagePosts</Link>
                </Menu>
            </div>
        );
    }
}

export default Sidebar;