import React from "react";
import { Typography, useTheme } from "@mui/material";

interface AboutSectionProps {
    text: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ text }) => {
    const theme = useTheme();

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
            <span style={{ fontFamily: "'Round 8', sans-serif", color: theme.palette.text.secondary, paddingRight: "10px", fontSize: "25px", lineHeight: "30px" }}>
                {firstWord}
            </span>{" "}
            <span style={{ fontFamily: "'Poppins SemiBold', sans-serif", color: theme.palette.text.primary, fontSize: "18px", lineHeight: "30px" }}>
                {remainingText}
            </span>
        </Typography>
    );
};
