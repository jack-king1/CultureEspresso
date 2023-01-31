import React from "react";
import ChickenHeader from "../Photos/chicken_0.jpg"; // relative path to image
import Banner from "../Photos/banner_1.jpg"; // relative path to image
import UilStar from "@iconscout/react-unicons/icons/uil-star";

function MainContent() {
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
          <div class>
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
    </div>

    //Highlighted Menu Items

    //Deals

    //Testimonials

    //Contact
  );
}

export default MainContent;
