"use client";
import { useEffect, useRef } from "react";

export default function NativeBanner(): JSX.Element {
  const banner = useRef<HTMLDivElement>(null);

  const atOptions = {
    key: "ee868c39a310de5e6146c48562b216d7",
    format: "iframe",
    height: 250,
    width: 300,
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
