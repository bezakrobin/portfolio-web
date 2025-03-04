import React from "react";
import { Box, Typography } from "@mui/material";

interface TextLogoProps {
    line1: string;
    line2: string;
    color: string;
}

export const DoubleLineText: React.FC<TextLogoProps> = ({
    line1,
    line2,
    color,
}) => {
    return (
        <Box
            textAlign="left"
            textTransform="uppercase"
            color={color}
            fontSize="12px"
        >
            <Typography
                sx={{
                    lineHeight: 1.5,
                    fontFamily: "'Poppins Regular', sans-serif"
                }}
            >
                {line1}
            </Typography>
            <Typography
                sx={{
                    lineHeight: 1.5,
                    fontFamily: "'Poppins Regular', sans-serif"
                }}
            >
                {line2}
            </Typography>
        </Box>
    );
};