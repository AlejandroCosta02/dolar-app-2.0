"use client";
import { useEffect, useState } from "react";
import BannerMobile from "./BannerMobile";
import Banner from "./Banner";

interface WindowSize {
  width: number;
}

function AdsDisplay() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
  });

  useEffect(() => {
    // Update windowSize state when the window is resized
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowSize.width < 768;

  return (
    <>
      <div className="">{isMobile ? <BannerMobile /> : <Banner />}</div>
    </>
  );
}

export default AdsDisplay;
