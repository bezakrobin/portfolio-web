import React from "react";
import { Box } from "@mui/material";
import { NavigationBar, Header, Projects, CommunityContributions, InfoSection, Footer } from "@components/index";
import { DividerDirectionProvider } from "@contexts/DividerDirectionContext";
import { useData } from '../contexts/DataContext';

export const LandingPage: React.FC = () => {
    const { featuredProjects, otherProjects, certificates, socials } = useData();
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