import React from "react";
import BaseCard from "./BaseCard";

const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.4rem",
    gap: "1rem",
};

const leftStyle = {
    minWidth: "100px", // Mantém um tamanho mínimo
    textAlign: "center",
	backgroundColor: "#363B45",
	height: "75px"
};

const rightStyle = {
    flex: 2,
    textAlign: "left",
    color: "#ffffff",
};

const cardTitleStyle = {
    margin: 0,
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    color: "#ffffff",
};

function CardConhecimentos() {
    return (
        <BaseCard title="Python" width={790} height={75}>
            <div style={containerStyle}>
                <div style={leftStyle}>
                    <h3 style={cardTitleStyle}>Python</h3>
                </div>
                <div style={rightStyle}>
                    <p>
                        O que pode fazer, O que pode fazer, O que pode fazer, O que pode fazer
                    </p>
                </div>
            </div>
        </BaseCard>
    );
}

export default CardConhecimentos;
