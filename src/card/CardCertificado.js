import React from "react";
import BaseCard from "./BaseCard";

function CardCertificado({ title, resumo, image, data, link }) {
	const containerStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		height: "100%",
		backgroundColor: "#191B1F",
		borderRadius: "20px",
		padding: "1.5rem",
		boxSizing: "border-box",
	};

	const imageStyle = {
		width: "500px",
		height: "330px",
		background: `url(${image}) no-repeat center center`,
		backgroundSize: "cover",
		borderRadius: "10px",
	};

	const textContainerStyle = {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "0.5rem",
	};

	const titleStyle = {
		fontFamily: "Inter, sans-serif",
		fontSize: "24px",
		color: "#CBEAFB",
		textAlign: "center",
		margin: "0.5rem 0",
	};

	const resumoStyle = {
		fontFamily: "Inter, sans-serif",
		fontSize: "16px",
		lineHeight: "1.5",
		color: "#818189",
		textAlign: "center",
		margin: "0.5rem 0",
	};

	const containerDataLinkStyle = {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		flexWrap: "wrap",

		gap: "15rem",
	};

	const dateStyle = {
		fontFamily: "Inter, sans-serif",
		fontSize: "16px",
		lineHeight: "1.5",
		color: "#FFFFFF",
		textAlign: "center",
		margin: "0.5rem 0",
	};

	const linkStyle = {
		fontFamily: "Inter, sans-serif",
		fontSize: "16px",
		color: "#FFFFFF",
		textDecoration: "underline",
		textAlign: "center",
		margin: "0.5rem 0",
	};

	return (
		<BaseCard width={550} height={530}>
			<div style={containerStyle}>
				<div style={imageStyle}></div>
				<div style={textContainerStyle}>
					<div style={titleStyle}>{title}</div>
					<div style={resumoStyle}>{resumo}</div>
					<div style={containerDataLinkStyle}>
						<a href={link} style={linkStyle}>
							Link do certificado
						</a>
						<div style={dateStyle}>{data}</div>
					</div>
				</div>
			</div>
		</BaseCard>
	);
}

export default CardCertificado;
