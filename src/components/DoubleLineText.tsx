import React from "react";
import { Box, Typography, useTheme, SxProps, Theme } from "@mui/material";

interface TextLogoProps {
    line1: string;
    line2: string;
    color?: string;
    lineHeight?: number;
    isHovered?: boolean;
    sx?: SxProps<Theme>;
}

export const DoubleLineText: React.FC<TextLogoProps> = ({
    line1,
    line2,
    color,
    lineHeight = 1.5,
    isHovered = false,
    sx
}) => {
    const theme = useTheme();

    return (
        <Box
            textAlign="left"
            textTransform="uppercase"
            fontSize="12px"
            sx={{
                transition: 'color 0.3s ease',
                color: isHovered ? theme.palette.text.primary : color ? color : theme.palette.text.secondary,
                ...sx
            }}
        >
            <Typography
                sx={{
                    lineHeight: lineHeight,
                    fontFamily: "'Poppins Regular', sans-serif"
                }}
            >
                {line1}
            </Typography>
            <Typography
                sx={{
                    lineHeight: lineHeight,
                    fontFamily: "'Poppins Regular', sans-serif"
                }}
            >
                {line2}
            </Typography>
        </Box>
    );
};