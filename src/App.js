import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home/Home'
import TopGames from './components/TopGames/TopGames'
import Streams from './components/Streams/Streams'
import SideBar from './components/SideBar/SideBar'
import GameStreams from './components/GameStreams/GameStreams'
import Embed from './components/Embed/Embed' 

class App extends React.Component {

render() {
  return (
    <div>
       <Router>
        <SideBar />
        <Route exact path="/true/STREAMS/:name" component={Embed} />
        <Route exact path="/false/STREAMS/:name" component={Embed} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/STREAMS" component={Streams} />
            <Route exact path="/STREAMS/:name" component={Embed} />
            <Route exact path="/TOPGAMES" component={TopGames} />
            <Route exact path="/TOPGAMES/:id" component={GameStreams} />
            <Route exact path="/TOPGAMES/:id/:name" component={Embed} />
          </Switch>
      </Router>
    </div>
  )
}
}

export default App;
