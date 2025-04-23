import React from "react";
import { Box, useTheme } from "@mui/material";

interface HorizontalLineProps {
    width?: string;
}

export const HorizontalLine: React.FC<HorizontalLineProps> = ({ width = "100px" }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: width,
                height: "55px",
                backgroundColor: theme.palette.text.secondary,
                clipPath: "polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%)",
                userSelect: "none",
                transition: "width 0.3s ease",
                "&:hover": {
                    backgroundColor: theme.palette.text.primary,
                },
            }}
        />
    );
};
