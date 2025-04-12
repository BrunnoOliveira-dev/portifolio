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
		padding: "0.8rem",
		boxSizing: "border-box",
		cursor: "pointer", // Adicionado cursor de ponteiro para indicar que o card é clicável
	};

	const imageStyle = {
		width: "100%",
		height: "184px",
		background: `url(${image}) no-repeat center center`,
		backgroundSize: "cover",
		borderRadius: "15px",
	};

	const titleStyle = {
		fontFamily: "Inter, sans-serif",
		fontSize: "1.16rem",
		color: "#CBEAFB",
		marginTop: "1rem",
		marginBottom: "0.5rem",
		textAlign: "center",
	};

	const resumoStyle = {
		width: "100%",
		maxWidth: "280px",
		fontFamily: "Inter, sans-serif",
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: "0.96rem",
		color: "#818189",
		textAlign: "center",
	};

	// const iconStyle = {
    // 	marginTop: "auto",
	// 	display: "flex",
	// 	justifyContent: "center",
	// };

	const handleCardClick = () => {
		window.open(linkGithub, "_blank");
	};

	return (
		<a href={linkGithub} target="_blank" rel="noopener noreferrer">

		<BaseCard
			width={"440px"}
			height="368px"
			paddingSize="0.5rem"
			onClick={handleCardClick} // Adicionado evento de clique no card
		>
			{/* Adicionando o efeito de hover no cartão */}
			<div style={containerStyle}>
				<img src={image} style={imageStyle} alt="Imagem do projeto" />
				<div style={titleStyle}>{title}</div>
				<div style={resumoStyle}>
					{resumo}
					{/* {isExpanded ? resumo : `${resumo.slice(0, 100)}... `}
					{resumo.length > 200 && (
						<button
							onClick={(e) => {
								e.stopPropagation(); // Impede que o clique no botão acione o evento do card
								toggleExpand();
							}}
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
					)} */}
				</div>
				{/* <div style={iconStyle}>
					<a href={linkGithub}>
						<img
							src="https://img.icons8.com/?size=100&id=62856&format=png&color=ffffff"
							alt="GitHub"
							style={{ width: "45px" }}
						/>
					</a>
				</div> */}
			</div>
		</BaseCard>
		</a>
	);
}

export default CardProjetos;
