/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div class="md:hidden flex items-center justify-end mb-2">
      <button class="outline-none mobile-menu-button" onClick={toggleMenu}>
        <svg
          class="w-6 h-6 text-gray-500 -mt-6"
          x-show="!showMenu"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      {showMenu && (
        <div className="absolute top-12 right-0 bg-white rounded-lg shadow">
          <ul className="py-2 px-5 space-y-3">
            <li>
              <a href="#" className="block hover:text-blue-500 px-5 py-3">
                Item 1
              </a>
            </li>
            <li className="border-t border-gray-200">
              <a href="#" className="block hover:text-blue-500 px-5 py-3">
                Item 2
              </a>
            </li>
            <li className="border-t border-gray-200">
              <a href="#" className="block hover:text-blue-500 px-5 py-3">
                Item 3
              </a>
            </li>
            <li className="border-t border-gray-200">
              <a href="#" className="block hover:text-blue-500 px-5 py-3">
                Item 4
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
