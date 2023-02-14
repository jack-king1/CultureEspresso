import React from "react";
import UilStar from "@iconscout/react-unicons/icons/uil-star";

function CustomerReviews(props) {
  return (
    <div className="mt-9 flex flex-col justify-around h-full w-[50%] mx-auto">
      <div className="text-center md:text-3xl font-poppins">
        "Amazing service with amazing people!"
        <p className="text-xl">Peter</p>
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
        <p className="text-xl">Lucy</p>
        <div className="flex justify-center">
          <UilStar color="#fd0" size="35" />
          <UilStar color="#fd0" size="35" />
          <UilStar color="#fd0" size="35" />
          <UilStar color="#fd0" size="35" />
          <UilStar size="35" />
        </div>
      </div>
      <div className="text-center md:text-3xl font-poppins ">
        "Best coffee i have had for a long time, the cakes arn't bad either! :p"
        <p className="text-xl">Elaine</p>
        <div className="flex justify-center">
          <UilStar color="#fd0" size="35" />
          <UilStar color="#fd0" size="35" />
          <UilStar color="#fd0" size="35" />
          <UilStar color="#fd0" size="35" />
          <UilStar color="#fd0" size="35" />
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
