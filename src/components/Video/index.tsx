"use client";

import { useState, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28" data-aos="zoom-in">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md relative"
              data-wow-delay=".15s"
            >
              <video
                ref={videoRef}
                className="w-full h-full rounded-md object-cover"
                preload="metadata"
                src="/images/video/video.mp4"
                poster="/images/video/videothumb.jpg" 
                controls={isPlaying}
              />


              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    aria-label="Play video"
                    onClick={handlePlay}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
