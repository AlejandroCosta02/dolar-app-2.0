"use client";
import { useEffect, useRef } from "react";

export default function BannerMobile(): JSX.Element {
  const banner = useRef<HTMLDivElement>(null);

  const atOptions = {
    key: "6e92e211818fe85acd7dcc8f21a591ab",
    format: "iframe",
    height: 60,
    width: 468,
    params: {},
  };

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.profitabledisplaynetwork.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.appendChild(conf);
      banner.current.appendChild(script);
    }
  }, [banner]);

  return <div className="" ref={banner}></div>;
}
