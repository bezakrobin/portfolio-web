import React from "react";
import { Box, useTheme } from "@mui/material";
import gsap from "gsap";
import { useParallax } from '../utils/hooks/useParallax';

interface ParallaxTextProps {
    text: string;
    speed?: number;
    direction?: "left" | "right";
    fontSize: string;
}

export const ParallaxText: React.FC<ParallaxTextProps> = ({ text, speed = 1, direction = "left", fontSize }) => {
    const theme = useTheme();
    const textRef = useParallax({ speed, direction });

    const handleMouseEnter = () => {
        gsap.to(textRef.current, { backgroundPosition: "0% 100%", duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
        gsap.to(textRef.current, { backgroundPosition: "0% 0%", duration: 0.3, ease: "power2.out" });
    };

    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    fontSize: fontSize,
                    lineHeight: fontSize,
                    cursor: "pointer",
                    color: theme.palette.text.secondary,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundImage: `linear-gradient(to top, ${theme.palette.accent.hover} 0%, ${theme.palette.accent.hover} 50%, ${theme.palette.text.secondary} 51%, ${theme.palette.text.secondary} 100%)`,
                    backgroundSize: "100% 200%",
                    backgroundPosition: "0% 0%",
                }}
                ref={textRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {Array(5).fill(text).join(" ")}
            </Box>
        </Box>
    );
};
