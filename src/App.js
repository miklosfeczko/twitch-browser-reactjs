import React from 'react';
import './App.css';

class App extends React.Component {

componentDidMount = async () => {
  const results = await fetch(`https://api.twitch.tv/helix/games/top`, {
    headers: new Headers({
      'Client-ID' : 'nj66gbe8njzhncv9x2ru7azb1g57iz'
    })
  });
  console.log(results);
}

render() {
  return (
    <div>
      Hello from App!
    </div>
  )
}
}

export default App;
