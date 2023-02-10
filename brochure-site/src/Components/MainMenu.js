import React, { useState, useEffect, useRef } from "react";
import CoffeeShop from "../Photos/coffee-shop.jpg";
import Logo from "../Photos/logo.png";
import SocialMediaIcons from "./SocialMediaIcons";

function MainMenu(props) {
  //React event on screen size change,
  const [menuState, setMenuState] = useState(false);
  const [centerMenuButton, setCenterMenuButtons] = useState(false);
  //console.log(props);
  const DesktopMenu = () => {
    return (
      <div className="rounded p-4">
        <div className="flex justify-between items-center">
          <div className="text-left md:text-center hover:pointer-cursor">
            <a href="https://www.google.com">Order Now</a>
          </div>
          <div className="text-left md:text-center hover:pointer-cursor">
            <a href="https://www.google.com">Locations</a>
          </div>
          <div className="w-2/5 md:w-1/2 text-center">
            <img src={Logo} alt="Logo" className="px-4" />
            <SocialMediaIcons size={props} />
          </div>
          <div className="text-left md:text-center hover:pointer-cursor">
            <a href="https://www.google.com">About Us</a>
          </div>
          <div className="text-left md:text-center hover:pointer-cursor">
            <a href="https://www.google.com">Gift Cards</a>
          </div>
        </div>
      </div>
    );
  };

  const MobileMenu = () => {
    return (
      <div>
        <div className="flex mt-4 bg-fixed">
          <div className="w-3/5 text-center justify-center items-center mx-auto">
            <img src={Logo} alt="Logo" className="px-4" />
          </div>
        </div>

        <SocialMediaIcons size={props} />
        <div className="rounded p-4 mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-left md:text-center hover:pointer-cursor">
              <a href="https://www.google.com">Order Now</a>
            </div>
            <div className="text-left md:text-center">Locations</div>
            <div className="text-right md:text-center">About Us</div>
            <div className="text-right md:text-center">Gift Cards</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="text-white h-screen w-full bg-cafeheader bg-no-repeat bg-stretch bg-cover bg-fixed">
      <div className="absolute inset-0 flex justify-center">
        {props.screenWidthRef[0] > 768 ? DesktopMenu() : MobileMenu()}
      </div>
    </div>
  );
}

export default MainMenu;
