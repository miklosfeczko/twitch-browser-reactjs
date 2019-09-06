import React, { Component } from 'react'
import './TestComp.css'

class TestComp extends Component {
state = {
    name: this.props.location.state.name
}

    render() {
        return (
          <div className="IFRAME__CONTAINER">
            <iframe
                className="video-frame"
                src={`https://player.twitch.tv/?channel=${this.state.name}&muted=true`}
                title={`featured streamer `}
                frameBorder="0"
                allowFullScreen
                height="500px"
                width="100%"
              />
          </div>
        )
    }
}

export default TestComp;