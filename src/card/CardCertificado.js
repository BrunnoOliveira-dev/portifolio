import React, { useState } from "react";
import BaseCard from "./BaseCard";

function CardCertificado({ title, resumo, image, data, link }) {
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  // Estilo base para o link/container principal do card
  const linkContainerBaseStyle = {
    position: "relative", // Necessário para z-index funcionar
    zIndex: 0, // z-index padrão
    display: 'block', // Garante que o 'a' se comporte como bloco
    textDecoration: "none", // Remove sublinhado do link
    color: "inherit", // Herda a cor do texto, se necessário
    transition: "z-index 0s 0.3s", // Atrasar o retorno do z-index para evitar flicker
  };

  // Estilo do container interno (seu containerStyle original, ajustado)
  const cardInternalContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    backgroundColor: "#191B1F", // Mantido aqui se BaseCard não tiver cor
    borderRadius: "20px", // Mantido aqui se BaseCard não tiver
    boxSizing: "border-box",
    overflow: "visible",
  };

  const imageStyle = {
    width: "100%",
    height: "205px",
    background: `url(${image}) no-repeat center center`,
    backgroundSize: "cover",
    borderRadius: "10px",
    marginBottom: "1rem",
    transition: "transform 0.3s ease-in-out",
    zIndex: 1, // z-index local para a imagem dentro do card
    position: 'relative' // Garante que z-index local funcione se necessário
  };

  const textContainerStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0 1rem 1rem 1rem", // Adiciona padding inferior e lateral ao texto
    boxSizing: "border-box",
  };

  const titleStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: "24px",
    color: "#CBEAFB",
    textAlign: "center",
    margin: "0.5rem 0",
    fontWeight: "bold",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  };

  const resumoStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#818189",
    textAlign: "center",
    margin: "0", // Removido margin auto e superior/inferior duplicada
    maxWidth: "90%", // Ajustado para caber melhor com padding
  };

  const handleMouseEnterImage = (e) => {
    setIsHoveringImage(true);
    e.currentTarget.style.transform = "scale(1.6)";
  };

  const handleMouseLeaveImage = (e) => {
    setIsHoveringImage(false);
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...linkContainerBaseStyle,
        // Aplica z-index alto apenas quando o mouse está sobre a imagem
        zIndex: isHoveringImage ? 10 : 0,
        // Remove o atraso da transição ao entrar
        transition: isHoveringImage ? "z-index 0s 0s" : "z-index 0s 0.3s",
      }}
    >
      <BaseCard width={"300px"} paddingSize="0"> {/* Remove padding do BaseCard */}
        <div style={cardInternalContainerStyle}>
          <div
            style={{
                ...imageStyle,
                // Mantém a escala mesmo se o mouse sair brevemente para o texto
                transform: isHoveringImage ? "scale(1.6)" : "scale(1)",
            }}
            onMouseEnter={handleMouseEnterImage}
            onMouseLeave={handleMouseLeaveImage}
          ></div>
          <div style={textContainerStyle}>
            <div style={titleStyle}>{title}</div>
            <div style={resumoStyle}>{resumo}</div>
          </div>
        </div>
      </BaseCard>
    </a>
  );
}

export default CardCertificado;