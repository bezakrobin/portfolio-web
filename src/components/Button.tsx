import React from 'react';
import { Button as MuiButton, Box, useTheme, SxProps, Theme } from "@mui/material";

interface ButtonProps {
    label: string;
    onClick: () => void;
    fullWidth?: boolean;
    sx?: SxProps<Theme>;
    endIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, fullWidth, sx, endIcon }) => {
    const theme = useTheme();

    return (
        <MuiButton
            onClick={onClick}
            disableRipple
            fullWidth={fullWidth}
            endIcon={endIcon}
            sx={{
                position: "relative",
                fontSize: "16px",
                textTransform: "uppercase",
                padding: "1px 10px",
                border: `2px solid ${theme.palette.text.secondary}`,
                borderRadius: "16px",
                overflow: "hidden",
                transition: "border 0.1s ease-in-out",
                width: fullWidth ? "100%" : "fit-content",
                ...sx,
                "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "0%",
                    backgroundColor: theme.palette.accent.hover,
                    transition: "height 0.1s ease-in-out",
                    zIndex: -1,
                },
                "&:hover": {
                    border: `2px solid ${theme.palette.accent.hover}`,
                    "&::after": {
                        height: "100%",
                    },
                    "& .text-container": {
                        transform: "translateY(-50%)",
                    },
                    "& .MuiSvgIcon-root": {
                        color: theme.palette.background.default,
                    }
                },
                "& .MuiSvgIcon-root": {
                    transition: "color 0.1s ease-in-out",
                }
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    height: "26px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: fullWidth ? "100%" : "auto",
                }}
            >
                <Box
                    className="text-container"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        transition: "transform 0.1s ease-in-out",
                        width: "100%",
                    }}
                >
                    <Box sx={{ color: theme.palette.text.secondary }}>{label}</Box>
                    <Box sx={{ color: theme.palette.background.default }}>{label}</Box>
                </Box>
            </Box>
        </MuiButton>
    );
}; 