import React from "react";

const BaseCard = ({ children, width, height = "auto", paddingSize = "1rem" }) => {
    const cardStyle = {
        width: width,
        height: height,
        background: "#191B1F",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background 0.3s ease-in-out", // Adicionada transição de background
        padding: paddingSize, // Padding aplicado aqui
        border: "1px solid rgba(255, 255, 255, 0.1)",
        // Removido transform inicial daqui para evitar conflito com hover
        // Se precisar de transform inicial, ajuste a lógica de hover
    };

    // Estilos de hover mantidos como antes
    const cardHoverStyle = {
        background: "#2F3540",
        transform: "scale(1.05)",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
    };

    // Estado para controlar se o mouse está sobre o card
    const [isHoveringCard, setIsHoveringCard] = React.useState(false);

    return (
        <div
            style={{
                ...cardStyle,
                // Aplica estilo de hover apenas se o mouse estiver sobre o card
                ...(isHoveringCard && cardHoverStyle)
            }}
            className="base-card" // Classe útil para CSS externo ou seletores
            onMouseEnter={() => setIsHoveringCard(true)}
            onMouseLeave={() => setIsHoveringCard(false)}
        >
            {children}
        </div>
    );
};

export default BaseCard;