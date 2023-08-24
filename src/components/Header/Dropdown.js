/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Dropdown = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <button
        id="dropdownDefaultButton"
        class="font-medium inline-flex items-center hover:text-gray-500"
        type="button"
        onClick={toggleDropdown}
      >
        Shop
        <svg
          class="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {showDropdown && (
        <div className="absolute top-14 bg-white rounded-lg shadow w-44">
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

export default Dropdown;
