"use client";

import React, { useEffect, useRef } from "react";
import Styles from "../../Styles/HomePage/Index.module.css";
// import Feed from "./Feed";
// import Shop from "./Shop";
import Sponsered from "./Sponsered";
import { useInView } from "react-intersection-observer";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const Index = () => {
  const videoSrc = "/Video/Intro/clideo_digitek-process.mp4";
  const videoRef = useRef();
  const { vidContainerRef, inView } = useInView({ threshold: 0 });
  useEffect(() => {
    if (inView === true) {
      videoRef.current.play();
    }
  });
  return (
    <div className={Styles.container}>
      <div className={Styles.feedWrapper}>
        <div ref={vidContainerRef}>
          <VideoPlayer src={videoSrc} videoRef={videoRef} />
        </div>
        {/* <Feed />
				<Shop /> */}
      </div>
      <Sponsered />
    </div>
  );
};

export default Index;
