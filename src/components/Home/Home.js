import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {kFormatter} from '../../utility/utility'

import '../Streams/Streams.scss'
import './Home.scss'

class Home extends Component {
state = {
    STREAMS: []
}

componentDidMount = async () => {
    const results = await fetch(`https://api.twitch.tv/helix/streams?first=10`, {
        headers: new Headers({
        'Client-ID' : 'nj66gbe8njzhncv9x2ru7azb1g57iz'
        })
    });
    const data = await results.json();
    console.log(data);
    
    this.setState({ STREAMS: data.data })
}

render() {
    console.log(this.state.STREAMS, 'WHATEVER')
    return (
        <React.Fragment>
        <div className="video">
        <div className="iframe-container">
        <iframe
            height="500px"
            src={`https://player.twitch.tv/?channel=loltyler1&muted=true`}
            title={`featured streamer ${this.state.name}`}
            frameBorder="0"
            allowFullScreen
        />
        </div>
        </div>

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
        })}
        </div>
        </React.Fragment>
        )
        
    }
}

export default Home;
