import React from "react";
import { Box } from "@mui/material";
import { NavigationBar, Header, Projects, CommunityContributions, InfoSection, Footer } from "@components/index";
import { DividerDirectionProvider } from "@contexts/DividerDirectionContext";
import {
    certificates,
    featuredProjects,
    otherProjects,
    socials
} from "@data/data";

export const LandingPage: React.FC = () => {
    return (
        <DividerDirectionProvider>
            <Box>
                <NavigationBar />
                <Header />
                <Projects id={'projects-section'} projects={featuredProjects} sectionTitle="Featured Projects" />
                <CommunityContributions />
                <Projects projects={otherProjects} sectionTitle="Other Projects" />
                <InfoSection certificates={certificates} />
                <Footer socials={socials} />
            </Box>
        </DividerDirectionProvider>
    );
}; 