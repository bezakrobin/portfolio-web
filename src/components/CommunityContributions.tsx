import React from "react";
import { Box, Typography, Link, useTheme } from "@mui/material";
import { CenteredContainer } from "@components/index";

export const CommunityContributions: React.FC = () => {
    const theme = useTheme();

    return (
        <Box>
            <CenteredContainer>
                <Typography
                    sx={{
                        fontSize: "15px",
                        textTransform: "uppercase",
                        fontFamily: "Poppins Regular, sans-serif",
                        lineHeight: "60px",
                        color: theme.palette.text.secondary,
                    }}
                >
                    community contributions
                </Typography>
                <Typography
                    sx={{
                        fontSize: "36px",
                        fontFamily: "Poppins SemiBold, sans-serif",
                        lineHeight: "40px",
                        width: "800px",
                        textAlign: "center",
                        color: theme.palette.text.primary,
                    }}
                >
                    I have created various resources and tools for designers and developers like myself. Check out{" "}
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            fontFamily: "Poppins SemiBold, sans-serif",
                            color: theme.palette.text.secondary,
                            textTransform: "uppercase",
                            textDecoration: "none",
                            transition: "color 0.3s ease",
                            "&:hover": {
                                color: theme.palette.accent.hover,
                            },
                        }}
                    >
                        Blueprint Automator
                    </Link>.
                </Typography>
            </CenteredContainer>
        </Box>
    );
};
