import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "../Elements/Button";

const MobileNav = ({ openNavigation, isLoggedIn, toggleNavigation, activeMenu }) => {
  if (!openNavigation) return null;

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    window.location.reload();
  };

  const menuItems = [
    { to: "/home", label: "Beranda" },
    { to: "/category", label: "Kategori" },
    ...(isLoggedIn
      ? [
          { to: "/orders", label: "Profil Saya" },
          { to: "/classes", label: "Kelas Saya" },
          { to: "/orders", label: "Pesanan Saya" },
        ]
      : []),
  ];

  return (
    <div className="absolute flex flex-col items-end w-full pb-1 text-dark-2 bg-white z-50 transition-all duration-300 md:hidden shadow-lg rounded-lg">
      {menuItems.map((item, index) => (
        <RouterLink
          key={index}
          to={item.to}
          onClick={toggleNavigation}
          className={`flex font-lato font-bold text-md cursor-pointer border-t border-bg-border w-full py-4 pl-4 ${activeMenu === item.label ? "text-primary-400 hover:text-primary-500" : "text-dark-2 hover:text-gr-700"}`}
        >
          {item.label}
        </RouterLink>
      ))}

      {isLoggedIn ? (
        <div
          onClick={() => {
            toggleNavigation();
            handleLogout();
          }}
          className="flex flex-row font-lato font-semibold text-tertiary-400 hover:text-tertiary-500 border-y border-bg-border w-full py-4 pl-4 cursor-pointer"
        >
          Keluar
          <div className="absolute inset-y-50 left-16 pl-2 text-tertiary-400 hover:text-tertiary-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" />
            </svg>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full p-4 border-t border-bg-border">
          <RouterLink to="/login">
            <Button variant="primary" btn={1} size="text-md" height="h-11" onClick={toggleNavigation}>
              Login
            </Button>
          </RouterLink>
          <RouterLink to="/register">
            <Button variant="primary" btn={3} size="text-md" height="h-11" onClick={toggleNavigation}>
              Register
            </Button>
          </RouterLink>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
