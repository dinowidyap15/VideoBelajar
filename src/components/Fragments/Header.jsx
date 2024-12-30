import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import Logo from "../Elements/SVG/logo";
import HamMenu from "../Elements/SVG/ham";
import XMenu from "../Elements/SVG/x";
import Button from "../Elements/Button";

const Header = (props) => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const { showCategory = true, showAvatar = true, showButton = true, showHamMenu = true } = props;

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    alert("Logout berhasil!");
    window.location.reload();
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <div
      id="header"
      className={`relative w-full md:h-[80px] bg-white md:border-b md:border-bg-border md:shadow-transparent shadow-lg 
        transition-all duration-300 ease-in-out ${openNavigation ? "h-auto" : "h-[74px]"}`}
    >
      <div className="flex items-center justify-between md:py-4 py-6 xl:px-32 lg:px-20 md:px-16 px-8">
        <LinkScroll to="header" smooth={true} duration={10} className="cursor-pointer md:w-48 w-36 h-auto">
          <Logo />
        </LinkScroll>

        <div className="items-center gap-4 hidden md:flex">
          {isLoggedIn ? (
            <>
              <LinkScroll to="collection" smooth={true} duration={10} className={`font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer ${showCategory ? "visible" : "invisible"}`}>
                Kategori
              </LinkScroll>

              <div className={`cursor-pointer w-11 h-11 ${showAvatar ? "visible" : "invisible"}`}>
                <img src="/avatar/nav-ava.png" alt="avatar" />
              </div>

              <LinkScroll to="addcard" smooth={true} duration={10} className="font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer">
                <Button variant="primary" btn={1}>
                  Tambah Kelas Baru
                </Button>
              </LinkScroll>
            </>
          ) : (
            <>
              <LinkScroll to="collection" smooth={true} duration={10} onClick={() => setOpenNavigation(false)} className={`font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer ${showCategory ? "visible" : "invisible"}`}>
                Kategori
              </LinkScroll>

              <RouterLink to="/login" className={`font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer ${showButton ? "visible" : "invisible"}`}>
                <Button variant="primary" btn={1}>
                  Login
                </Button>
              </RouterLink>

              <RouterLink to="/register" className={`font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer ${showButton ? "visible" : "invisible"}`}>
                <Button variant="primary" btn={3}>
                  Register
                </Button>
              </RouterLink>
            </>
          )}
          {isLoggedIn && (
            <Button variant="primary" btn={3} width={1 / 2} onClick={handleLogout}>
              Logout
            </Button>
          )}
        </div>

        <div className="md:hidden flex">
          <button onClick={toggleNavigation} className={`focus:outline-none ${showHamMenu ? "visible" : "invisible"}`}>
            {openNavigation ? <XMenu /> : <HamMenu />}
          </button>
        </div>
      </div>

      <div className={`flex flex-col items-end gap-4 px-8 pt-4 pb-6 transition-all duration-300 md:hidden ${openNavigation ? "block" : "hidden"}`}>
        {isLoggedIn ? (
          <>
            <LinkScroll to="collection" smooth={true} duration={10} onClick={() => setOpenNavigation(false)} className={`font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer ${showCategory ? "visible" : "invisible"}`}>
              Kategori
            </LinkScroll>

            <div className={`cursor-pointer w-11 h-11 ${showAvatar ? "visible" : "invisible"}`}>
              <img src="/avatar/nav-ava.png" alt="avatar" />
            </div>

            <LinkScroll to="addcard" smooth={true} duration={10} onClick={() => setOpenNavigation(false)} className="font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer">
              <Button variant="primary" btn={1}>
                Tambah Kelas Baru
              </Button>
            </LinkScroll>
          </>
        ) : (
          <>
            <LinkScroll to="collection" smooth={true} duration={10} onClick={() => setOpenNavigation(false)} className={`font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer ${showCategory ? "visible" : "invisible"}`}>
              Kategori
            </LinkScroll>

            <RouterLink to="/login" className={`font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer ${showButton ? "visible" : "invisible"}`}>
              <Button variant="primary" btn={1}>
                Login
              </Button>
            </RouterLink>

            <RouterLink to="/register" className={`font-lato font-bold text-md text-dark-2 hover:text-gr-700 cursor-pointer ${showButton ? "visible" : "invisible"}`}>
              <Button variant="primary" btn={3}>
                Register
              </Button>
            </RouterLink>
          </>
        )}
        {isLoggedIn && (
          <Button variant="primary" btn={3} width={1 / 2} onClick={handleLogout}>
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
