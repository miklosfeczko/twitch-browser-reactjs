import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import './SideBar.css'

class SideBar extends Component {
    render() {
        return (
            <div className="SIDEBAR">
                <h1 className="LOGO">
                    tbr
                </h1>
                
                <ul className="sidebar-links">
                    <li>
                        <NavLink exact to="/" style={{color: '#c5c8d4', textDecoration: 'none', backgroundColor: 'transparent', fontWeight: 'bold'}} activeStyle={{color: 'white', textDecoration: 'none'}}>
                        <i className="fas fa-home" /> Home Page         
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/TOPGAMES" style={{color: '#c5c8d4', textDecoration: 'none', backgroundColor: 'transparent', fontWeight: 'bold'}} activeStyle={{color: 'white', textDecoration: 'none'}}>                   
                        <i className="fas fa-gamepad" /> Top Games
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/STREAMS" style={{color: '#c5c8d4', textDecoration: 'none', backgroundColor: 'transparent', fontWeight: 'bold'}} activeStyle={{color: 'white', textDecoration: 'none'}}>               
                        <i className="fas fa-video" /> Streams
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar;