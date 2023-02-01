import React, { useState, useEffect } from "react";
import ChickenHeader from "../Photos/chicken_0.jpg"; // relative path to image
import Banner from "../Photos/banner_1.jpg"; // relative path to image
import Banner2 from "../Photos/banner_2.jpg"; // relative path to image
import Menu0 from "../Photos/menu_banner_1.jpg"; // relative path to image
import Menu1 from "../Photos/menu_banner_2.jpg"; // relative path to image
import UilStar from "@iconscout/react-unicons/icons/uil-star";
import "../Animations/slideshow.css"; // relative path to image

function MainContent(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);
  return (
    //Hero Icon/Banner Image
    <div>
      <img className="w-[100%] mt-8 rounded" src={Banner} alt="chicken" />
      <div className="text-center md:w-[50%] mx-auto mt-12">
        <h1 className="font-rowdies font-bold mt-8 text-5xl items-center ">
          Welcome to Goldenbird!
        </h1>
        <p className="text-xl mt-12">
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
            <h1 className="text-lg font-bold">
              Join us today for a 5 Star Experience!
            </h1>
          </div>
        </div>
      </div>
      <img className="w-[100%] mt-8 rounded" src={Banner2} alt="chicken" />
      <div className="text-center">
        <h1 className="font-rowdies font-bold mt-8 text-5xl items-center ">
          -Menu-
        </h1>
        <div className="hidden md:block md:relative h-[32rem] overflow-hidden">
          <div className="flex absolute top-0 left-0 w-full">
            <div className="relative w-full">
              <div
                className={`absolute top-0 left-0 w-full h-full min-h-fit  ${
                  currentSlide === 0 ? "slide-in-left" : "slide-out-right"
                }`}
              >
                <img className="mt-8 rounded" src={Menu0} alt="chicken" />
              </div>
              <div
                className={`absolute top-0 left-0 w-full h-full min-h-fit ${
                  currentSlide === 1 ? "slide-in-left" : "slide-out-right"
                }`}
              >
                <img className="mt-8 rounded" src={Menu1} alt="chicken" />
              </div>
              <div
                className={`absolute top-0 left-0 w-full h-full min-h-fit ${
                  currentSlide === 2 ? "slide-in-left" : "slide-out-right"
                }`}
              >
                <img className="mt-8 rounded" src={Menu0} alt="chicken" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>HELLO WORLD</h1>
    </div>

    //Highlighted Menu Items

    //Deals

    //Testimonials

    //Contact
  );
}

export default MainContent;
