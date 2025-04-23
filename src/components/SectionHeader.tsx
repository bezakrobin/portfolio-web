import React from "react";
import { Typography } from "@mui/material";

interface SectionHeaderProps {
    text: string;
    fontSize: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ text, fontSize }) => {
    return (
        <Typography
            sx={{
                color: "#777777",
                fontSize: fontSize,
                lineHeight: fontSize,
                fontFamily: "'Round 8', sans-serif",
                paddingRight: "60px",
                userSelect: "none",
                whiteSpace: "nowrap",
            }}
        >
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    style={{
                        display: "inline-block",
                        transition: "color 0.1s ease-in-out",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#AAAAAA")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#777777")}
                >
                    {char}
                </span>
            ))}
        </Typography>
    );
};