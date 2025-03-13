import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";

interface DividerProps {
    thickness?: number;
    marginY?: number;
    width?: string;
    animateFrom?: "left" | "right";
}

export const Divider: React.FC<DividerProps> = ({ thickness = 2, marginY = 4, width = "100%", animateFrom = "left" }) => {
    const dividerRef = useRef<HTMLDivElement | null>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && dividerRef.current && !hasAnimated.current) {
                    hasAnimated.current = true;
                    gsap.fromTo(
                        dividerRef.current,
                        { scaleX: 0 },
                        { scaleX: 1, duration: 2, ease: "power2.out" }
                    );
                }
            },
            { threshold: 0.1 }
        );

        if (dividerRef.current) {
            observer.observe(dividerRef.current);
        }

        return () => {
            if (dividerRef.current) {
                observer.unobserve(dividerRef.current);
            }
        };
    }, []);

    return (
        <Box
            sx={{
                px: "40px",
            }}
        >
            <Box
                ref={dividerRef}
                sx={{
                    height: thickness,
                    backgroundColor: "#777777",
                    marginY: marginY,
                    width: width,
                    transform: "scaleX(0)",
                    transformOrigin: animateFrom === "right" ? "100% 50%" : "0% 50%",
                }}
            />
        </Box>
    );
};