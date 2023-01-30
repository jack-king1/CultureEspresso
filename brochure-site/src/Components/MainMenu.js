import React, { useState, useEffect, useRef } from "react";
import HamburgerBtn from "./HamburgerBtn";

import MenuItems from "./MenuItems";
import SocialMediaIcons from "./SocialMediaIcons";

function MainMenu() {
  //React event on screen size change,
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuState, setMenuState] = useState(false);
  const [centerMenuButton, setCenterMenuButtons] = useState(false);
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 1440) {
      setCenterMenuButtons(true);
    } else {
      setCenterMenuButtons(false);
    }
  }, [screenWidth]);

  const GetMenu = () => {
    if (screenWidth >= 1440) {
      return <MenuItems />;
    } else {
      //return burger menu
      return <HamburgerBtn HandleMenuBtn={HandleMenuBtn} />;
    }
  };

  const GetSocials = () => {
    if (screenWidth >= 1440) {
      return <SocialMediaIcons />;
    }
  };

  //Handles the burger meni icon
  const HandleMenuBtn = () => {
    console.log(menuState + " is the current state");
    setMenuState(!menuState);
  };

  return (
    <div className="flex mx-auto pt-4 md:justify-between max-w-[80%]">
      <div
        className={
          centerMenuButton
            ? "flex-grow items-center justify-end"
            : "md:flex-grow items-center md:flex-1"
        }
      >
        <h1
          className={
            centerMenuButton
              ? "text-center text-yellow-300 font-rowdies text-5xl md:text-6xl"
              : "text-center text-yellow-300 font-rowdies text-5xl md:text-6xl md:text-left"
          }
        >
          Goldenbird
        </h1>
      </div>
      <nav
        className={
          centerMenuButton
            ? "flex justify-end space-x-2 items-center"
            : "flex justify-end space-x-2 md:justify-center md:flex-1 items-center"
        }
      >
        {GetMenu()}
      </nav>
      {GetSocials()}
    </div>
  );
}

export default MainMenu;
