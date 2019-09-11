import React, { Component } from 'react'
import './Embed.scss'

class TestComp extends Component {
constructor(props) {
  super(props);
  this.state = {
    name: this.props.location.state.name,
    USER: ''
  }

this.toggleChat = this.toggleChat.bind(this);
}


componentDidMount = async () => {
  const results = await fetch(`https://api.twitch.tv/helix/users?login=${this.state.name}`, {
      headers: new Headers({
      'Client-ID' : 'nj66gbe8njzhncv9x2ru7azb1g57iz'
      })
  });
  const data = await results.json();
  this.setState({ USER: data.data })
  console.log(this.state.USER);
}


toggleChat = () => {
  this.setState(function(prevState) {
    return {isToggleOn: !prevState.isToggleOn};
  })
}

    render() {
        return (
              <div>
              {this.state.USER && this.state.USER.map((USER) => {
                return (
              <section className="CHANNEL__CONTAINER" key={USER.id}>
                <div className="INFO__STREAM">
                 <header className="CHANNEL__HEADER">

                 <div className="HEADER__BLOCK">
                   <img 
                   alt={USER.display_name}
                   style={{ width: "30px", borderRadius: "50%" }}
                   src={USER.profile_image_url}/>
                  <span>{this.state.name}</span>
                 </div>
    
                
                </header>
              
                  <iframe
                    className="VIDEO__FRAME"
                    src={`https://player.twitch.tv/?channel=${this.state.name}&muted=true`}
                    title={`featured streamer ${this.state.name}`}
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>

                <div className="CHAT__CONTAINER">
                  <button onClick={this.toggleChat}>
                  { !this.state.isToggleOn ? "Hide Chat" : "Show Chat" }
                  </button>
 
                  { !this.state.isToggleOn && (
                     <iframe
                      frameBorder="0"
                      title={`featured streamer ${this.state.name} chat`}
                      scrolling="no"
                      id="chat_embed"
                      src={`https://www.twitch.tv/embed/${this.state.name}/chat`}
                      />
                  )}
                </div>
              </section>
              )})}
            </div>
        
            )
        }
}

export default TestComp;