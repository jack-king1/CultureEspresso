import React from "react";
import UilBars from "@iconscout/react-unicons/icons/uil-bars";

function HamburgerBtn({ HandleMenuBtn }) {
  return (
    <div>
      <UilBars
        onClick={() => HandleMenuBtn()}
        size="30"
        className="hover:cursor-pointer"
      />
    </div>
  );
}

export default HamburgerBtn;