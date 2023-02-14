import React, { useState, useEffect, useRef } from "react";
import CoffeeShop from "../Photos/coffee-shop.jpg";
import Logo from "../Photos/logo.png";
import SocialMediaIcons from "./SocialMediaIcons";
import UilBars from "@iconscout/react-unicons/icons/uil-bars";
import UilX from "@iconscout/react-unicons/icons/uil-x";

function MainMenu(props) {
  //React event on screen size change,
  const [menuState, setMenuState] = useState(false);
  const [centerMenuButton, setCenterMenuButtons] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [menuSelected, setMenuSelected] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight * 0.8) {
        setSticky(true);
        console.log(window.innerHeight);
        console.log("sticky true");
      } else {
        console.log("sticky false");
        setSticky(false);
      }
    };
    console.log(
      "page offset: " +
        window.pageYOffset +
        " window innherHeight: " +
        window.innerHeight
    );
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const DesktopMenu = () => {
    if (sticky) {
      return GetStickyMenu();
    } else {
      return (
        <div className="rounded p-4">
          <div className="flex justify-between items-center text-white">
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
    }
  };
  //${sticky ? "sticky top-0" : ""}
  const MobileMenu = () => {
    if (sticky) {
      return GetStickyMenu();
    } else {
      return (
        <div>
          <div className="flex mt-4 bg-fixed">
            <div className="w-3/5 text-center justify-center items-center mx-auto">
              <img src={Logo} alt="Logo" className="px-4" />
            </div>
          </div>
          +
          <SocialMediaIcons size={props} />
          <div className="rounded p-4 mx-auto text-white ">
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
    }
  };

  const MobileMenuOverlay = () => {
    if (menuSelected) {
      //Overlay for menu with close arrow
      return (
        <div className="bg-blacktrans h-screen w-screen fixed top-0 left-0 flex">
          <ul className="items-center m-auto text-white text-center text-3xl">
            <li className="mb-3">Order Now</li>
            <li className="mb-3">Locations</li>
            <li className="mb-3">About Us</li>
            <li>Gift Cards</li>
          </ul>
        </div>
      );
    }
  };

  const GetMobileMenuIcon = () => {
    if (menuSelected) {
      return (
        <UilX
          className="hover:cursor-pointer m-auto z-1000"
          size={"30"}
          color="#fff"
        />
      );
    } else {
      return (
        <UilBars
          className="hover:cursor-pointer m-auto z-1000"
          size={"30"}
          color="#fff"
        />
      );
    }
  };

  const GetStickyMenu = () => {
    console.log("sticky should be rendered!");
    //Desktopo
    if (props.screenWidthRef[0] > 768) {
      return (
        <div className="fixed p-6 h-16 inset-0 top-0 bg-black drop-shadow-2xl align-middle text-white drop">
          <div className="w-[80%] flex justify-around mx-auto">
            <div>
              <a>Order Now</a>
            </div>
            <div>
              <a>Locations</a>
            </div>
            <div>
              <a>About Us</a>
            </div>
            <div>
              <a>Gift Cards</a>
            </div>
          </div>
        </div>
      );
    }
    //Mobile
    else {
      return (
        <div
          className="fixed mt-6 ml-6 w-12 h-10 inset-0 top-0 bg-black align-middle"
          onClick={() => setMenuSelected(!menuSelected)}
        >
          <div className="flex mx-auto my-auto h-full">
            {GetMobileMenuIcon()}
            {MobileMenuOverlay()}
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className={`h-screen w-full bg-cafeheader bg-no-repeat bg-stretch bg-cover bg-fixed`}
    >
      <div className="inset-0 flex justify-center top-0">
        {props.screenWidthRef[0] > 768 ? DesktopMenu() : MobileMenu()}
      </div>
    </div>
  );
}

export default MainMenu;
