import React, { useState, useRef, useEffect } from "react";
import { Triangle } from "../SVG";

const Select = ({ label, onClick, isOpen, children }) => {
  const dropdownRef = useRef(null);
  const [dropdownState, setDropdownState] = useState(isOpen || false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex justify-end z-40 ml-auto" ref={dropdownRef}>
      <button
        onClick={() => {
          const newState = !dropdownState;
          setDropdownState(newState);
          if (onClick) onClick(newState);
        }}
        className="flex flex-row px-4 py-3 gap-2 w-full bg-white hover:bg-gr-100 text-dark-2 border border-bg-border rounded-xl active:bg-gr-200"
      >
        {label}
        <span>{dropdownState ? <Triangle direction="down" /> : <Triangle />}</span>
      </button>

      {dropdownState && <div className="absolute right-0 mt-14 w-full bg-white border text-dark-2 border-bg-border rounded-xl shadow-lg cursor-pointer">{children}</div>}
    </div>
  );
};

export default Select;
