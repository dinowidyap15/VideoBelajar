import React from "react";
import Logo from "../Elements/SVG/logo";

const Nav = () => {
  return (
    <div
      className="relative flex items-center justify-between py-3 xl:px-32 lg:px-20 md:px-16 md:h-[80px] 
    h-[74px] px-8 bg-white md:border-b md:border-bg-border md:shadow-transparent shadow-lg"
    >
      <div href="#" class="logo cursor-pointer md:w-48 w-36 h-auto">
        <Logo />
      </div>

      <div className="items-center gap-6 hidden md:flex">
        <a className="font-lato font-bold text-md text-dark-2 hover:text-gr-700">Kategori</a>
        <div className="nav-avatar cursor-pointer w-11 h-11">
          <img src="/avatar/nav-ava.png" alt="avatar" />
        </div>
      </div>
      <div className="md:hidden flex">
        <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10.5V12.5H20V10.5H0ZM0 5.5V7.5H20V5.5H0ZM0 0.5V2.5H20V0.5H0Z" fill="#4A505C" />
        </svg>
      </div>
    </div>
  );
};

export default Nav;
