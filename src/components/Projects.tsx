import React, { useState } from "react";
import { Divider } from "@components/index";
import { Box } from "@mui/material";
import { DoubleLineText, ParallaxText } from "@components/index";

interface ProjectCategory {
    line1: string;
    line2: string;
}

interface Project {
    id: number;
    projectTitle: string;
    projectCategory: ProjectCategory;
    url: string;
}

interface FeaturedProjectsProps {
    projects: Project[];
    sectionTitle: string;
    id?: string;
}

export const Projects: React.FC<FeaturedProjectsProps> = ({ projects, sectionTitle, id }) => {
    const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

    return (
        <Box
            id={id}
            sx={{
                userSelect: "none",
            }}
        >
            {projects.map((project, index) => (
                <React.Fragment key={project.id}>
                    <Divider width="100%" thickness={2} marginY={2} />
                    <Box sx={{ display: "grid", gridTemplateColumns: "2fr 3fr 2fr 2fr", ml: "30px", mr: "30px" }}>
                        <Box />
                        {index === 0 ? (
                            <Box sx={{ pt: "30px" }}>
                                <DoubleLineText line1={sectionTitle.split(' ')[0]} line2={sectionTitle.split(' ')[1] + " (" + projects.length.toString() + ")"} lineHeight={1} />
                            </Box>
                        ) : (
                            <Box />
                        )}
                        <Box />
                        <Box sx={{ pt: "30px" }}>
                            <DoubleLineText
                                line1={project.projectCategory.line1}
                                line2={project.projectCategory.line2}
                                lineHeight={1}
                                isHovered={hoveredProjectId === project.id}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            py: "40px",
                            my: "40px"
                        }}
                        onMouseEnter={() => setHoveredProjectId(project.id)}
                        onMouseLeave={() => setHoveredProjectId(null)}
                        onClick={() => {
                            if (project.url) {
                                window.open(project.url, "_blank");
                            }
                        }}
                    >
                        <ParallaxText
                            text={Array(5).fill(project.projectTitle).join(" ")}
                            fontSize={"260px"}
                            direction={index % 2 ? "right" : "left"}
                            speed={1}
                        />
                    </Box>
                    {projects.length === index + 1 ? (
                        <Divider width="100%" thickness={2} marginY={2} />
                    ) : ( <> </> )}
                </React.Fragment>
            ))}
        </Box>
    );
};