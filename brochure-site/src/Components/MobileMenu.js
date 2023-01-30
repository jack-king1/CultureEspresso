import React from "react";

function MobileMenu() {
  return (
    <ul className="items-center text-center mt-6">
      <li>
        <a
          href="/Home"
          className=" font-medium text-md px-3 text-slate-700 rounded-lg hover:bg-yellow-200 hover:text-slate-900"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/About"
          className="font-medium text-md px-3 text-slate-700 rounded-lg hover:bg-yellow-200 hover:text-slate-900"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="/Contact"
          className="font-medium text-md px-3 text-slate-700 rounded-lg hover:bg-yellow-200 hover:text-slate-900"
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="/Menu"
          className="font-medium text-md px-3 text-slate-700 rounded-lg hover:bg-yellow-200 hover:text-slate-900"
        >
          Menu
        </a>
      </li>
    </ul>
  );
}

export default MobileMenu;
