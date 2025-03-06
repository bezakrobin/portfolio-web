import React from "react";
import { Typography } from "@mui/material";

interface HeaderTextProps {
    text: string;
    fontSize: string;
}

export const HeaderText: React.FC<HeaderTextProps> = ({ text, fontSize }) => {
    return (
        <Typography
            sx={{
                color: "#777777",
                fontSize: fontSize,
                lineHeight: fontSize,
                fontFamily: "'Round 8', sans-serif",
                paddingRight: "60px",
                userSelect: "none"
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