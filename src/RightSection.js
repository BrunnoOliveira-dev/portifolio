import React from "react";
import Fullpage, {
	FullPageSections,
	FullpageSection,
	FullpageNavigation,
} from "@ap.cx/react-fullpage";

// Importando componentes de cards
import CardConhecimentos from "./card/CardConhecimentos";
import CardProjetos from "./card/CardProjetos";
import CardCertificado from "./card/CardCertificado";
import CardPremiacoes from "./card/CardPremiacoes";

// Importando imagens
import imgPortifolio from "./img/portifolio2.png";
import imgCriadorDeProjetos from "./img/criador_de_projetos.png";
import imgDessingMatrix from "./img/desing_matrix.png";

import imgCertificadoVirtus from "./img/virtus_certificado.png";
import imgCertificadoAlura from "./img/alura.png";
import imgCertificadoObi_2023 from "./img/obi_2023.png";

const styles = {
	rightSection: {
		width: "80vw",
		marginLeft: "calc(20vw + 4rem)",
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
		alignItems: "center",
		justifyContent: "center",
		flexWrap: "wrap",
		gap: "2rem",
		maxWidth: "1200px", // Define a largura máxima do contêiner
		width: "100%", // Garante que o contêiner ocupe toda a largura disponível até o limite de maxWidth
		margin: "0 auto", // Centraliza o contêiner horizontalmente
	},
};

const RightSection = () => {
	return (
		<Fullpage>
			<FullPageSections>
				<FullpageSection style={styles.rightSection}>
					<section id="conhecimentos" style={styles.groupOfCards}>
						<h2 style={styles.sectionTitle}>Conhecimentos</h2>
						{[
							{
								title: "Python",
								nivel: "Avançado",
								resumo:
									"Experiência em programação competitiva, APIs com Flask e Django, e IA.",
							},
							{
								title: "JavaScript",
								nivel: "Avançado",
								resumo: "Uso para front-end e back-end com Node.js e Express.",
							},
							{
								title: "Java",
								nivel: "Intermediário",
								resumo: "Desenvolvimento de APIs com Spring Boot.",
							},
							{
								title: "C++",
								nivel: "Intermediário",
								resumo:
									"Uso em programação competitiva e projetos de baixo nível.",
							},
							{
								title: "React",
								nivel: "Intermediário",
								resumo: "Criação de interfaces dinâmicas.",
							},
						].map((conhecimento, index) => (
							<CardConhecimentos key={index} {...conhecimento} />
						))}
					</section>
				</FullpageSection>

				<FullpageSection style={styles.rightSection}>
					<section id="projetos">
						<h2 style={styles.sectionTitle}>Projetos</h2>
						<div style={styles.groupOfCardsVerticais}>
							<CardProjetos
								title="Portfólio"
								resumo="Site desenvolvido com o intuito de aprender React."
								image={imgPortifolio}
								linkGithub="https://github.com/BrunnoOliveira-dev/portifolio"
							/>
							<CardProjetos
								title="Criador de Projetos"
								resumo="Site feito com a idea de armazenar ideias de novos projetos com áreas especializadas para modelos conceituais logicos e com sessoes para task e comentarios."
								image={imgCriadorDeProjetos}
								linkGithub="https://github.com/BrunnoOliveira-dev/organizador_de_projetos"
							/>
							<CardProjetos
								title="Desing de interiores"
								resumo="Site desenvolvido em conjunto com minha amiga Bianca com o intuito de deselvolver plantas baixas de casas, foi utilizado node.js, three.js, e git."
								image={imgDessingMatrix}
								linkGithub="https://github.com/BrunnoOliveira-dev/portifolio"
							/>
							<CardProjetos
								title="Criador de Projetos"
								resumo="Site para armazenar ideias de projetos."
								image={imgCriadorDeProjetos}
								linkGithub="https://github.com/BrunnoOliveira-dev/organizador_de_projetos"
							/>
						</div>
					</section>
				</FullpageSection>

				<FullpageSection style={styles.rightSection}>
					<section id="premiacoes" style={styles.groupOfCards}>
						<h2 style={styles.sectionTitle}>Premiações</h2>
						<div style={styles.groupOfCardsVerticais}>
							<CardPremiacoes
								medal="Ouro"
								date="xx/10/2024"
								title="OPI"
								description="Competição estadual."
								icon="https://img.icons8.com/ios-filled/100/FFD700/medal.png"
							/>
							<CardPremiacoes
								medal="Prata"
								date="xx/10/2023"
								title="OPI"
								description="Primeira participação."
								icon="https://img.icons8.com/ios-filled/100/C0C0C0/medal.png"
							/>
							<CardPremiacoes
								medal="50° lugar"
								date="xx/10/2023"
								title="OBI"
								description="Classificação entre 6000 participantes."
								icon="https://img.icons8.com/ios-filled/100/FFFFFF/medal.png"
							/>
						</div>
					</section>
				</FullpageSection>

				<FullpageSection style={styles.rightSection}>
					<section id="certificados" style={styles.groupOfCardsVerticais}>
						<h2 style={styles.sectionTitle}>Certificados e Cursos</h2>
						<CardCertificado
							title="Estrutura de Dados"
							resumo="Curso sobre algoritmos."
							image={imgCertificadoVirtus}
							data="30/10/2024"
							link="https://virtuscertificados.com.br/certificado/1"
						/>
						<CardCertificado
							title="Certificado OBI"
							resumo="Participação na OBI."
							image={imgCertificadoObi_2023}
							data="10/2023"
							link="https://olimpiada.ic.unicamp.br/certificados/consulta_participantes_resp"
						/>
						<CardCertificado
							title="Imersão Front-end"
							resumo="Curso de front-end na Alura."
							image={imgCertificadoAlura}
							data="12/12/2021"
							link="https://virtuscertificados.com.br/certificado/1"
						/>
					</section>
				</FullpageSection>
			</FullPageSections>
		</Fullpage>
	);
};

export default RightSection;
