import React from "react";

// Importando cards
import CardConhecimentos from "./card/CardConhecimentos";
import CardProjetos from "./card/CardProjetos";
import CardCertificado from "./card/CardCertificado";
import CardPremiacoes from "./card/CardPremiacoes";

// Importando imagens
// imagens dos projetos
import imgPortifolio from "./img/portifolio2.png";
import imgCriadorDeProjetos from "./img/criador_de_projetos.png";

// imagens dos certificados
import imgCertificadoVirtus from "./img/virtus_certificado.png";
import imgCertificadoAlura from "./img/alura.png";
import imgCertificadoObi_2023 from "./img/obi_2023.png";

const RightSection = () => {
	const styles = {
		rightSection: {
			flex: "1",
			padding: "2rem",
			marginLeft: "320px",
			display: "flex",
			flexDirection: "column",
			gap: "2rem",
			alignItems: "center",
			backgroundColor: "#25272d",
		},
		sectionTitle: {
			color: "#00BFFF",
			fontSize: "1.8rem",
			fontWeight: "bold",
			textTransform: "uppercase",
			letterSpacing: "2px",
			marginBottom: "1.5rem",
			borderBottom: "2px solid #00BFFF",
			paddingBottom: "0.5rem",
			textAlign: "center",
			width: "100%",
		},
		groupOfCards: {
			display: "flex",
			flexDirection: "column",
			gap: "1rem",
		},
		groupOfCardsVerticais: {
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "space-between",
			gap: "1rem",
		},
	};

	return (
		<div style={styles.rightSection}>
			<section id="conhecimentos" style={styles.groupOfCards}>
				<h2 style={styles.sectionTitle}>Conhecimentos</h2>
				<CardConhecimentos
					title="Python"
					nivel="Avançado"
					resumo="Experiência em programação competitiva, APIs com Flask e Django, e inteligência artificial."
				/>
				<CardConhecimentos
					title="JavaScript"
					nivel="Avançado"
					resumo="Uso para front-end e back-end com Node.js e Express."
				/>
				<CardConhecimentos
					title="Java"
					nivel="Intermediário"
					resumo="Desenvolvimento de APIs com Spring Boot."
				/>
				<CardConhecimentos
					title="C++"
					nivel="Intermediário"
					resumo="Uso em programação competitiva e projetos de baixo nível."
				/>
				<CardConhecimentos
					title="React"
					nivel="Intermediário"
					resumo="Criação de interfaces dinâmicas."
				/>
			</section>

			<section id="projetos">
				<h2 style={styles.sectionTitle}>Projetos</h2>
				<div style={styles.groupOfCardsVerticais}>
					<CardProjetos
						title="Portfólio"
						resumo="Site desenvolvido com React para exibir projetos e conhecimentos."
						image={imgPortifolio}
						linkGithub="https://github.com/BrunnoOliveira-dev/portifolio"
					/>
					<CardProjetos
						title="Criador de projetos"
						resumo="Site com a ideia de armazenar as ideias iniciais de um projeto, nele você ir projetando uma nova ideia de projeto de programação rapidamente podendo fazer comentaria e até tarefas para projetos especificos"
						image={imgCriadorDeProjetos}
						linkGithub="https://github.com/BrunnoOliveira-dev/organizador_de_projetos"
					/>
				</div>
			</section>

			<section id="premiacoes" style={styles.groupOfCards}>
				<h2 style={styles.sectionTitle}>Premiações</h2>
				<div style={styles.groupOfCardsVerticais}>
					<CardPremiacoes
						medal="Ouro"
						date="xx/10/2024"
						title="Olimpíada Paraibana de Informática (OPI)"
						description="Competição estadual de programação."
						icon="https://img.icons8.com/ios-filled/100/FFD700/medal.png"
					/>
					<CardPremiacoes
						medal="Prata"
						date="xx/10/2023"
						title="Olimpíada Paraibana de Informática (OPI)"
						description="Primeira participação, medalha de prata."
						icon="https://img.icons8.com/ios-filled/100/C0C0C0/medal.png"
					/>
					<CardPremiacoes
						medal="50° lugar"
						date="xx/10/2023"
						title="Olimpíada Brasileira de Informática (OBI)"
						description="Classificação entre mais de 6000 participantes."
						icon="https://img.icons8.com/ios-filled/100/FFFFFF/medal.png"
					/>
				</div>
			</section>

			<section id="certificados" style={styles.groupOfCards}>
				<h2 style={styles.sectionTitle}>Certificados e cursos</h2>
				<CardCertificado
					title="Estrutura de Dados e Algoritmos"
					resumo="Curso de algoritmos para desenvolvimento de hardware."
					image={imgCertificadoVirtus}
					data="30/10/2024"
					link="https://virtuscertificados.com.br/certificado/1"
				/>
				<CardCertificado
					title="Certificado OBI"
					resumo="Certificado de participação na OBI."
					image={imgCertificadoObi_2023}
					data="10/2023"
					link="https://olimpiada.ic.unicamp.br/certificados/consulta_participantes_resp"
				/>
				<CardCertificado
					title="Imersão Front-end"
					resumo="Certificado de conclusão do curso de front-end na Alura."
					image={imgCertificadoAlura}
					data="12/12/2021"
					link="https://virtuscertificados.com.br/certificado/1"
				/>
			</section>
		</div>
	);
};

export default RightSection;
