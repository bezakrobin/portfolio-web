import React from "react";
import { Box, GlobalStyles } from "@mui/material";
import { AppNavigationBar } from "./AppNavigationBar.tsx";
import { Header } from "./Header.tsx";
import { FeaturedProjects } from "./FeaturedProjects.tsx";
import { CommunityContributions } from "./CommunityContributions.tsx";
import { OtherProjects } from "./OtherProjects.tsx";
import { InfoSection } from "./InfoSection.tsx";
import { Footer } from "./Footer.tsx";

const globalScrollBehavior = <GlobalStyles styles={{ html: { scrollBehavior: 'smooth' } }} />;

export const LandingPage: React.FC = () => {
    return (
        <Box>
            {globalScrollBehavior}

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
            <FeaturedProjects />
            <CommunityContributions />
            <OtherProjects />
            <InfoSection />
            <Footer />
        </Box>
    );
};
