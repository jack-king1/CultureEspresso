import React, { useState, useEffect, useRef } from "react";
import Coffee from "../Photos/coffee-temp.png";

function SlateMenu() {
  return (
    <div className="w-[75%] h-auto bg-zinc-900 mx-auto text-white rounded-3xl drop-shadow-2xl">
      <p className="text-6xl text-center pt-2 font-hand">Popular Items</p>
      <div className="flex flex-col justify-around pt-8 md:flex-row ">
        <div className="w-full md:w-1/2 p-4 flex justify-between items-center ">
          <div>
            <img
              src={Coffee}
              className="h-[8rem] w-[8rem] m-h-[8rem] m-w-[8rem]"
            />
          </div>
          <div className="text-center">
            <p className="font-hand text-3xl text-right md:text-md lg:text-3xl xl:text-6xl">
              Vanilla Latte
            </p>
            <p className="font-hand text-xl text-right md:text-4xl">£3.49</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-between items-center md:mr-8">
          <div>
            <img
              src={Coffee}
              className="h-[8rem] w-[8rem] m-h-[8rem] m-w-[8rem]"
            />
          </div>
          <div className="text-center">
            <p className="font-hand text-3xl text-right md:text-md lg:text-3xl xl:text-6xl">
              Mocha
            </p>
            <p className="font-hand text-xl text-right md:text-4xl">£3.49</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around pt-8 md:flex-row ">
        <div className="w-full md:w-1/2 p-4 flex justify-between items-center md:mr-8">
          <div>
            <img
              src={Coffee}
              className="h-[8rem] w-[8rem] m-h-[8rem] m-w-[8rem]"
            />
          </div>
          <div className="text-center">
            <p className="font-hand text-3xl text-right md:text-md lg:text-3xl xl:text-6xl">
              Jasmine Tea
            </p>
            <p className="font-hand text-xl text-right md:text-4xl">£4.69</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-between items-center md:mr-8">
          <div className="">
            <img src={Coffee} className="h-[8rem] w-[8rem]" />
          </div>
          <div className="text-center">
            <p className="font-hand text-3xl text-right md:text-md lg:text-3xl xl:text-6xl">
              Salted Caramel Frappe
            </p>
            <p className="font-hand text-xl text-right md:text-4xl">£6.29</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlateMenu;
