const Triangle = ({ direction = "up" }) => {
  const rotateStyle = direction === "down" ? { transform: "rotate(-180deg)" } : {};

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={rotateStyle}>
      <path d="M7 10L12 15L17 10H7Z" fill="#333333" fill-opacity="0.68" />
    </svg>
  );
};

export default Triangle;
