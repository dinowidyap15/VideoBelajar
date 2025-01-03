import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../Elements/SVG/logo";
import HamMenu from "../Elements/SVG/ham";
import XMenu from "../Elements/SVG/x";
import Button from "../Elements/Button";

const Header = (props) => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);
  const {
    showCategory = true,
    showAvatar = true,
    showButton = true,
    showHamMenu = true,
    categoryColor = "text-dark-2",
    categoryHover = "hover:text-gr-700",
    berandaColor = "text-dark-2",
    berandaHover = "hover:text-gr-700",
  } = props;

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const toggleAvatar = () => {
    setOpenAvatar(!openAvatar);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    window.location.reload();
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <div
      id="header"
      className={`relative w-full md:h-[80px] bg-white md:border-b md:border-bg-border md:shadow-transparent shadow-lg 
        transition-all duration-300 ease-in-out h-[74px]`}
    >
      <div className="flex items-center justify-between md:py-4 py-6 xl:px-32 lg:px-20 md:px-16 px-8">
        <RouterLink
        to="/home" 
        smooth={true} 
        duration={10} 
        className="cursor-pointer md:w-48 w-36 h-auto">
          <Logo />
        </RouterLink>

        <div className="items-center gap-4 hidden md:flex">
          {isLoggedIn ? (
            <>
              <RouterLink 
              to="/category" 
              smooth={true} 
              duration={10} 
              className={`font-lato font-bold text-md ${categoryColor} ${categoryHover} cursor-pointer 
              ${showCategory ? "visible" : "invisible"}`}>
                Kategori
              </RouterLink>

              <div className="hidden md:flex">
                <button onClick={toggleAvatar} 
                className={`cursor-pointer w-11 h-11 ${showAvatar ? "visible" : "invisible"}`}>
                  <img src="/avatar/nav-ava.png" alt="avatar" />
                </button>
                {openAvatar && (
                  <div className="absolute top-[94%] xl:right-32 lg:right-20 md:right-16 right-8 w-52 bg-white shadow-lg rounded-lg
                   pb-1 z-50 border border-bg-border">
                    <RouterLink
                      to="/home"
                      smooth={true}
                      duration={10}
                      onClick={() => setOpenNavigation(false)}
                      className={`flex font-lato font-bold text-md ${berandaColor} ${berandaHover} cursor-pointer 
                        ${showCategory ? "visible" : "invisible"} border-b border-bg-border w-full py-4 pl-4`}
                    >
                      Beranda
                    </RouterLink>
                    <LinkScroll
                      to="addcard"
                      smooth={true}
                      duration={10}
                      onClick={() => setOpenAvatar(false)}
                      className="flex font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer border-b border-bg-border w-full py-4 pl-4"
                    >
                      Profil Saya
                    </LinkScroll>
                    <LinkScroll
                      to="addcard"
                      smooth={true}
                      duration={10}
                      onClick={() => setOpenAvatar(false)}
                      className="flex font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer border-b border-bg-border w-full py-4 pl-4"
                    >
                      Kelas Saya
                    </LinkScroll>
                    <LinkScroll
                      to="addcard"
                      smooth={true}
                      duration={10}
                      onClick={() => setOpenAvatar(false)}
                      className="flex font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer border-b border-bg-border w-full py-4 pl-4"
                    >
                      Pesanan Saya
                    </LinkScroll>
                    <LinkScroll
                      to="addcard"
                      smooth={true}
                      duration={10}
                      onClick={() => setOpenAvatar(false)}
                      className="flex font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer border-b border-bg-border w-full py-4 pl-4"
                    >
                      Tambah Kelas Baru
                    </LinkScroll>
                    {isLoggedIn && (
                      <div onClick={handleLogout} 
                      className="flex flex-row font-lato font-semibold text-tertiary-400 hover:text-tertiary-500 border-b border-bg-border w-full py-4 pl-4 cursor-pointer">
                        Keluar
                        <div className="absolute inset-y-50 left-16 pl-2 text-tertiary-400 hover:text-tertiary-500">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <RouterLink
                to="/category"
                smooth={true}
                duration={10}
                onClick={() => setOpenNavigation(false)}
                className={`font-lato font-bold text-md ${categoryColor} ${categoryHover} cursor-pointer 
              ${showCategory ? "visible" : "invisible"}`}
              >
                Kategori
              </RouterLink>

              <RouterLink
                to="/login"
                className={`font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer 
                ${showButton ? "visible" : "invisible"}`}
              >
                <Button variant="primary" btn={1}>
                  Login
                </Button>
              </RouterLink>

              <RouterLink
                to="/register"
                className={`font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer 
                ${showButton ? "visible" : "invisible"}`}
              >
                <Button variant="primary" btn={3}>
                  Register
                </Button>
              </RouterLink>
            </>
          )}
        </div>

        <div className="md:hidden flex">
          <button onClick={toggleNavigation} className={`focus:outline-none ${showHamMenu ? "visible" : "invisible"}`}>
            {openNavigation ? <XMenu /> : <HamMenu />}
          </button>
        </div>
      </div>

      <div
        className={`absolute flex flex-col items-end w-full pb-1 bg-white z-50 transition-all duration-300 md:hidden shadow-lg rounded-lg
        ${openNavigation ? "block" : "hidden"}`}
      >
        {isLoggedIn ? (
          <>
          <RouterLink
              to="/home"
              smooth={true}
              duration={10}
              onClick={() => setOpenNavigation(false)}
              className={`font-lato font-bold text-md ${berandaColor} ${berandaHover} cursor-pointer 
                ${showCategory ? "visible" : "invisible"} border-y border-bg-border w-full py-4 pl-4`}
            >
              Beranda
            </RouterLink>
          <RouterLink
              to="/category"
              smooth={true}
              duration={10}
              onClick={() => setOpenNavigation(false)}
              className={`font-lato font-bold text-md ${categoryColor} ${categoryHover} cursor-pointer 
                ${showCategory ? "visible" : "invisible"} border-b border-bg-border w-full py-4 pl-4`}
            >
              Kategori
            </RouterLink>
            <LinkScroll 
            to="addcard" 
            smooth={true} 
            duration={10} 
            onClick={() => setOpenNavigation(false)}
            className="flex font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer border-b border-bg-border w-full py-4 pl-4"
            >
              Profil Saya
            </LinkScroll>
            <LinkScroll 
            to="addcard" 
            smooth={true} 
            duration={10} 
            onClick={() => setOpenNavigation(false)}
            className="flex font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer border-b border-bg-border w-full py-4 pl-4"
            >
              Kelas Saya
            </LinkScroll>
            <LinkScroll 
            to="addcard" 
            smooth={true} 
            duration={10} 
            onClick={() => setOpenNavigation(false)}
            className="flex font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer border-b border-bg-border w-full py-4 pl-4"
            >
              Pesanan Saya
            </LinkScroll>
            <LinkScroll 
            to="addcard" 
            smooth={true} duration={10} 
            onClick={() => setOpenNavigation(false)} 
            className="flex font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer border-b border-bg-border w-full py-4 pl-4"
            >
              Tambah Kelas Baru
            </LinkScroll>
          </>
        ) : (
          <>
            <RouterLink
              to="/home"
              smooth={true}
              duration={10}
              onClick={() => setOpenNavigation(false)}
              className={`font-lato font-bold text-md ${berandaColor} ${berandaHover} cursor-pointer 
                ${showCategory ? "visible" : "invisible"} border-y border-bg-border w-full py-4 pl-4`}
            >
              Beranda
            </RouterLink>
            <RouterLink
              to="/category"
              smooth={true}
              duration={10}
              onClick={() => setOpenNavigation(false)}
              className={`font-lato font-bold text-md ${categoryColor} ${categoryHover} cursor-pointer 
                ${showCategory ? "visible" : "invisible"} border-b border-bg-border w-full py-4 pl-4`}
            >
              Kategori
            </RouterLink>
            <RouterLink to="/login" className={`${showButton ? "visible" : "invisible"} w-full pt-4 pb-2 px-4`}>
              <Button variant="primary" btn={1} size="text-md" height="h-11">
                Login
              </Button>
            </RouterLink>

            <RouterLink to="/register" className={`${showButton ? "visible" : "invisible"} w-full pb-4 px-4`}>
              <Button variant="primary" btn={3} size="text-md" height="h-11">
                Register
              </Button>
            </RouterLink>
          </>
        )}
        {isLoggedIn && (
          <div onClick={handleLogout} 
          className="flex flex-row font-lato font-semibold text-tertiary-400 hover:text-tertiary-500 
          border-b border-bg-border w-full py-4 pl-4 cursor-pointer">
            Keluar
            <div className="absolute inset-y-50 left-16 pl-2 text-tertiary-400 hover:text-tertiary-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"/>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;