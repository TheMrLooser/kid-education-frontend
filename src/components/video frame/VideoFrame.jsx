import React, { useEffect, useRef } from "react";
import { Frame } from "./VideoFrame.styles";

const VideoFrame = ({ videoURL }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.load();
  }, [videoURL]);

  return (
    <Frame
      ref={videoRef}
      autoPlay
      controls
      controlsList="nodownload"
      onContextMenu={(e) => e.preventDefault()}
    >
      <source src={videoURL} type="video/mp4" />
    </Frame>
  );
};

export default VideoFrame;
