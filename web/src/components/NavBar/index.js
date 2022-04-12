import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="ui inverted segment">
            <div className="ui inverted secondary menu">
                <NavLink className="item" to='/users'>Users</NavLink>
                <NavLink className="item" to='/addusers'>addusers</NavLink>
            </div>
        </div>
    )
}

export default NavBar;