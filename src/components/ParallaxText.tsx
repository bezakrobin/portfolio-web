import React from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import { useParallax } from '../utils/hooks/useParallax';

interface ParallaxTextProps {
    text: string;
    speed?: number;
    direction?: "left" | "right";
    fontSize: string;
}

export const ParallaxText: React.FC<ParallaxTextProps> = ({ text, speed = 1, direction = "left", fontSize }) => {
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
                    color: "#777777",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundImage: "linear-gradient(to top, #CB450C 0%, #CB450C 50%, #777777 51%, #777777 100%)",
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
