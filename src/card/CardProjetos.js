import React from "react";
import BaseCard from "./BaseCard";

function CardProjetos({ imageUrl, title, resumo }) {
	const imageStyle = {
		width: "150px",
		height: "84px", // Defina a altura desejada
		borderRadius: "8%",
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",

		objectFit: "cover", // Ajusta a imagem para cobrir o espaço definido
		marginBottom: "1rem",

		//backgroundImage: `url(${imageUrl})`,
		backgroundColor: "#999",
	};

	return (
		<BaseCard title={title}>
            <div style={imageStyle}></div>
			{/* {imageUrl && <img src={imageUrl} alt={title} style={imageStyle} />} */}
			<p>{resumo}</p>
		</BaseCard>
	);
}

export default CardProjetos;
