/* A simple iframe wrapper that makes 16:9 responsive embed */
import React from 'react';
import video from './../images/video.mp4'

export default ({ url, background="black", className="video" }) => {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        background: background,
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0
      }}
    >
      <video
        style={{
          position: "absolute",
          top: 0,
          left: 0,
         
          width: "100%",
          height: "100%"
        }}
        frameBorder="0"
        autoPlay={true} controls loop
      >
      <source src={video} />
      </video>
    </div>
  );
};
