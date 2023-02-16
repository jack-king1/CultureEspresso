import React, { useState, useEffect } from "react";
import UilStar from "@iconscout/react-unicons/icons/uil-star";
import "../Animations/slideshow.css"; // relative path to image
import SlateMenu from "./SlateMenu";
import Wood from "../Photos/wood.jpg";
import CustomerReviews from "./CustomerReviews";
import OpeningTimes from "./OpeningTimes";
import DownloadApp from "./DownloadApp";

function MainContent(props) {
  return (
    <div>
      <div className="bg-white h-screen w-screen bg-lime-50 pt-9 flex flex-col">
        <h1 className="text-6xl font-hand text-center mx-auto md:text-8xl">
          What our customers are saying!
        </h1>
        <CustomerReviews props={props} />
      </div>
      <OpeningTimes />
      <div className="bg-white h-screen w-screen bg-lime-50 pt-9 flex flex-col">
        <h1 className="text-5xl text-wrap font-hand text-center mx-auto md:text-8xl">
          <p className="px-4">Download Our App</p>
        </h1>
        <DownloadApp props={props} />
      </div>
    </div>
  );
}

export default MainContent;
