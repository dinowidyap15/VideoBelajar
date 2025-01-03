import React from "react";

const Button = (props) => {
  const { variant, 
    btn = "button",
    children, 
    onClick = () => {},
    className, 
    disabled = false,
    size = 'text-sm',
    margin = 'mt-0',
    display = 'inline-block',
    height = 'md:h-11 h-9',
    width = 'w-full' } = props;

  const baseClass = `font-lato font-semibold border-2 transition duration-400 ${height} 
  md:px-6 px-2 md:text-md ${size} ${margin} rounded-xl ${display} cursor-pointer ${width} z-10`;

  const variants = {
    primary: [
      "bg-primary-400 text-white border-primary-400 hover:bg-primary-500 hover:border-primary-500",
      "bg-primary-50 text-primary-400 border-primary-50 hover:bg-primary-100 hover:border-primary-100",
      "bg-white text-primary-400 border-primary-400 hover:bg-gr-100 hover:border-primary-500",
    ],
    secondary: [
      "bg-secondary-400 text-white border-secondary-400 hover:bg-secondary-500 hover:border-secondary-500",
      "bg-secondary-50 text-secondary-400 border-secondary-50 hover:bg-secondary-100 hover:border-secondary-100",
      "bg-white text-secondary-400 border-secondary-400 hover:bg-gr-100 hover:border-secondary-500",
    ],
  };

  const classes = `${baseClass} ${variants[variant][btn - 1]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  return (
    <button 
      className={classes} 
      type={btn}
      onClick={onClick} 
      disabled={disabled}>
        {children}
    </button>
  );
};


export default Button;