import React, { useEffect, useState } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isChrome,
  isEdge,
  isFirefox,
  isOpera,
  isSafari,
} from "react-device-detect";

function BrowserDetector(props) {
  const [browser, setBrowser] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    let tempBrowser = "";

    if (isChrome) {
      tempBrowser = "Chrome";
    } else if (isEdge) {
      tempBrowser = "Edge";
    } else if (isOpera) {
      tempBrowser = "Opera";
    } else if (isFirefox) {
      tempBrowser = "Firefox";
    } else if (isSafari) {
      tempBrowser = "Safari";
    }

    setBrowser(tempBrowser);
    props.onDetectBrowser(tempBrowser);
  }, []);

  return <>{props.children}</>;
}

export default BrowserDetector;
