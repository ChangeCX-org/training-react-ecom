/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Cart from "./CartIcon";
import Profile from "./UserIcon";
import Menu from "./Menu";

const Navbar = () => (
  <div class="font-roboto lg:text-sm text-xs">
    <nav class="relative w-full items-center justify-between mb-5 ">
      <div class="flex lg:gap-46 md:gap-44 gap-20">
        <Logo />
        <div class="hidden md:flex items-center lg:gap-9 mt-3 gap-7">
          <Dropdown />
          <a href="" class="hover:text-gray-500">
            Most Wanted
          </a>
          <a href="" class="hover:text-gray-500">
            New Arrivals
          </a>
          <a href="" class="hover:text-gray-500">
            Brands
          </a>
        </div>
        <div class="hidden md:flex items-center lg:gap-9 gap-5 mt-3">
          <SearchBar />
          <Cart />
          <Profile />
        </div>
      </div>
      <Menu />
    </nav>
  </div>
);

export default Navbar;
