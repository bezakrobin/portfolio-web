import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { CenteredContainer } from "./CenteredContainer.tsx";
import { Divider } from "./Divider.tsx";

export const CommunityContributions: React.FC = () => {
    return (
        <Box>
            <CenteredContainer>
                <Typography
                    sx={{
                        fontSize: "15px",
                        textTransform: "uppercase",
                        fontFamily: "Poppins Regular, sans-serif",
                        lineHeight: "60px",
                        color: "#777777",
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
                        color: "#AAAAAA",
                    }}
                >
                    I have created various resources and tools for designers and developers like myself. Check out{" "}
                    <Link
                        href="https://your-link-here.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            fontFamily: "Poppins SemiBold, sans-serif",
                            color: "#777777",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            transition: "color 0.3s ease",
                            "&:hover": {
                                color: "#CB450C",
                            },
                        }}
                    >
                        Blueprint Automator
                    </Link>.
                </Typography>
            </CenteredContainer>
            <Divider width="100%" thickness={2} marginY={2} animateFrom={"right"} />
        </Box>
    );
};
