import React from "react";
import profilePicture from "./img/brunno.jpg";
import profilePicture2 from "./img/brunno2.png";


const LeftSection = () => {
    const leftSectionStyle = {
		width: "270px",
		height: "610px",
		padding: "2rem",
		borderRight: "1px solid #444",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",

		backgroundImage: "initial",
		backgroundPositionX: "50%",
		backgroundPositionY: "center",
		backgroundSize: "initial",
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "initial",
		backgroundOrigin: "initial",
		backgroundClip: "initial",
		backgroundColor: "#121416", // rgb(9, 10, 11), 090a0b, #1C1F22, #121416

		position: "fixed",
	};

    const profilePictureStyle = {
		width: "200px",
		height: "200px",
		borderRadius: "50%",
		backgroundColor: "#999",
		marginBottom: "1rem",
		backgroundImage: `url(${profilePicture2})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	};

    const nameStyle = {
		fontSize: "1.5rem",
		fontWeight: "bold",
		marginBottom: "0.5rem",
		color: "#ffffff",
	};

    const subTextTitelStyle = {
		fontSize: "1rem",
		color: "#CBEAFB",
		marginBottom: "0.5rem",
	};

    const subTextStyle = {
		textAlign: "center",
		marginBottom: "1rem",
		color: "#818189",
	};

    const socialIconsStyle = {
		marginTop: "auto",
		display: "flex",
		gap: "3rem",
	};

	return (
		<div style={leftSectionStyle}>
			<div style={profilePictureStyle}></div>
			<h1 style={nameStyle}>Brunno Oliveira</h1>
			<p style={subTextStyle}>
				Aluno do instituto federal da Paraíba campus Campina Grande (IFPB-CG)
			</p>
			<p style={subTextTitelStyle}>Sobre mim</p>
			<p style={subTextStyle}>
				Sou apaixonado por tecnologia e programar é um dos meus hobbies
				favoritos. Adoro criar coisas novas e ver minhas ideias ganharem vida.
			</p>

			<div style={socialIconsStyle}>
				{/* Exemplos de ícones (substitua pelos seus) */}
				<a
					href="https://github.com/BrunnoOliveira-dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://img.icons8.com/?size=100&id=62856&format=png&color=ffffff"
						alt="GitHub"
						style={{ width: "35px" }}
					/>
				</a>
				<a href="mailto:oliveirabrunno290@gmail.com">
					<img
						src="https://img.icons8.com/?size=100&id=86840&format=png&color=ffffff"
						alt="Email"
						style={{ width: "35px" }}
					/>
				</a>
			</div>
		</div>
	);
};

export default LeftSection;