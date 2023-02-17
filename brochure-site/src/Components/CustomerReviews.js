import React from "react";
import UilStar from "@iconscout/react-unicons/icons/uil-star";

function CustomerReviews(props) {
  return (
    <div className="bg-white h-screen w-screen bg-lime-100 pt-9 flex flex-col">
      <div className="mt-9 flex flex-col  justify-around h-full w-[80%] mx-auto">
        <h1 className="text-6xl font-hand text-center mx-auto md:text-8xl">
          What our customers are saying!
        </h1>
        <div className="text-center md:text-3xl font-poppins">
          "Amazing service with amazing people!"
          <p className="text-xl">- Peter -</p>
          <div className="flex justify-center">
            <UilStar color="#fd0" size="35" />
            <UilStar color="#fd0" size="35" />
            <UilStar color="#fd0" size="35" />
            <UilStar color="#fd0" size="35" />
            <UilStar color="#fd0" size="35" />
          </div>
        </div>
        <div className="text-center md:text-3xl font-poppins ">
          "I love just working on my laptop, so many sockets and the wifi is
          awesome fast!"
          <p className="text-xl">- Lucy -</p>
          <div className="flex justify-center">
            <UilStar color="#fd0" size="35" />
            <UilStar color="#fd0" size="35" />
            <UilStar color="#fd0" size="35" />
            <UilStar color="#fd0" size="35" />
            <UilStar color="#fd0" size="35" />
          </div>
        </div>
        <div className="text-center md:text-3xl font-poppins ">
          "Best coffee i have had for a long time, the cakes arn't bad either!"
          <p className="text-xl">- Elaine -</p>
          <div className="flex justify-center">
            <UilStar color="#fd0" size="35" />
            <UilStar color="#fd0" size="35" />
            <UilStar color="#fd0" size="35" />
            <UilStar color="#fd0" size="35" />
            <UilStar color="#fd0" size="35" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
