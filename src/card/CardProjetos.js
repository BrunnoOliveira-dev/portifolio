import React, { useState } from "react";
import BaseCard from "./BaseCard";

function CardProjetos({ title, resumo, image, linkGithub }) {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	const containerStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
		height: "100%",
		padding: "1rem",
		boxSizing: "border-box",
	};

	const imageStyle = {
		width: "100%",
		height: "70%",
		maxHeight: "160px",
		background: `url(${image}) no-repeat center center`,
		backgroundSize: "cover",
		borderRadius: "15px",
		marginTop: "0.5rem",
	};

	const titleStyle = {
		fontFamily: "Inter, sans-serif",
		fontSize: "1.25rem", // Aproximadamente 20px
		color: "#CBEAFB",
		marginTop: "1rem",
		marginBottom: "0.4rem",
		textAlign: "center",
	};

	const resumoStyle = {
		width: "90%",
		maxWidth: "350px",
		fontFamily: "Inter, sans-serif",
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: "1rem", // Aproximadamente 16px
		lineHeight: "1.5rem", // Aproximadamente 24px
		color: "#818189",
		textAlign: "center",
		margin: "0 auto",
	};

	const iconStyle = {
    marginTop: "auto",
		display: "flex",
		justifyContent: "center",
	};

	return (
		<BaseCard width={"400px"} height="380px">
			<div style={containerStyle}>
				<img src={image} style={imageStyle} alt="Imagem do projeto" />
				<div style={titleStyle}>{title}</div>
				<div style={resumoStyle}>
					{isExpanded ? resumo : `${resumo.slice(0, 100)}... `}
					{resumo.length > 100 && (
						<button
							onClick={toggleExpand}
							style={{
								background: "none",
								border: "none",
								color: "#00BFFF",
								cursor: "pointer",
								textDecoration: "underline",
							}}
						>
							{isExpanded ? "menos" : "mais"}
						</button>
					)}
				</div>
				<div style={iconStyle}>
					<a href={linkGithub} target="_blank" rel="noopener noreferrer">
						<img
							src="https://img.icons8.com/?size=100&id=62856&format=png&color=ffffff"
							alt="GitHub"
							style={{ width: "35px" }}
						/>
					</a>
				</div>
			</div>
		</BaseCard>
	);
}

export default CardProjetos;
