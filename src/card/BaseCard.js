import React from "react";

const BaseCard = ({ children, width, height = "auto" }) => {
	const cardStyle = {
		width: width, // Use largura relativa (por padrão, 100%)
		height: height, // Altura ajustável (por padrão, auto)
		background: "#191B1F",
		borderRadius: "20px",
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
		transition: "box-shadow 1s ease-in-out, background 0.3s ease-in-out",

	};

	const cardHoverStyle = {
		background: "#2F3540", // Gradiente azul ao passar o mouse
	};

	return (
		<div
			style={cardStyle}
			className="base-card"
			onMouseEnter={(e) => {
				Object.assign(e.currentTarget.style, cardHoverStyle);
			}}
			onMouseLeave={(e) => {
				Object.assign(e.currentTarget.style, cardStyle);
			}}
		>
			{children}
		</div>
	);
};

export default BaseCard;
