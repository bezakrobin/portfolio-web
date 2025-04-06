import React from "react";
import { Divider } from "./Divider.tsx";
import { Box } from "@mui/material";
import { DoubleLineText } from "./DoubleLineText.tsx";
import { ParallaxText } from "./ParallaxText.tsx";

export const OtherProjects: React.FC = () => {
    const projects = [
        { projectTitle: "Project One Project One Project One Project One", projectCategory: { line1: "art direction /", line2: "creative development" }, url: "https://www.google.com" },
        { projectTitle: "Project Two Project Two Project Two Project Two", projectCategory: { line1: "branding /", line2: "visual design" }, url: "https://www.youtube.com" },
        { projectTitle: "Project Three Project Three Project Three Project Three", projectCategory: { line1: "ux design /", line2: "web development" }, url: "https://www.instagram.com" },
    ];

    return (
        <Box
            sx={{
                userSelect: "none",
            }}
        >
            {projects.map((project, index) => (
                <React.Fragment key={index}>
                    <Divider width="100%" thickness={2} marginY={2} animateFrom={index % 2 ? "right" : "left"} />
                    <Box sx={{ display: "grid", gridTemplateColumns: "2fr 3fr 2fr 2fr", ml: "30px", mr: "30px" }}>
                        <Box />
                        <Box />
                        <Box />
                        <Box sx={{ pt: "30px" }}>
                            <DoubleLineText line1={project.projectCategory.line1} line2={project.projectCategory.line2} color="#777777" lineHeight={1} />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            py: "40px",
                            my: "40px"
                        }}
                        onClick={() => {
                            if (project.url) {
                                window.open(project.url, "_blank");
                            }
                        }}
                    >
                        <ParallaxText
                            text={project.projectTitle}
                            fontSize={"260px"}
                            direction={index % 2 ? "right" : "left"}
                            speed={1}
                        />
                    </Box>
                    {projects.length === index + 1 ? (
                        <Divider width="100%" thickness={2} marginY={2} animateFrom={index % 2 ? "left" : "right"} />
                    ) : ( <> </> )}
                </React.Fragment>
            ))}
        </Box>
    );
};