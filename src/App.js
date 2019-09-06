import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import TopGames from './components/TopGames/TopGames'
import Streams from './components/Streams/Streams'
import SideBar from './components/SideBar/SideBar'
import GameStreams from './components/GameStreams/GameStreams'
import TestComp from './components/TestComp/TestComp' 

class App extends React.Component {


render() {
  return (
    <div>
      <Router>
        <SideBar />
        <Switch>
        <Route exact path="/STREAMS" component={Streams} />
        <Route exact path="/STREAMS/WHAT" component={TestComp} />
        <Route exact path="/TOPGAMES" component={TopGames} />
        <Route exact path="/TOPGAMES/:id" component={GameStreams} />
        <Route exact path="/TOPGAMES/:id/WHAT" component={TestComp} />
        </Switch>
      </Router>
    </div>
  )
}
}

export default App;
