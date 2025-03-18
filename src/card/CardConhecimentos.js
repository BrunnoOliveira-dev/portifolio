import React from "react";
import BaseCard from "./BaseCard";

function CardConhecimentos({ title, nivel, resumo }) {
	const containerStyle = {
		display: "flex",
		alignItems: "center",
		width: "100%",
		height: "100%",
		padding: "0 1.5rem",
	};

	const leftStyle = {
		width: "97px",
		textAlign: "center",
		color: "#FFFFFF",
		fontSize: "22px",
		lineHeight: "29px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};

	const rightContainerStyle = {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		paddingLeft: "1rem",
	};

	const rightStyle = {
		color: "#FFFFFF",
		fontSize: "13px",
		lineHeight: "24px",
		width: "calc(100% - 2rem)",
	};

	const nivelStyle = {
		color: "#FFFFFF",
		fontSize: "18px",
		lineHeight: "29px",
		marginBottom: "5px",
	};

	return (
		<BaseCard width={700} height={90}>
			<div style={containerStyle}>
				<div style={leftStyle}>{title}</div>
				<div style={rightContainerStyle}>
					<div style={nivelStyle}>{nivel}</div>
					<div style={rightStyle}>{resumo}</div>
				</div>
			</div>
		</BaseCard>
	);
}

export default CardConhecimentos;
