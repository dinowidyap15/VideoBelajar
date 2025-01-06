import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "../Elements/Button";
import { Logo, HamMenu, XMenu } from "../Elements/SVG";
import AvatarMenu from "./AvatarMenu";
import MobileNav from "./MobileNav";

const Header = (props) => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [openAvatar, setOpenAvatar] = useState(false);
  const { 
    showCategory = true, 
    showAvatar = true, 
    showButton = true, 
    showHamMenu = true,
    categoryColor = "text-dark-2",
    categoryHover = "hover:text-gr-700",
  } = props;

  const toggleNavigation = () => setOpenNavigation(!openNavigation);
  const toggleAvatar = () => setOpenAvatar(!openAvatar);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/category") {
      setActiveMenu("Kategori");
    } else if (currentPath === "/home") {
      setActiveMenu("Beranda");
    }
  }, [window.location.pathname]);

  return (
    <div id="header" className="relative w-full md:h-[80px] h-[74px] bg-white md:border-b bg-bg-border md:shadow-transparent shadow-lg">
      <div className="flex items-center justify-between md:py-4 py-6 xl:px-32 lg:px-20 md:px-16 px-8">
        <RouterLink
          to="/home" 
          smooth={true} 
          duration={10} 
          className="cursor-pointer md:w-48 w-36 h-auto">
          <Logo />
        </RouterLink>

        <div className="hidden md:flex gap-4">
          <RouterLink to="/category" 
            className={`font-lato font-bold text-md ${categoryColor} ${categoryHover} ${showCategory ? "visible" : "invisible"} pt-2.5`}
          >
            Kategori
          </RouterLink>
          {isLoggedIn && showAvatar ? (
            <AvatarMenu 
              openAvatar={openAvatar} 
              toggleAvatar={toggleAvatar} 
              activeMenu={activeMenu}
            />
          ) : (
            <div className={`flex gap-4 ${showCategory ? "visible" : "invisible"}`}>
              <RouterLink to="/login">
                <Button variant="primary" btn={1}>Login</Button>
              </RouterLink>
              <RouterLink to="/register">
                <Button variant="primary"  btn={3}>Register</Button>
              </RouterLink>
            </div>
          )}
        </div>

        {showHamMenu && (
          <button onClick={toggleNavigation} className="md:hidden">
            {openNavigation ? <XMenu /> : <HamMenu />}
          </button>
        )}
      </div>

      <MobileNav
        openNavigation={openNavigation}
        isLoggedIn={isLoggedIn}
        showCategory={showCategory}
        showButton={showButton}
        toggleNavigation={toggleNavigation}
        activeMenu={activeMenu}
      />
    </div>
  );
};

export default Header;
