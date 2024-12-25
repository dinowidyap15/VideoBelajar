import React from "react";

const Input = (props) => {
  const { type, name } = props;
  return (
    <input
      type={type}
      className="font-lato w-full mt-2 h-12 px-4 border border-bg-border rounded-lg
     text-dark-1 focus:outline-none focus:ring-1 focus:ring-gr-300"
      name={name}
      id={name}
    />
  );
};

export default Input;
