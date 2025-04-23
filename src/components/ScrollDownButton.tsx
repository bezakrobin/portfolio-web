import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import gsap from "gsap";
import arrowIcon from "/src/assets/icons/arrow-down.svg";

export const ScrollDownButton: React.FC = () => {
    const iconRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const theme = useTheme();
    
    const baseStyle: React.CSSProperties = {
        width: "30px",
        height: "30px",
        fill: theme.palette.text.secondary,
        transition: "fill 0.3s ease-in-out",
        cursor: 'pointer',
    };

    const hoverStyle: React.CSSProperties = {
        fill: theme.palette.text.primary,
    };

    const combinedStyle = {
        ...baseStyle,
        ...(isHovered ? hoverStyle : {}),
    };

    useEffect(() => {
        if (iconRef.current) {
            gsap.to(iconRef.current, {
                y: 5,
                repeat: -1,
                yoyo: true,
                duration: 0.8,
                ease: "power1.inOut",
            });
        }
    }, []);

    const handleScrollDownClick = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: "#projects-section",
            ease: "power2.inOut",
        });
    };

    return (
        <Box
            onClick={handleScrollDownClick}
            sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0px",
                userSelect: "none",
                maxHeight: "100px",
            }}
        >
            <Typography
                sx={{
                    fontSize: "18px",
                    color: theme.palette.text.secondary,
                    fontFamily: "'Poppins Regular', sans-serif",
                    cursor: "pointer",
                    transition: "color 0.3s ease-in-out",
                    '&:hover': {
                        color: theme.palette.text.primary,
                    }
                }}
            >
                Scroll down
            </Typography>

            <img
                ref={iconRef}
                src={arrowIcon}
                alt="Scroll Down Arrow"
                style={combinedStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
        </Box>
    );
};
