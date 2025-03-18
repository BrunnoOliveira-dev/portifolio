import React from "react";

const BaseCard = ({ children, width, height }) => {
  const cardStyle = {
    width: `${width}px`,
    height: `${height}px`,
    background: "#191B1F",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
  };

  return <div style={cardStyle}>{children}</div>;
};

export default BaseCard;