import React from "react";
import BaseCard from "./BaseCard";
import Progress from "../components/ui/progress";

const styles = {
    baseCard: {
        padding: "1.2rem", // 80% of 1.5rem
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem", // 80% of 1rem
        background: "linear-gradient(to right, #2d3748, #1a202c)",
        transition: "all 0.3s ease-in-out",
        borderRadius: "6.4px", // 80% of 8px
    },
    baseCardHover: {
        background: "linear-gradient(to right, #4a5568, #2d3748)",
    },
    title: {
        fontSize: "1.04rem", // 80% of 1.3rem
        fontWeight: "800",
        color: "#CBEAFB",
        letterSpacing: "0.04em", // 80% of 0.05em
    },
    resumo: {
        fontSize: "0.76rem", // 80% of 0.95rem
        color: "#818189",
        lineHeight: "1.2", // 80% of 1.5
    },
    nivelContainer: {
        display: "flex",
        alignItems: "center",
        gap: "0.8rem", // 80% of 1rem
    },
    nivelText: {
        fontSize: "0.7rem", // 80% of 0.875rem
        fontWeight: "500",
        color: "#A0AEC0",
        textTransform: "uppercase",
    },
    nivelCirclesContainer: {
        display: "flex",
        gap: "0.4rem", // 80% of 0.5rem
    },
    nivelCircle: {
        width: "9.6px", // 80% of 12px
        height: "9.6px", // 80% of 12px
        borderRadius: "50%",
        backgroundColor: "#A0AEC0",
    },
    nivelCircleActive: {
        backgroundColor: "#CBEAFB",
    },
};

function CardConhecimentos({ title, nivel, resumo }) {
    const nivelPercentual = {
        "Iniciante": 1,
        "Intermediário": 2,
        "Avançado": 3,
        "Sênior": 4,
        "Especialista": 5,
    }[nivel] || 0;

    return (
        <BaseCard
            width={800} // 80% of 1000
            height={112} // 80% of 140
            style={styles.baseCard}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.baseCardHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.baseCard)}
        >
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.resumo}>{resumo}</p>
            <div style={styles.nivelContainer}>
                <span style={styles.nivelText}>{nivel}</span>
                <div style={styles.nivelCirclesContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                    key={star}
                    style={{
                        fontSize: '1.2rem', // 80% of 1.5rem
                        color: star <= nivelPercentual ? 'gold' : '#ccc',
                        marginRight: '3.2px', // 80% of 4px
                        ...(styles.nivelStar || {}),
                    }}
                    >
                    ★
                    </span>
                ))}
                </div>
            </div>
        </BaseCard>
    );
}

export default CardConhecimentos;
