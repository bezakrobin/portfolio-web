import React from "react";
import { Box } from "@mui/material";
import { AppNavigationBar } from "./AppNavigationBar.tsx";
import { Header } from "./Header.tsx";
import { Projects } from "./Projects.tsx";

export const LandingPage: React.FC = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    backgroundColor: "#111111",
                }}
            >
                <AppNavigationBar />
                <Header />
            </Box>
            <Projects />
        </Box>
    );
};
