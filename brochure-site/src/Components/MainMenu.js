import React, { useState, useEffect, useRef } from "react";
import HamburgerBtn from "./HamburgerBtn";
import CoffeeShop from "../Photos/coffee-shop.jpg";
import Logo from "../Photos/logo.png";
import MenuItems from "./MenuItems";
import SocialMediaIcons from "./SocialMediaIcons";

function MainMenu(props) {
  //React event on screen size change,
  const [menuState, setMenuState] = useState(false);
  const [centerMenuButton, setCenterMenuButtons] = useState(false);

  return (
    <div className="relative text-white">
      <img src={CoffeeShop} className="w-full object-cover" />
      <div className="absolute inset-0 flex justify-center">
        <div className="rounded p-4 shadow-md">
          <div className="flex flex-wrap justify-center items-center">
            <div className="md:w-1/4 text-left md:text-center">Option 1</div>
            <div className="w-2/5 md:w-1/2 text-center">
              <img src={Logo} alt="Logo" className="px-4" />
            </div>
            <div className="md:w-1/4 text-right md:text-center">Option 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
