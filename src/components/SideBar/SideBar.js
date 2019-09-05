import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './SideBar.css'

class SideBar extends Component {
    render() {
        return (
            <div className="SIDEBAR">
                TBR
                <Link to="/TOPGAMES">Top Games</Link>
                <Link to="/STREAMS">Streams</Link>
            </div>
        )
    }
}

export default SideBar;