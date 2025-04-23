import React from "react";
import { Typography, useTheme } from "@mui/material";

interface SectionHeaderProps {
    text: string;
    fontSize: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ text, fontSize }) => {
    const theme = useTheme();

    return (
        <Typography
            sx={{
                color: theme.palette.text.secondary,
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
                    onMouseEnter={(e) => (e.currentTarget.style.color = theme.palette.text.primary)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = theme.palette.text.secondary)}
                >
                    {char}
                </span>
            ))}
        </Typography>
    );
};