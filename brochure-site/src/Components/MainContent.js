import React, { useState, useEffect } from "react";
import ChickenHeader from "../Photos/chicken_0.jpg"; // relative path to image
import Banner from "../Photos/banner_1.jpg"; // relative path to image
import Banner2 from "../Photos/banner_2.jpg"; // relative path to image
import Menu0 from "../Photos/menu_banner_1.jpg"; // relative path to image
import Menu1 from "../Photos/menu_banner_2.jpg"; // relative path to image
import UilStar from "@iconscout/react-unicons/icons/uil-star";
import "../Animations/slideshow.css"; // relative path to image

function MainContent(props) {
  const [slideshowHeight, setSlideshowHeight] = useState(["32rem"]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const remSizes = ["[32rem]", "[28rem]", "[16rem]", "[8rem]"];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  useEffect(() => {
    if (props.screenWidthRef[0] > 1240) {
      setSlideshowHeight(remSizes[0]);
      console.log("slideshow height: 0");
    } else if (props.screenWidthRef[0] <= 1240) {
      setSlideshowHeight(remSizes[1]);
      console.log("slideshow height: 1");
    }
  }, [props.screenWidthRef[0]]);

  return (
    //Hero Icon/Banner Image
    <div>
      <img className="w-[100%] mt-8 rounded" src={Banner} alt="chicken" />
      <div className="text-center md:w-[50%] mx-auto mt-12">
        <h1 className="font-rowdies font-bold mt-8 text-5xl items-center text-orange-500 ">
          Welcome to Goldenbird!
        </h1>
        <p className="text-xl mt-12 text-white">
          We've been serving <b>sizzling hot</b>, <b>succulent</b>,{" "}
          <b>freshly fried golden chicken wings since 1998</b> - our{" "}
          <b>secret recipe of blended herbs and spices</b> means our customers
          just cant get enough of our perfected <b>golden nuggets!</b> Come
          experience our <b>welcoming hospitality</b> and our{" "}
          <b>unforgettable chicken</b>!
        </p>

        <div className="mt-8">
          <div>
            <div className="flex justify-center">
              <UilStar color="gold" size={40} />
              <UilStar color="gold" size={40} />
              <UilStar color="gold" size={40} />
              <UilStar color="gold" size={40} />
              <UilStar color="gold" size={40} />
            </div>
            <h1 className="text-lg font-bold text-white">
              Join us today for a 5 Star Experience!
            </h1>
          </div>
        </div>
      </div>
      <img className="w-[100%] mt-8 rounded" src={Banner2} alt="chicken" />
      <div className="text-center">
        <h1 className="font-rowdies font-bold mt-8 text-5xl items-center text-white">
          Popular Items
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-xl mx-auto">
          <div className="h-64 bg-gray-300">1</div>
          <div className="h-64 bg-gray-300">2</div>
          <div className="h-64 bg-gray-300">3</div>
          <div className="h-64 bg-gray-300">4</div>
          <div className="h-64 bg-gray-300 hidden md:block">5</div>
          <div className="h-64 bg-gray-300 hidden md:block">6</div>
        </div>
      </div>
    </div>

    //Highlighted Menu Items

    //Deals

    //Testimonials

    //Contact
  );
}

export default MainContent;
