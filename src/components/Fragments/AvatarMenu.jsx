import React from "react";
import { Link as RouterLink } from "react-router-dom";

const AvatarMenu = ({ activeMenu }) => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    window.location.reload();
  };

  return (
    <div className="hidden md:flex relative group">
      <button className="w-11 h-11">
        <img src="/avatar/nav-ava.png" alt="avatar" />
      </button>

      <div className="absolute top-[125%] right-0 w-52 bg-white shadow-lg rounded-lg pb-1 z-50 border border-bg-border invisible group-hover:visible transition-all duration-300">
        {[
          { label: "Beranda", to: "/home" },
          { label: "Profil Saya", to: "/profile" },
          { label: "Kelas Saya", to: "/classes" },
          { label: "Pesanan Saya", to: "/orders" },
        ].map((item) => (
          <RouterLink
            key={item.to}
            to={item.to}
            className={`flex font-lato font-bold text-md cursor-pointer border-b border-bg-border w-full py-4 pl-4 ${
              activeMenu === item.label
                ? "text-primary-400"
                : "text-dark-2 hover:text-primary-400"
            }`}
          >
            {item.label}
          </RouterLink>
        ))}

        <div
          onClick={handleLogout}
          className="flex flex-row font-lato font-semibold text-tertiary-400 hover:text-tertiary-300 border-b border-bg-border w-full py-4 pl-4 cursor-pointer"
        >
          Keluar
          <svg
            className="absolute inset-y-50 left-16 ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AvatarMenu;
