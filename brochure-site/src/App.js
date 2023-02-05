import React, { useState, useEffect, useRef } from "react";
import MainContent from "./Components/MainContent";
import MainMenu from "./Components/MainMenu";

function App() {
  let [screenWidthRef, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-w-md mx-auto">
      <MainMenu
        screenWidthRef={[screenWidthRef, setScreenWidth]}
        className=""
      ></MainMenu>
      <MainContent screenWidthRef={[screenWidthRef, setScreenWidth]} />
    </div>
  );
}

export default App;
