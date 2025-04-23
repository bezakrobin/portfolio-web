import React from 'react';
import { Button as MuiButton, Box } from "@mui/material";

interface ButtonProps {
    label: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <MuiButton
            onClick={onClick}
            disableRipple
            sx={{
                position: "relative",
                fontSize: "16px",
                textTransform: "uppercase",
                padding: "1px 10px",
                border: "2px solid #777777",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "border 0.1s ease-in-out",
                width: "fit-content",
                "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "0%",
                    backgroundColor: "#CB450C",
                    transition: "height 0.1s ease-in-out",
                    zIndex: -1,
                },
                "&:hover": {
                    border: "2px solid #CB450C",
                    "&::after": {
                        height: "100%",
                    },
                    "& .text-container": {
                        transform: "translateY(-50%)",
                    },
                },
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
                }}
            >
                <Box
                    className="text-container"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        transition: "transform 0.1s ease-in-out",
                    }}
                >
                    <Box sx={{ color: "#777777" }}>{label}</Box>
                    <Box sx={{ color: "#111111" }}>{label}</Box>
                </Box>
            </Box>
        </MuiButton>
    );
}; 