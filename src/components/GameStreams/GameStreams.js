import React, { Component } from 'react'

class GameStreams extends Component {
state = {
    GAMESTREAMS: []
}

componentDidMount = async () => {
    const id = this.props.location.state.id;
    const results = await fetch(`https://api.twitch.tv/helix/streams?game_id=${id}`, {
        headers: new Headers({
        'Client-ID' : 'nj66gbe8njzhncv9x2ru7azb1g57iz'
        })
    });
    const data = await results.json();
    console.log(data);
    this.setState({ GAMESTREAMS: data.data })
}
    render() {
        return (
            <div>
                Test one.
            </div>
        )
    }
}

export default GameStreams;
