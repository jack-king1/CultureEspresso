import React, { useState, useEffect, useRef } from "react";
import BrowserDetector from "./Components/BrowserDetector";
import MainContent from "./Components/MainContent";
import MainMenu from "./Components/MainMenu";

function App() {
  let [screenWidthRef, setScreenWidth] = useState(window.innerWidth);
  const [browser, setBrowser] = useState("");
  function handleDetectBrowser(detectedBrowser) {
    setBrowser(detectedBrowser);
  }

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-w-md mx-auto">
      <BrowserDetector onDetectBrowser={handleDetectBrowser}>
        {/* <div>
          {browser === "Chrome" && <div>You're using Google Chrome!</div>}
          {browser === "Safari" && <div>You're using Apple Safari!</div>}
          {browser === "Edge" && <div>You're using Microsoft Edge!</div>}
          {browser === "Firefox" && <div>You're using Mozilla Firefox!</div>}
          {browser !== "Chrome" &&
            browser !== "Safari" &&
            browser !== "Edge" &&
            browser !== "Firefox" && (
              <div>You're using a different browser!</div>
            )}
        </div> */}
      </BrowserDetector>
      <MainContent screenWidthRef={[screenWidthRef, setScreenWidth]} />
    </div>
  );
}

export default App;
