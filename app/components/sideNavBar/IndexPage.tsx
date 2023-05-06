"use client";

import React, { useState, useRef, useEffect } from "react";
import RedButton from "./RedButton";
import Navbar from "./Navbar";

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex flex-col h-auto mx-auto items-center pt-3">
      <RedButton onClick={handleButtonClick} />
      <Navbar navRef={navRef} isOpen={isOpen} />
    </div>
  );
};

export default IndexPage;
