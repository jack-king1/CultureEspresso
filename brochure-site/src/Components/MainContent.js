import React, { useState, useEffect, useRef, forwardRef } from "react";
import UilStar from "@iconscout/react-unicons/icons/uil-star";
import "../Animations/slideshow.css"; // relative path to image
import SlateMenu from "./SlateMenu";
import Wood from "../Photos/wood.jpg";
import CustomerReviews from "./CustomerReviews";
import OpeningTimes from "./OpeningTimes";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Map from "./Map";
import MainMenu from "./MainMenu";

function MainContent(props) {
  const orderRef = useRef(null);
  const handleScrollToOrder = () => {
    orderRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const locationRef = useRef(null);
  const handleScrollToLocation = () => {
    locationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const aboutRef = useRef(null);
  const handleScrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <MainMenu
        screenWidthRef={props.screenWidthRef}
        browser={props.browser}
        handleScrollToLocation={handleScrollToLocation}
      />
      <CustomerReviews props={props} />
      <OpeningTimes />
      <DownloadApp props={props} />
      <Gallery />
      <Map />
      <Footer />
    </div>
  );
}

export default MainContent;
