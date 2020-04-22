import React from "react";
import { Player, BigPlayButton } from "video-react";
import "../node_modules/video-react/dist/video-react.css";

export class Video extends React.Component {
  render() {
    return (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SXX1_ohbzvw"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* <Player
          fluid={false}
          height={490}
          width={275}
          playsInline
          poster="/assets/poster.png"
          src={vid}
        >
          <BigPlayButton position="center" />
        </Player> */}
      </div>
    );
  }
}

export default Video;
