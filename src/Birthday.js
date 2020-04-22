import React, { Component } from "react";
import bday from "./giphy.gif";
import Video from "./Video";
export class Birthday extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <img src={bday} alt="" />
          <h2>
            <span role="img">🌟 Happy 60th Birthday 🎊</span>
          </h2>
          <p>We have a little virtual surprise for you...</p>
          <br />
          <div className="vid">
            <Video />
          </div>
        </div>
      </div>
    );
  }
}

export default Birthday;
