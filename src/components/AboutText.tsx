import React from "react";
import { Typography } from "@mui/material";

interface AboutTextProps {
    text: string;
}

export const AboutText: React.FC<AboutTextProps> = ({ text }) => {
    const words = text.split(" ");
    const firstWord = words.shift();
    const remainingText = words.join(" ");

    return (
        <Typography
            sx={{
                marginTop: "30px",
                userSelect: "none",
            }}
        >
            <span style={{ fontFamily: "'Round 8', sans-serif", color: "#777777", paddingRight: "10px", fontSize: "25px", lineHeight: "30px" }}>
                {firstWord}
            </span>{" "}
            <span style={{ fontFamily: "'Poppins SemiBold', sans-serif", color: "#AAAAAA", fontSize: "18px", lineHeight: "30px" }}>
                {remainingText}
            </span>
        </Typography>
    );
};
