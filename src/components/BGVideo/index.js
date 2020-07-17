import React from "react";
import "./styles.scss";

const BGVideo = () => {
  return (
    <div class="bg-video">
      <video class="bg-video__content" autoplay muted loop>
        <source src="../../img/video.mp4" type="video/mp4" />
        <source src="../../img/video.webm" type="video/webm/" />
        Your browser is not supported!
      </video>
    </div>
  );
};

export default BGVideo;
