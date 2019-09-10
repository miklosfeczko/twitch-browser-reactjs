import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import './SideBar.scss'

class SideBar extends Component {
    render() {
        return (
            <div className="SIDEBAR">
                <h1 className="LOGO">
                    tbr
                </h1>
                
                <ul className="SIDEBAR__LINKS">
                    <li>
                        <NavLink exact to="/" style={{color: '#c5c8d4', textDecoration: 'none', backgroundColor: 'transparent', fontWeight: '200'}} activeStyle={{color: 'white', textDecoration: 'none'}}>
                        <div className="SIDEBAR__BTN__HOVER" style={{ backgroundColor: 'transparent'}}><i style={{ backgroundColor: 'transparent'}} className="fas fa-home" />  <span className="HIDE"> Home Page</span> </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/TOPGAMES" style={{color: '#c5c8d4', textDecoration: 'none', backgroundColor: 'transparent', fontWeight: '200'}} activeStyle={{color: 'white', textDecoration: 'none'}}>                   
                        <div className="SIDEBAR__BTN__HOVER" style={{ backgroundColor: 'transparent'}}><i style={{ backgroundColor: 'transparent'}} className="fas fa-gamepad" />  <span className="HIDE"> Top Games</span> </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/STREAMS" style={{color: '#c5c8d4', textDecoration: 'none', backgroundColor: 'transparent', fontWeight: '200'}} activeStyle={{color: 'white', textDecoration: 'none'}}>               
                        <div className="SIDEBAR__BTN__HOVER" style={{ backgroundColor: 'transparent'}}><i style={{ backgroundColor: 'transparent'}} className="fas fa-video" />  <span className="HIDE"> Streams</span> </div>
                        </NavLink>
                    </li>
                    <li>
                        <a  href="https://github.com/miklosfeczko/twitch-browser-reactjs" style={{color: '#c5c8d4', textDecoration: 'none', backgroundColor: 'transparent', fontWeight: '200'}}>               
                        <div className="SIDEBAR__BTN__HOVER" style={{ backgroundColor: 'transparent'}}><i style={{ backgroundColor: 'transparent'}} className="fab fa-github" />  <span className="HIDE"> GitHub</span> </div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar;