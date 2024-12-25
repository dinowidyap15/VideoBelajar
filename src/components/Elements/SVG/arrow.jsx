const DropdownArrow = ({ direction = "down" }) => {
  const rotateStyle = direction === "right" ? { transform: "rotate(-90deg)" } : {};

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={rotateStyle}>
      <g clipPath="url(#clip0_8210_1881)">
        <path d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z" fill="#3A3541" fillOpacity="0.38" />
      </g>
      <defs>
        <clipPath id="clip0_8210_1881">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DropdownArrow;
