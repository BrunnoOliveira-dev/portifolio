import React from "react";
import CardConhecimentos from "./CardConhecimentos";
import CardProjetos from "./CardProjetos";

const CardsContainer = () => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap", // Permite que os cards quebrem para a próxima linha
    justifyContent: "center", // Centraliza os cards horizontalmente
    gap: "20px", // Espaçamento entre os cards
    padding: "20px", // Espaçamento interno
  };

  return (
    <div style={containerStyle}>
      <CardConhecimentos
        pythonFontSize={24}
        resumoFontSize={20}
        nivelFontSize={24}
      />
      <CardProjetos
        title="Projeto X"
        resumo="Pequeno resumo sobre o projeto..."
        titleFontSize={24}
        resumoFontSize={20}
      />
      {/* Adicione mais cards conforme necessário */}
    </div>
  );
};

export default CardsContainer;