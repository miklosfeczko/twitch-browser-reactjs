import React, { Component } from 'react'

import {kFormatter} from '../../utility/utility'
import {Link} from 'react-router-dom'

import '../Streams/Streams.scss'

class GameStreams extends Component {
state = {
    GAMESTREAMS: []
}

componentDidMount = async () => {
    const id = this.props.location.state.id;
    const results = await fetch(`https://api.twitch.tv/helix/streams?first=50&game_id=${id}`, {
        headers: new Headers({
        'Client-ID' : 'nj66gbe8njzhncv9x2ru7azb1g57iz'
        })
    });
    const data = await results.json();
    console.log(data);
    this.setState({ GAMESTREAMS: data.data })
}

    render() {
        let content;
    if (this.state.GAMESTREAMS.length > 0) {
        content = <div></div>
    } else {
        content = <div className="loading-indicator">
        <div className="circle"/> 
        <div className="circle circle-2" />
        <div className="circle circle-3" />
      </div>
    }
        return (
            <div className="STREAM__CONTAINER">
               {this.state.GAMESTREAMS && this.state.GAMESTREAMS.map((GAMESTREAM) => {
                   
                   return (
                       <div key={GAMESTREAM.id} className="STREAM__CARD">
                           <Link 
                               className="STREAM__LINK"
                               to={{
                               pathname: `/TOPGAMES/${this.props.location.state.id}/${GAMESTREAM.user_name}`,
                               state: { name: GAMESTREAM.user_name }
                           }}>
                           <img 
                           alt={GAMESTREAM.title}
                           src={GAMESTREAM.thumbnail_url.replace('{width}', '320').replace('{height}', '180')} 
                           />
                           <div className="STREAM__CARD__BLOCK">
                           <div className="STREAM__CARD__TEXT">
                           <h3>{GAMESTREAM.title}</h3>
                          
                           <p>{GAMESTREAM.user_name} | {kFormatter(GAMESTREAM.viewer_count)} viewers</p>
                           </div>
                           </div>
                           </Link>
                       </div>
                   )
               })}{content}
            </div>
        )
    }
}

export default GameStreams;
