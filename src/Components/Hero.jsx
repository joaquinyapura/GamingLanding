import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setloadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideo = useRef(null);

  const upcommingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideo = () => {
    setHasClicked(true);
    setCurrentIndex(upcommingVideoIndex);
  };

  const getvideo = (index) => `../videos/hero-${index}.mp4`;

  const handleVideoLoaded = () => {
    setloadedVideos((prev) => prev + 1);
  };

  /* gsap aanimacion */

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideo.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video", {
      clipPath: "polygon(8% 0, 94% 0, 100% 100%, 0% 100%)",
      borderRadius: "0 0 20% 20%",
    });

    gsap.from("#video", {
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div
      id="video"
      className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
    >
      <div>
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg  ">
          <div
            onClick={handleMiniVideo}
            className="origin-center scale-50 opacity-0 transition-all duration-300 ease-in hover:scale-100 hover:opacity-100  "
          >
            <video
              src={getvideo(upcommingVideoIndex)}
              ref={nextVideo}
              loop
              muted
              id="current-video"
              className=" size-64 origin-center scale-150 object-cover object-center  "
              onLoadedData={handleVideoLoaded}
            />
          </div>
        </div>

        <video
          ref={nextVideo}
          src={getvideo(currentIndex)}
          loop
          muted
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          onLoadedData={handleVideoLoaded}
        />
        <video
          src={getvideo(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoaded}
        />
      </div>
      <h1 className="special-font absolute z-20 bottom-5 right-5 text-8xl lg:text-[200px] text-white ">
        G<b>a</b>mming
      </h1>
      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="font-zentry text-8xl text-blue-100 lg:text-[200px]">
            Redifi<b>n</b>e
          </h1>
          <p className="mb-5 font-robert-regular text-xl text-blue-100">
            Metagaming player name
          </p>
          <a
            href="#"
            className="bg-yellow-200 p-4 rounded-full font-bold px-20 transition-all ease-in-out duration-500 hover:bg-yellow-300"
          >
            Login now
          </a>
        </div>
      </div>
    </div>
  );
};
