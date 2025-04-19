import React, { useEffect, useRef } from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { DoubleLineText } from "./DoubleLineText.tsx";
import { NavButton } from "./NavButton.tsx";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const AppNavigationBar: React.FC = () => {
    const navRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (navRef.current) {
            gsap.fromTo(
                navRef.current,
                { opacity: 0, y: -100 },
                { opacity: 1, y: 0, duration: 0.3, ease: "power2.out"}
            );
        }
    }, []);

    const handleContactClick = () => {
        gsap.to(window, {
            duration: 4,
            scrollTo: "#contact-section",
            ease: "power2.inOut",
        });
    };

    return (
        <Box ref={navRef} sx={{ position: "absolute", width: "100%", zIndex: 1000, top: 0, transform: "translateY(-100px)" }}>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    userSelect: "none",
                }}
            >
                <Toolbar sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", pt: "20px", ml: "30px", mr: "30px" }}>
                    <DoubleLineText line1="robin" line2="bezak" color="#AAAAAA" />
                    <DoubleLineText line1="almost full stack dev" line2="folio / 2024 - 2025" color="#777777" />
                    <Box />
                    <Box sx={{ justifySelf: "end" }}>
                        <NavButton label="contact" onClick={handleContactClick} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
