import React, { useState, useEffect } from "react";
import UilStar from "@iconscout/react-unicons/icons/uil-star";
import "../Animations/slideshow.css"; // relative path to image
import SlateMenu from "./SlateMenu";
import Wood from "../Photos/wood.jpg";
import CustomerReviews from "./CustomerReviews";

function MainContent(props) {
  return (
    <div className="bg-white h-screen w-screen bg-lime-50 pt-9 flex flex-col">
      <h1 className="text-6xl font-hand text-center mx-auto md:text-8xl">
        What our customers are saying!
      </h1>
      <CustomerReviews props={props} />
    </div>
  );
}

export default MainContent;
