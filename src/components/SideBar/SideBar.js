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
                        <NavLink 
                        to="/" 
                        style={{ textDecoration: 'none', backgroundColor: 'transparent' }}>
                        <h3
                        style={{ textDecoration: 'none', backgroundColor: 'transparent', fontWeight: '200' }}  
                        ><i className="fas fa-home" /> <span className="hide">Home Page</span></h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/TOPGAMES" style={{ textDecoration: 'none', backgroundColor: 'transparent' }}>
                        <h3
                        style={{ textDecoration: 'none', backgroundColor: 'transparent', fontWeight: '200' }}  
                        className="sidebar-links"><i className="fas fa-gamepad" /> <span className="hide">Top Games</span></h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/STREAMS" style={{ textDecoration: 'none', backgroundColor: 'transparent' }}>
                        <h3
                         style={{ textDecoration: 'none', backgroundColor: 'transparent', fontWeight: '200' }} 
                        className="sidebar-links"><i className="fas fa-video" /> <span className="hide">Streams</span></h3>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar;