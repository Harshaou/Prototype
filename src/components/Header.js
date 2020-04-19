import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class Header extends Component {

    
    render() {    
        

        return (
        <header className="block-header">
                <ul className="header-menu horizontal-list ">
                    <div className="nav-header">
                    <li>
                        <NavLink to="/" exact activeClassName="nav-active"
                         className="header-menu-tab"><span className="icon-head fontawesome-star-empty scnd-font-color"></span>
                        <span className="nav-header">Hot List</span></NavLink>
                    </li>

                    <li>
                        <NavLink activeClassName="nav-active" to="/live" 
                        className="header-menu-tab" ><span className="icon-head fontawesome-headphones fa-headphones"></span>
                        <span className="nav-header">Live Stream</span></NavLink>
                    </li>

                    <li>
                        <NavLink activeClassName="nav-active"
                        to="/peoples" className="header-menu-tab" >
                        <span className="icon-head fontawesome-user scnd-font-color"></span>
                        <span className="nav-header">Peoples</span></NavLink>
                    </li>
                    </div>
                </ul>
        </header>
            
        );
    }
}

export default Header;
