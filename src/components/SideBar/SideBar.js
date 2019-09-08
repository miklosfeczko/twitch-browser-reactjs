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
                        <div className="SIDEBAR__BTN__HOVER" style={{ backgroundColor: 'transparent'}}><i style={{ backgroundColor: 'transparent'}} className="fas fa-home" />  <span className="hide"> Home Page</span> </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/TOPGAMES" style={{color: '#c5c8d4', textDecoration: 'none', backgroundColor: 'transparent', fontWeight: 'bold'}} activeStyle={{color: 'white', textDecoration: 'none'}}>                   
                        <div className="SIDEBAR__BTN__HOVER" style={{ backgroundColor: 'transparent'}}><i style={{ backgroundColor: 'transparent'}} className="fas fa-gamepad" />  <span className="hide"> Top Games</span> </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/STREAMS" style={{color: '#c5c8d4', textDecoration: 'none', backgroundColor: 'transparent', fontWeight: 'bold'}} activeStyle={{color: 'white', textDecoration: 'none'}}>               
                        <div className="SIDEBAR__BTN__HOVER" style={{ backgroundColor: 'transparent'}}><i style={{ backgroundColor: 'transparent'}} className="fas fa-video" />  <span className="hide"> Streams</span> </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar;