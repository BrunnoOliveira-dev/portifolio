import React from "react";

const BaseCard = ({ children, width, height }) => {
	const cardStyle = {
		borderRadius: "8px",
		padding: "0.5rem",
    
		backgroundColor: "#2D3139", // 24272D, 191B1F, #2D3139

		width: `${width}px`,
		height: `${height}px`,
	};

	return <div style={cardStyle}>{children}</div>;
};

export default BaseCard;
