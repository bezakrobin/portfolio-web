import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import arrowIcon from "/src/assets/icons/arrow-down.svg";

export const ScrollDownButton: React.FC = () => {
    const iconRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (iconRef.current) {
            gsap.to(iconRef.current, {
                y: 10,
                repeat: -1,
                yoyo: true,
                duration: 0.8,
                ease: "power1.inOut",
            });
        }
    }, []);

    return (
        <Box
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
                    color: "#777777",
                    fontFamily: "'Poppins Regular', sans-serif",
                }}
            >
                Scroll down
            </Typography>

            <img ref={iconRef} src={arrowIcon} alt="Scroll Down Arrow" style={{ width: "30px", height: "30px", fill: "#777777" }} />
        </Box>
    );
};
