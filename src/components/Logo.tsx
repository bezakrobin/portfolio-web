import React from "react";
import { DoubleLineText } from "@components/index";
import { useTheme } from "@mui/material";

export const Logo: React.FC = () => {
    const theme = useTheme();

    return (
        <DoubleLineText line1="robin" line2="bezak" color={theme.palette.text.primary} />
    );
}; 