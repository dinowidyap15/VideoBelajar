import React, { useState } from "react";

const FloatingLabelInput = ({
  label = "",
  id = "floating-input",
  type = "text",
  value,
  onChange,
  width = "w-full",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute -top-3 left-4 bg-white px-1 text-md ${
          isFocused ? "text-primary-400" : "text-dark-2"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`${width} rounded-xl border border-bg-border py-3 px-5 text-dark-1 focus:outline-none focus:ring-1 focus:ring-primary-400`}
      />
    </div>
  );
};

export default FloatingLabelInput;
