import React from "react";

function OpeningTimes() {
  return (
    <div
      className={`h-screen w-full bg-barista bg-no-repeat bg-stretch bg-cover bg-fixed align-middle`}
    >
      <div className="w-[50%] h-full m-auto mb-9 flex flex-col justify-center">
        <h1 className="md:text-5xl bg-white p-2 text-center mix-blend-screen">
          Opening Times
        </h1>
        <div className="pt-2 flex flex-col text-white md:text-3xl lg:text-5xl">
          <div className="flex justify-between">
            <div>Monday</div>
            <div className="">08:00 - 19:00</div>
          </div>
          <div className="pt-2 flex justify-between">
            <div>Tuesday</div>
            <div className="">08:00 - 19:00</div>
          </div>
          <div className="pt-2 flex justify-between">
            <div>Wednesday</div>
            <div className="">08:00 - 17:00</div>
          </div>
          <div className="pt-2 flex justify-between">
            <div>Thursday</div>
            <div className="">08:00 - 19:00</div>
          </div>
          <div className="pt-2 flex justify-between">
            <div>Friday</div>
            <div className="">08:00 - 19:00</div>
          </div>
          <div className="pt-2 flex justify-between">
            <div>Saturday</div>
            <div className="">09:00 - 18:00</div>
          </div>
          <div className="pt-2 flex justify-between">
            <div>Sunday</div>
            <div>CLOSED</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpeningTimes;
