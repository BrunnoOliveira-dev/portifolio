import React, { useEffect } from "react";

import LeftSection from "./LeftSection";

import CardConhecimentos from "./card/CardConhecimentos";
import CardProjetos from "./card/CardProjetos";
import CardCertificado from "./card/CardCertificado";
import CardPremiacoes from "./card/CardPremiacoes";

// import imgPortifolio from "./img/portifolio.png";
import imgPortifolio from "./img/portifolio2.png";
import imgCertificadoVirtus from "./img/virtus_certificado.png";
import imgCertificadoAlura from "./img/alura.png";
import imgCertificadoObi_2023 from "./img/obi_2023.png";

export default function App() {
	useEffect(() => {
		document.documentElement.style.scrollBehavior = "smooth";
	}, []);

	const containerStyle = {
		display: "flex",
		minHeight: "100vh",
		backgroundColor: "#2B2B2B",

		fontFamily: "sans-serif",
	};

	// Lateral direita
	const rightSectionStyle = {
		width: "75%",
		padding: "2rem",
		marginLeft: "280px",

		display: "flex",
		flexDirection: "column",
		gap: "2rem",
		alignItems: "center",

		backgroundImage: "initial",
		backgroundPositionX: "initial",
		backgroundPositionY: "initial",
		backgroundSize: "initial",
		backgroundRepeat: "initial",
		backgroundAttachment: "initial",
		backgroundOrigin: "initial",
		backgroundClip: "initial",
		backgroundColor: "#25272d", // 24272D, 191B1F
	};

	const sectionTitleStyle = {
		color: "#00BFFF", // Ajuste para a cor desejada (azul do seu layout)
		fontSize: "1.5rem",
		marginBottom: "1rem",
	};

	const groupOfCards = {
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
	};

	const groupOfCardsVerticais = {
		// divide em duas colunas
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
		gap: "1rem",
		maxHeight: "100%",
	};

	return (
		<div style={containerStyle}>
			{/* Seção Esquerda */}
			<LeftSection />

			{/* Seção Direita */}
			<div style={rightSectionStyle}>
				<div style={groupOfCards}>
					<h2 style={sectionTitleStyle}>Conhecimentos</h2>
					<CardConhecimentos
						title={"python"}
						nivel={"avançado"}
						resumo={
							"Sou muinto experiente em python, uso-o a dois anos desde a programação competitiva a criação de apis em fles e django, tabem utilizo para meus projetos de interligencia artificial"
						}
					/>
					<CardConhecimentos
						title={"Javascript"}
						nivel={"avançado"}
						resumo={
							"experiencia em varios projetos o usando em diferentes contextos, usando principamente para o front end de paginas e o back-end em apis com node e express"
						}
					/>
					<CardConhecimentos
						title={"Java"}
						nivel={"intermediario"}
						resumo={
							"utilizo em comjunto com o spring para cria varias apis rapidamente, possuindo famialidade com java e spring"
						}
					/>
					<CardConhecimentos
						title={"C++"}
						nivel={"intermediario"}
						resumo={
							"utilizo para programação competitiva e para projetos de baixo nivel"
						}
					/>
					<CardConhecimentos
						title={"React"}
						nivel={"intermediario"}
						resumo={"utilizo para criar paginas mais"}
					/>
				</div>

				<div>
					<h2 style={sectionTitleStyle}>Projetos</h2>
					<div style={groupOfCardsVerticais}>
						<CardProjetos
							title={"Portifolio"}
							resumo={
								"Site construido com react para mostrar meus projetos e conhecimentos"
							}
							image={imgPortifolio}
							linkGithub={"https://github.com/BrunnoOliveira-dev/portifolio"}
						/>
						<CardProjetos
							title={"Portifolio"}
							resumo={
								"Site construido com react para mostrar meus projetos e conhecimentos"
							}
							image={imgPortifolio}
						/>
					</div>
				</div>

				<div style={groupOfCards}>
					<h2 style={sectionTitleStyle}>Premiações</h2>

					{/* gold #FFD700 silver #C0C0C0 bronze #CD7F32 */}

					<div style={groupOfCardsVerticais}>
						<CardPremiacoes
							medal={"ouro"}
							date={"xx/10/2024"}
							title={"Olipiada Paraibana de Informatica (OPI)"}
							description={
								"Olipiada Paraibana de Informatica (OPI) e uma competição de programação a nivel estadual na paraiba, no qual tive exito de conseguir medalha de ouro"
							}
							icon={"https://img.icons8.com/ios-filled/100/FFD700/medal.png"}
						/>

						<CardPremiacoes
							medal={"prata"}
							date={"xx/10/2023"}
							title={"Olipiada Paraibana de Informatica (OPI)"}
							description={
								"Olipiada Paraibana de Informatica (OPI) competição de programação a nivel estadual na paraiba, Primeiro ano de participação na competição e exito na madalha de prata"
							}
							icon={"https://img.icons8.com/ios-filled/100/C0C0C0/medal.png"}
						/>

						<CardPremiacoes
							medal={"50° lugar"}
							date={"xx/10/2023"}
							title={"Olipiada Braileira de Informatica (OBI)"}
							description={
								"Olipiada Brasileira de Informatica (OBI), competição de programação a nivel nacional, no qual apos 3 fases consegui uma otima colocação entre os mais de 6000 participantes"
							}
							icon={"https://img.icons8.com/ios-filled/100/FFFFFF/medal.png"}
						/>
					</div>
				</div>

				<div style={groupOfCards}>
					<h2 style={sectionTitleStyle}>Certificados</h2>

					<CardCertificado
						title={"Esrtutura de Dados e Algoritimos"}
						resumo={
							"Cursos de estrutura de dados e algoritimos para o Desenvolvimento de Harware, nele foi encinado desde algoritimos ordenação a algoritimos em grafos"
						}
						image={imgCertificadoVirtus}
						data={"30/10/2024"}
						link={"https://virtuscertificados.com.br/certificado/1"}
					/>

					<CardCertificado
						title={"Certificado"}
						resumo={
							"Certificado de colocação na 25ª Olimpíada Brasileira de Informática"
						}
						image={imgCertificadoObi_2023}
						data={"10/2023"}
						link={
							"https://olimpiada.ic.unicamp.br/certificados/consulta_participantes_resp"
						}
					/>

					<CardCertificado
						title={"Imersão front-end"}
						resumo={"Certificado de conclusão de front-end da alura"}
						image={imgCertificadoAlura}
						data={"12/12/2021"}
						link={"https://virtuscertificados.com.br/certificado/1"}
					/>
				</div>
			</div>
		</div>
	);
}
