import React from "react";
import { Box } from "@mui/material";
import { AppNavigationBar } from "./AppNavigationBar.tsx";
import { Header } from "./Header.tsx";
import { Projects } from "./Projects.tsx";
import { CommunityContributions } from "./CommunityContributions.tsx";
import { InfoSection } from "./InfoSection/InfoSection.tsx";
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
            <AppNavigationBar />
            <Header />
            <Projects id={'projects-section'} projects={featuredProjects} sectionTitle="Featured Projects" />
            <CommunityContributions />
            <Projects projects={otherProjects} sectionTitle="Other Projects" />
            <InfoSection certificates={certificates} />
            <Footer socials={socials} />
        </Box>
    );
};
