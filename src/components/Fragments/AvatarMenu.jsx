import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const AvatarMenu = ({ openAvatar, toggleAvatar, activeMenu }) => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    window.location.reload();
  };

  return (
    <div className="hidden md:flex">
      <button onClick={toggleAvatar} className="w-11 h-11">
        <img src="/avatar/nav-ava.png" alt="avatar" />
      </button>
      {openAvatar && (
        <div className="absolute top-[94%] xl:right-32 lg:right-20 md:right-16 right-8 w-52 bg-white shadow-lg rounded-lg pb-1 z-50 border border-bg-border">
          {[
            { label: "Beranda", to: "/home" },
            { label: "Profil Saya", to: "profile" },
            { label: "Kelas Saya", to: "classes" },
            { label: "Pesanan Saya", to: "orders" },
          ].map((item) => (
            <RouterLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={10}
              onClick={toggleAvatar}
              className={`flex font-lato font-bold text-md cursor-pointer border-b border-bg-border w-full py-4 pl-4 ${activeMenu === item.label ? "text-primary-400 hover:text-primary-500" : "text-dark-2 hover:text-gr-700"}`}
            >
              {item.label}
            </RouterLink>
          ))}

          <div
            onClick={() => {
              toggleAvatar();
              handleLogout();
            }}
            className="flex flex-row font-lato font-semibold text-tertiary-400 hover:text-tertiary-500 border-b border-bg-border w-full py-4 pl-4 cursor-pointer"
          >
            Keluar
            <div className="absolute inset-y-50 left-16 pl-2 text-tertiary-400 hover:text-tertiary-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
