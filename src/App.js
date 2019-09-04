import React from 'react';
import './App.css';

import TopGames from './components/TopGames/TopGames'

class App extends React.Component {
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
  console.log(data);
  this.setState({ TOPGAMES: data })
}

render() {
  return (
    <div>
      Hello from App!
      <TopGames TOPGAMES={this.state.TOPGAMES}/>
    </div>
  )
}
}

export default App;
