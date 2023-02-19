import React from "react";
import AppleDownloadIcon from "./AppleDownloadIcon";
import GoogleDownloadIcon from "./GoogleDownloadIcon";

function DownloadApp(props) {
  return (
    <div
      className="h-screen w-full align-middle bg-lime-100 pt-12 my-auto"
      id="download"
    >
      <div className="w-[80%] h-full m-auto justify-center flex flex-col">
        <div>
          <h1 className="text-5xl text-wrap font-hand text-center mx-auto md:text-8xl">
            <p className="px-4">Download Our App</p>
          </h1>
        </div>

        <div className="flex flex-col justify-around h-auto pt-6 text-3xl md:gap-3 md:flex-row ">
          <div className="mt-3">
            <h1 className="p-3 text-white bg-black p-2 text-center mix-blend-multiply md:text-5xl">
              No Queuing
            </h1>
            <p className="text-base md:text-2xl mt-3 text-center">
              Just walk right in, show us your order number and voila!
            </p>
          </div>
          <div className="mt-3">
            <h1 className="md:text-5xl p-3 text-white bg-black p-2 text-center mix-blend-multiply">
              Order & Collect
            </h1>
            <p className="text-base md:text-2xl mt-3 text-center">
              Order the night before and we will make sure it's ready the next
              day!
            </p>
          </div>
          <div className="mt-3">
            <h1 className="md:text-5xl p-3 text-white bg-black p-2 text-center mix-blend-multiply">
              Track Orders
            </h1>
            <p className="text-base md:text-2xl mt-3 text-center">
              No tracking reward cards, its all done via our app!
            </p>
          </div>
        </div>
        <div className="flex mt-12 gap-1 flex-row justify-center md:gap-20">
          <AppleDownloadIcon />
          <GoogleDownloadIcon />
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
