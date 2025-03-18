import React from "react";
import BaseCard from "./BaseCard";

function CardProjetos({ title, resumo, image, linkGithub }) {
	const containerStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
		height: "100%",
	};

	const imageStyle = {
		width: "370px",
		height: "160px",
		background: `url(${image}) no-repeat center center`,
		borderRadius: "15px",
		marginTop: "1rem",
	};

	const rightContainerStyle = {
		// flex: 1,
		// display: "flex",
		// flexDirection: "column",
		// paddingLeft: "1rem",
	};

	const titleStyle = {
		fontFamily: "Inter",
		fontSize: "20px",
		color: "#CBEAFB",
		marginTop: "1rem",
		marginBottom: "0.4rem",
		textAlign: "center",
	};

	const resumoStyle = {
		width: "350px",
		fontFamily: "Inter",
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: "16px",
		lineHeight: "24px",
		color: "#818189",
	};

	const iconStyle = {
		display: "flex",
		justifyContent: "center",
		marginTop: "1rem",
	};

	return (
		<BaseCard width={400} height={350}>
			<div style={containerStyle}>
				<img src={image} style={imageStyle} alt="Imagem do projeto" />

				<div style={titleStyle}>{title}</div>
				<div style={resumoStyle}>{resumo}</div>
				<div style={resumoStyle}>
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
			</div>
		</BaseCard>
	);
}

export default CardProjetos;
