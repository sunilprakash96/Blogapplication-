import React, { Component } from "react";
import { bubble as Menu } from 'react-burger-menu';

class Sidebar extends Component {

    render() {
        return (
            <div>
                <Menu>
                    <a className="menu-item" href="/">
                        Home
      </a>

                    <a className="menu-item" href="/laravel">
                        Dashboard
      </a>

                    <a className="menu-item" href="/angular">
                        ManagePosts
      </a>
                </Menu>
            </div>
        );
    }
}

export default Sidebar;