import React from "react";
import UilFacebook from "@iconscout/react-unicons/icons/uil-facebook";

function MainMenu() {
  return (
    <div>
      <nav class="flex justify-center space-x-4">
        <a
          href="/Home"
          class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </a>
        <a
          href="/About"
          class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          About
        </a>
        <a
          href="/Contact"
          class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Contact
        </a>
        <a
          href="/Menu"
          class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        >
          Contact
        </a>
      </nav>
      <div className="">
        <UilFacebook size="80" color="#61d" />
      </div>
    </div>
  );
}

export default MainMenu;
