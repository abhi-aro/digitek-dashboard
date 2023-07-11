import React from "react";

const VideoPlayer = React.memo(({ src, videoRef }) => {
  return (
    <video
      autoPlay
      muted
      loop
      ref={videoRef}
      style={{ height: "100%", width: "100%" }}
    >
      <source src={src} />
    </video>
  );
});

export default VideoPlayer;
