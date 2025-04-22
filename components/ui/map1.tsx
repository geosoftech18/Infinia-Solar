"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    simplemaps_countrymap: {
      load: () => void;
      mapdata: any;
    };
  }
}

const SimpleMapsComponent = () => {
  const [isReady, setIsReady] = useState(false);

  // This runs after both script files have loaded
  const handleScriptsReady = () => {
    if (window.simplemaps_countrymap) {
      window.simplemaps_countrymap.load();
      setIsReady(true);
    }
  };

  return (
    <>
      {/* Load Scripts first */}
      <Script
        src="/map/mapdata.js"
        strategy="afterInteractive"
        onLoad={handleScriptsReady}
      />
      <Script
        src="/map/countrymap.js"
        strategy="afterInteractive"
        onLoad={handleScriptsReady}
      />

      {/* Show map after scripts are ready */}
      <div id="map" style={{ width: "100%", height: "400px" }}>
        {!isReady && <p>Loading map...</p>}
      </div>
    </>
  );
};

export default SimpleMapsComponent;
