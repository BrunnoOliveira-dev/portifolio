// filepath: c:\Users\bo272\Desktop\programacao\projetos\portifolio\portifolio_v2\portifolio\src\components\ui\progress.js
import React from "react";

const Progress = ({ value, className }) => {
    const progressStyle = {
        width: `${value}%`,
        height: "8px",
        backgroundColor: "#00BFFF",
        borderRadius: "4px",
        transition: "width 0.3s ease-in-out",
    };

    const containerStyle = {
        width: "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: "4px",
        overflow: "hidden",
    };

    return (
        <div className={className} style={containerStyle}>
            <div style={progressStyle}></div>
        </div>
    );
};

export default Progress;