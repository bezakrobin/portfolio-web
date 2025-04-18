import React from "react";
import { Box } from "@mui/material";
import { AppNavigationBar } from "./AppNavigationBar.tsx";
import { Header } from "./Header.tsx";
import { FeaturedProjects } from "./FeaturedProjects.tsx";
import { CommunityContributions } from "./CommunityContributions.tsx";
import { OtherProjects } from "./OtherProjects.tsx";
import { InfoSection } from "./InfoSection.tsx";
import { Footer } from "./Footer.tsx";
import {
    certificates,
    featuredProjects,
    otherProjects,
    socials
} from "../data/data.ts";

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
            <FeaturedProjects projects={featuredProjects} />
            <CommunityContributions />
            <OtherProjects projects={otherProjects} />
            <InfoSection certificates={certificates} />
            <Footer socials={socials} />
        </Box>
    );
};
