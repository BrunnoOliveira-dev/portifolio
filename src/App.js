import React, { useEffect } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function App() {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "smooth";
    }, []);

    const containerStyle = {
        display: "flex",
        minHeight: "100v",
        backgroundColor: "#2B2B2B",
        fontFamily: "sans-serif",
    };

    return (
        <div style={containerStyle}>
            <LeftSection />
            <RightSection />
        </div>
    );
}