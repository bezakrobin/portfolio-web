import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
    onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const textRef = useRef<HTMLSpanElement | null>(null);
    const boxRef = useRef<HTMLDivElement | null>(null);
    const theme = useTheme();

    useEffect(() => {
        if (textRef.current && boxRef.current) {
            gsap.fromTo(
                textRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    ease: "power1.inOut",
                    onComplete: () => {
                        gsap.fromTo(
                            textRef.current,
                            { color: theme.palette.text.secondary },
                            {
                                color: theme.palette.text.primary,
                                repeat: 2,
                                yoyo: true,
                                duration: 1.2,
                                ease: "power1.inOut",
                                onComplete: () => {
                                    gsap.to(boxRef.current, {
                                        opacity: 0,
                                        duration: 1,
                                        ease: "power1.out",
                                        onComplete: onComplete
                                    });
                                }
                            }
                        );
                    }
                }
            );
        }
    }, [onComplete]);

    return (
        <Box
            ref={boxRef}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: theme.palette.background.default,
                userSelect: "none",
                paddingRight: "40px",
            }}
        >
            <Typography
                ref={textRef}
                sx={{
                    opacity: 0,
                    fontSize: "350px",
                    color: theme.palette.text.secondary,
                    fontFamily: "'Round 8', sans-serif",
                }}
            >
                RB
            </Typography>
        </Box>
    );
};