import React, { Component } from 'react'
import {kFormatter} from '../../utility/utility'
import {Link} from 'react-router-dom'

import './Streams.scss'

class Streams extends Component {
state = {
    STREAMS: []
}

componentDidMount = async () => {
    const results = await fetch(`https://api.twitch.tv/helix/streams?first=100`, {
        headers: new Headers({
        'Client-ID' : 'nj66gbe8njzhncv9x2ru7azb1g57iz'
        })
    });
    const data = await results.json();
    this.setState({ STREAMS: data.data })
}


render() {
    let content;
    if (this.state.STREAMS.length > 0) {
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
           {this.state.STREAMS && this.state.STREAMS.map((STREAM) => {
            return (
                <div key={STREAM.id} className="STREAM__CARD" >
                    <Link 
                         className="STREAM__LINK"
                         to={{ 
                         pathname: `/STREAMS/${STREAM.user_name}`,
                         state: { name: STREAM.user_name }
                    }}>
                    <img 
                    alt={STREAM.title}
                    src={STREAM.thumbnail_url.replace('{width}', '320').replace('{height}', '180')} 
                    />
                    <div className="STREAM__CARD__BLOCK">
                    <div className="STREAM__CARD__TEXT">                 
                    <h3>{STREAM.title}</h3>           
                    <p>{STREAM.user_name} | {kFormatter(STREAM.viewer_count)} viewers</p> 
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

export default Streams;