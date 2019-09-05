import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import TopGames from './components/TopGames/TopGames'
import Streams from './components/Streams/Streams'
import SideBar from './components/SideBar/SideBar'

class App extends React.Component {


render() {
  return (
    <div>
      <Router>
        <SideBar />
        <Route path="/STREAMS" component={Streams} />
        <Route path="/TOPGAMES" component={TopGames} />
      </Router>
    </div>
  )
}
}

export default App;
