import React, { useEffect, useRef } from "react";
import Header from "../components/layouts/header";
import PlayMusic from "../components/modals/playMusic";
import GetCard from "../components/modals/getCard";
import Video from "../assets/video/HQ.mp4";
import BushLeftImg from "../assets/imgs/bushLeft.svg";
import BushRightImg from "../assets/imgs/bushRight.svg";

function HomeView() {
  const containerRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const scrollDownPointer = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const containerWidth = containerRef.current.offsetWidth;
      const windowWidth = window.innerWidth;
      const maxOffset = (windowWidth - containerWidth) / 2;

      const leftOffset = (scrollPosition / windowWidth) * maxOffset;
      const rightOffset = (scrollPosition / windowWidth) * maxOffset;

      const scrollingProgress =
        0.6 -
        scrollPosition /
          (document.documentElement.scrollHeight - window.innerHeight);
      const scrollingProgress2 =
        2 -
        scrollPosition /
          (document.documentElement.scrollHeight - window.innerHeight);
     
      if (scrollPosition > document.body.offsetHeight) {
        leftImageRef.current.style.transform = `translateX(-2000px)`;
        rightImageRef.current.style.transform = `translateX(2000px)`;
        scrollDownPointer.current.style.opacity = "0";
      } else {
        leftImageRef.current.style.transform = `translateX(-${
          leftOffset * 16
        }%)`;
        rightImageRef.current.style.transform = `translateX(${
          rightOffset * 16
        }%)`;
        scrollDownPointer.current.style.opacity = scrollingProgress;
        videoRef.current.style.transform = `scale(${scrollingProgress2})`
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={Video} type="video/mp4" />
      </video>
      <div ref={containerRef} className="relative w-full h-[220vh]">
        <div className="w-full h-screen relative">
          <div ref={scrollDownPointer} className="container scrollDownPoint">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="text-white min-w-max absolute top-full font-ceraBlack text-xl">
              Scroll Down
            </div>
          </div>
          <img
            ref={leftImageRef}
            className="fixed top-0 left-0 w-full h-full object-cover z-50 bushes"
            src={BushLeftImg}
            alt="Left Image"
          />
          <img
            ref={rightImageRef}
            className="fixed top-0 right-0 w-full h-full object-cover z-50 bushes"
            src={BushRightImg}
            alt="Right Image"
          />
        </div>
      </div>
      <div className="w-full fixed left-0 top-0 w-full min-h-[260px] h-[35%] max-h-[500px] bg-linear01"></div>
      <Header />
      <div className="w-full fixed left-0 bottom-0 rotate-180 w-full min-h-[260px] h-[35%] max-h-[500px] bg-linear01"></div>

      <div className="fixed left-0 bottom-[40px] w-full flex items-center justify-center">
        <div className="w-full max-w-[1400px] mx-auto px-[35px] flex items-center justify-between">
          <PlayMusic />
          <GetCard />
        </div>
      </div>
    </div>
  );
}

export default HomeView;
