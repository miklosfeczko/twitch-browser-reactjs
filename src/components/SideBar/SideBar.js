import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom'

import './SideBar.scss'

class SideBar extends Component {
state = {
    FEATURED_STREAMS: [],
    CHANNEL: false
}

componentDidMount = async () => {
    const results = await fetch(`https://api.twitch.tv/kraken/streams/featured`, {
        headers: new Headers({
        'Client-ID' : 'nj66gbe8njzhncv9x2ru7azb1g57iz'
         })
    });
    const data = await results.json();
    this.setState({FEATURED_STREAMS: data.featured })
    console.log(this.state.FEATURED_STREAMS.length)
}

setToOpposite = () => {
    this.setState({ CHANNEL: !this.state.CHANNEL })
}

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
                
                <section className="SIDEBAR__FEATURED__STREAMS">
                    <h3
                    style={{ textAlign: "center", color: "#c5c8d4", margin: '30px' }} 
                    className="HIDE">
                    Featured Streams
                    </h3>
                { this.state.FEATURED_STREAMS && this.state.FEATURED_STREAMS.map((FEATURED_STREAM) => {
                    if (this.state.FEATURED_STREAMS) {
                    return (
                        <Link 
                        onClick={this.setToOpposite}
                        key={FEATURED_STREAM.stream.channel._id}
                        style={{color: '#c5c8d4', textDecoration: 'none', backgroundColor: 'transparent', fontWeight: '200'}} 
                        className="STREAM__LINK"
                        to={{pathname: `/${this.state.CHANNEL}/STREAMS/${FEATURED_STREAM.stream.channel.name}`,
                        state: { name: FEATURED_STREAM.stream.channel.name }
                        }}>
                        <img 
                        alt={FEATURED_STREAM.stream.channel.name}
                        style={{ width: "30px", borderRadius: "50%" }}
                        src={FEATURED_STREAM.stream.channel.logo}/>
                        <p className="HIDE__TITLE">{FEATURED_STREAM.stream.channel.name}
                        <br />
                        <span style={{ color: "#c5c8d4", backgroundColor: 'transparent' }}>
                        {FEATURED_STREAM.stream.channel.game.length < 15 ? FEATURED_STREAM.stream.channel.game : `${FEATURED_STREAM.stream.channel.game.substring(0 , 15)}...`}
                        </span>
                        </p>
                        </Link>
                    ) 
                    } else return (
                        <div className="loading-indicator">
                        <div className="circle"/> 
                        <div className="circle circle-2" />
                        <div className="circle circle-3" />
                        </div>
                    )
                })} 
                </section>
            </div>
        )
    }
}

export default SideBar;