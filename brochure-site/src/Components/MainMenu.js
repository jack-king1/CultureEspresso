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

  const DesktopMenu = () => {
    return (
      <div className="rounded p-4">
        <div className="flex justify-between items-center">
          <div className=" text-left md:text-center">Order Now</div>
          <div className=" text-left md:text-center">Locations</div>
          <div className="w-2/5 md:w-1/2 text-center">
            <img src={Logo} alt="Logo" className="px-4" />
          </div>
          <div className=" text-right md:text-center">About Us</div>
          <div className=" text-right md:text-center">Gift Cards</div>
        </div>
      </div>
    );
  };

  const MobileMenu = () => {
    return (
      <div>
        <div className="flex mt-4">
          <div className="w-3/5 text-center justify-center items-center mx-auto">
            <img src={Logo} alt="Logo" className="px-4" />
          </div>
        </div>
        <div className="rounded p-4 mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-left md:text-center">Order Now</div>
            <div className="text-left md:text-center">Locations</div>
            <div className="text-right md:text-center">About Us</div>
            <div className="text-right md:text-center">Gift Cards</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative text-white">
      <img src={CoffeeShop} className="w-full h-screen object-cover" />
      <div className="absolute inset-0 flex justify-center">
        {props.screenWidthRef[0] > 768 ? DesktopMenu() : MobileMenu()}
      </div>
    </div>
  );
}

export default MainMenu;
