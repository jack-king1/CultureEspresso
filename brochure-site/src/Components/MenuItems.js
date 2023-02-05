import React from "react";

function MenuItems() {
  return (
    <div>
      <a
        href="/Home"
        className="font-medium text-xl px-3 py-2 text-orange-500 rounded-lg hover:bg-yellow-200 hover:text-black-900"
      >
        Home
      </a>
      <a
        href="/About"
        className="font-medium text-xl px-3 py-2 text-orange-500 rounded-lg hover:bg-yellow-200 hover:text-black-900"
      >
        About
      </a>
      <a
        href="/Contact"
        className="font-medium text-xl px-3 py-2 text-orange-500 rounded-lg hover:bg-yellow-200 hover:text-black-900"
      >
        Contact
      </a>
      <a
        href="/Menu"
        className="font-medium text-xl px-3 py-2 text-orange-500 rounded-lg hover:bg-yellow-200 hover:text-black-900"
      >
        Menu
      </a>
    </div>
  );
}

export default MenuItems;
