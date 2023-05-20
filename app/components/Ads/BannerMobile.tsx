"use client";
import { useEffect, useRef } from "react";

export default function BannerMobile(): JSX.Element {
  const banner = useRef<HTMLDivElement>(null);

  const atOptions = {
    key: "6b05f266697f202c91c0180d28fa19a9",
    format: "iframe",
    height: 320,
    width: 50,
    params: {},
  };

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.appendChild(conf);
      banner.current.appendChild(script);
    }
  }, [banner]);

  return <div className="bg-green-400" ref={banner}></div>;
}
