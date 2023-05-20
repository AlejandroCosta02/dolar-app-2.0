"use client";
import { useEffect, useState } from "react";
import BannerMobile from "./BannerMobile";
import Banner from "./Banner";

interface WindowSize {
  width: number;
}

export default function AdsDisplay(): JSX.Element {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    // Add event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = typeof window !== "undefined" && windowSize.width < 640;

  return (
    <>
      <div className="">{isMobile ? <BannerMobile /> : <Banner />}</div>
    </>
  );
}
