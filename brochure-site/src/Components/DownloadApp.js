import React from "react";
import AppleDownloadIcon from "./AppleDownloadIcon";
import GoogleDownloadIcon from "./GoogleDownloadIcon";

function DownloadApp(props) {
  return (
    <div className="h-screen w-[80%] mx-auto">
      <div className="mt-9 flex flex-col justify-around  text-3xl md:gap-3 md:flex-row">
        <div>
          <h1 className="md:text-5xl p-3 text-white bg-black p-2 text-center mix-blend-multiply">
            No Queuing
          </h1>
          <p className="text-base md:text-2xl mt-3 text-center">
            Order the night before and we will make sure it's ready the next
            day!
          </p>
        </div>
        <div>
          <h1 className="md:text-5xl p-3 text-white bg-black p-2 text-center mix-blend-multiply">
            Order & Collect
          </h1>
          <p className="text-base md:text-2xl mt-3 text-center">
            Order the night before and we will make sure it's ready the next
            day!
          </p>
        </div>
        <div>
          <h1 className="md:text-5xl p-3 text-white bg-black p-2 text-center mix-blend-multiply">
            Track Orders
          </h1>
          <p className="text-base md:text-2xl mt-3 text-center">
            Order the night before and we will make sure it's ready the next
            day!
          </p>
        </div>
      </div>
      <div className="flex mt-12 gap-20 flex-row justify-center md:gap-20">
        <AppleDownloadIcon />
        <GoogleDownloadIcon />
      </div>
    </div>
  );
}

export default DownloadApp;
