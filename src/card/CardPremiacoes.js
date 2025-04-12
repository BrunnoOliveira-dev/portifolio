import React from "react";
import BaseCard from "./BaseCard";

function CardPremiacoes({ medal, date, title, description, icon }) {
	const containerStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		height: "100%",
		padding: "0.8rem",
		boxSizing: "border-box",
		borderRadius: "15px",
		transition: "transform 0.3s ease, box-shadow 0.3s ease",
		cursor: "pointer",
	};

	const iconStyle = {
		width: "72px",
		height: "72px",
		borderRadius: "50%",
		padding: "0.4rem",
		boxShadow: "0 0 0 4px #CBEAFB, 0 0 10px rgba(0, 0, 0, 0.5)",
		marginBottom: "1rem",
		transition: "transform 0.3s ease",
	};

	const medalStyle = {
		fontFamily: "'Roboto', sans-serif",
		fontSize: "1.28rem",
		fontWeight: "bold",
		color: "#FFD700",
		textTransform: "uppercase",
		letterSpacing: "1.5px",
		marginBottom: "0.5rem",
		textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
	};

	const titleStyle = {
		textAlign: "center",
		fontFamily: "'Roboto', sans-serif",
		fontSize: "1.2rem",
		fontWeight: "bold",
		color: "#CBEAFB",
		marginBottom: "0.5rem",
		textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
	};

	const descriptionStyle = {
		width: "72%",
		fontFamily: "'Roboto', sans-serif",
		fontSize: "0.8rem",
		color: "#A9A9A9",
		maxWidth: "240px",
		marginBottom: "1rem",
		textAlign: "center",
	};

	const dateStyle = {
		fontFamily: "'Roboto', sans-serif",
		fontSize: "0.72rem",
		color: "#FFFFFF",
		fontStyle: "italic",
		textAlign: "center",
	};

	const handleMouseEnter = (e) => {
		e.currentTarget.style.transform = "scale(1.05)";
		e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.4)";
	};

	const handleMouseLeave = (e) => {
		e.currentTarget.style.transform = "scale(1)";
		e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
	};

	return (
		<BaseCard
			width={240}
			height={280}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div style={containerStyle}>
				<img src={icon} alt="Ícone de premiação" style={iconStyle} />
				<div style={medalStyle}>{medal}</div>
				<div style={titleStyle}>{title}</div>
				<div style={descriptionStyle}>{description}</div>
				<div style={dateStyle}>{date}</div>
			</div>
		</BaseCard>
	);
}

export default CardPremiacoes;
