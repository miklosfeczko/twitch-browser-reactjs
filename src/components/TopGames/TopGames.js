import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './TopGames.css'

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
            })}
        </div>
        )
    }
}

export default TopGames;
