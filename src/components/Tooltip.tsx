import React from "react";
import { Typography } from "@mui/material";

interface NavButtonProps {
    label: string;
}

export const Tooltip: React.FC<NavButtonProps> = ({ label }) => {
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
                border: "2px solid #777777",
                borderRadius: "20px",
                overflow: "hidden",
                width: "fit-content",
                color: "#777777",
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                lineHeight: 'normal'
            }}
        >
            {label}
        </Typography>
    );
};
