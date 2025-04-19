import React, { useState } from "react";
import { Divider } from "./Divider.tsx";
import { Box } from "@mui/material";
import { DoubleLineText } from "./DoubleLineText.tsx";
import { ParallaxText } from "./ParallaxText.tsx";

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

interface OtherProjectsProps {
    projects: Project[];
}

export const OtherProjects: React.FC<OtherProjectsProps> = ({ projects }) => {
    const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

    return (
        <Box
            sx={{
                userSelect: "none",
            }}
        >
            {projects.map((project, index) => (
                <React.Fragment key={project.id}>
                    <Divider width="100%" thickness={2} marginY={2} />
                    <Box sx={{ display: "grid", gridTemplateColumns: "2fr 3fr 2fr 2fr", ml: "30px", mr: "30px" }}>
                        <Box />
                        <Box />
                        <Box />
                        <Box sx={{ pt: "30px" }}>
                            <DoubleLineText
                                line1={project.projectCategory.line1}
                                line2={project.projectCategory.line2}
                                color="#777777"
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