import React from "react";
import BaseCard from "./BaseCard";

function CardPremiacoes({ medal, date, title, description, icon }) {
	const containerStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
		height: "100%",
		padding: "0.6rem",
		boxSizing: "border-box",
	};

	const iconStyle = {
		width: "70px",
		height: "70px",
		borderRadius: "50%",
		boxShadow: "0 0 0 3px #CBEAFB, 0 0 0 5px transparent", // Adiciona um espaço de 2px entre a borda e a imagem
		marginBottom: "1rem",
	};

	const medalStyle = {
		fontFamily: "Inter",
		fontSize: "22px",
		fontWeight: "bold",
		color: "#FFD700",
		textTransform: "uppercase",
		letterSpacing: "1px",
		marginBottom: "0.5rem",
	};

	const titleStyle = {
		textAlign: "center",
		fontFamily: "Inter",
		fontSize: "14px",
		fontWeight: "bold",
		color: "#CBEAFB",
		marginBottom: "1rem",
	};

	const descriptionStyle = {
		width: "90%",
		fontFamily: "Inter",
		fontSize: "12px",
		lineHeight: "20px",
		color: "#A9A9A9",
		maxWidth: "300px",
		marginBottom: "1rem",
	};

	const dateStyle = {
		fontFamily: "Inter",
		fontSize: "16px",
		color: "#FFFFFF",
		fontStyle: "italic",
	};

	return (
		<BaseCard width={270} height={310}>
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
