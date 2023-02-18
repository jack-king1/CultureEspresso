import React, { useState, useEffect } from "react";
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

function MainContent(props) {
  return (
    <div>
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
