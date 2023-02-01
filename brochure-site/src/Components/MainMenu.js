import React, { useState, useEffect, useRef } from "react";
import HamburgerBtn from "./HamburgerBtn";

import MenuItems from "./MenuItems";
import MobileMenu from "./MobileMenu";
import SocialMediaIcons from "./SocialMediaIcons";

function MainMenu(props) {
  //React event on screen size change,
  const [menuState, setMenuState] = useState(false);
  const [centerMenuButton, setCenterMenuButtons] = useState(false);

  console.log(props.screenWidthRef[0]);
  useEffect(() => {
    if (props.screenWidthRef[0] < 1440) {
      setCenterMenuButtons(true);
      setMenuState(false);
    } else {
      setCenterMenuButtons(false);
    }
  }, [props.screenWidthRef[0]]);

  const GetMenu = () => {
    if (props.screenWidthRef[0] >= 1440) {
      return <MenuItems />;
    } else {
      //return burger menu
      return <HamburgerBtn HandleMenuBtn={HandleMenuBtn} />;
    }
  };

  const GetSocials = () => {
    if (props.screenWidthRef[0] >= 1440) {
      return <SocialMediaIcons />;
    }
  };

  //Handles the burger meni icon
  const HandleMenuBtn = () => {
    console.log(menuState + " is the current state");
    setMenuState(!menuState);
  };

  const RenderMenu = () => {
    if (menuState && props.screenWidthRef[0] < 1440) {
      return <MobileMenu />;
    }
  };

  return (
    <div>
      <div className="flex mx-auto pt-4 md:justify-between max-w-[90%]">
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
                ? "text-center text-transparent font-rowdies text-6xl bg-gradient-to-r from-yellow-300 to-orange-400 md:text-7xl bg-clip-text"
                : "text-center text-transparent font-rowdies text-6xl md:text-7xl md:text-left bg-gradient-to-r from-yellow-300 to-orange-400  bg-clip-text inline-block"
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
      <div>{RenderMenu()}</div>
    </div>
  );
}

export default MainMenu;
