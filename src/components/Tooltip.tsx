import React from "react";
import { Typography, useTheme } from "@mui/material";

interface NavButtonProps {
    label: string;
}

export const Tooltip: React.FC<NavButtonProps> = ({ label }) => {
    const theme = useTheme();

    return (
        <Typography
            component="div"
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: "20px",
                textTransform: "uppercase",
                padding: "3px 12px",
                border: `2px solid ${theme.palette.text.secondary}`,
                borderRadius: "20px",
                overflow: "hidden",
                width: "fit-content",
                color: theme.palette.text.secondary,
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                lineHeight: 'normal'
            }}
        >
            {label}
        </Typography>
    );
};
