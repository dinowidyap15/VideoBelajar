import React from "react";

const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="flex items-center gap-1 font-lato font-regular text-dark-2 sm:text-md text-sm">
      {children} <span className="font-poppins text-red-500">*</span>
    </label>
  );
};

export default Label;
