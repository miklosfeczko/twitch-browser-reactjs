import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './TopGames.scss'

class TopGames extends Component {
state = {
    TOPGAMES: []
}
      
componentDidMount = async () => {
    const results = await fetch(`https://api.twitch.tv/helix/games/top?first=100`, {
        headers: new Headers({
        'Client-ID' : 'nj66gbe8njzhncv9x2ru7azb1g57iz'
        })
    });
    const data = await results.json();
    this.setState({ TOPGAMES: data.data })
}

render() {
    let content;
    if (this.state.TOPGAMES.length > 0) {
        content = <div></div>
    } else {
        content = <div className="loading-indicator">
        <div className="circle"/> 
        <div className="circle circle-2" />
        <div className="circle circle-3" />
      </div>
    }

    return (
        <div className="TOPGAME__CONTAINER">
            {this.state.TOPGAMES && this.state.TOPGAMES.map((TOPGAME) => {
                return (
                    <div key={TOPGAME.id} className="TOPGAME__ITEM">
                        <Link 
                            className="STREAM__LINK"
                            to={{
                            pathname: `/TOPGAMES/${TOPGAME.id}`,
                            state: { id: TOPGAME.id }
                        }}>
                        <img 
                        alt={TOPGAME.name}
                        src={TOPGAME.box_art_url.replace('{width}', '272').replace('{height}', '380')}/>
                        
                        <h3>{TOPGAME.name}</h3>
                        </Link>
                    </div>
                )
            })}{content}
        </div>
        )
    }
}

export default TopGames;
