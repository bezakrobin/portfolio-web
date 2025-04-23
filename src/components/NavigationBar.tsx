import { useEffect, useRef } from "react";
import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import { DoubleLineText, Logo, Button, Status, DarkModeSwitch } from "@components/index";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const NavigationBar: React.FC = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const theme = useTheme();

    useEffect(() => {
        if (navRef.current) {
            gsap.fromTo(
                navRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.2}
            );
        }
    }, []);

    const handleContactClick = () => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: "#contact-section", offsetY: 50 },
            ease: "power2.inOut",
        });
    };

    return (
        <Box ref={navRef} sx={{ position: "absolute", width: "100%", zIndex: 1000, top: 0, opacity: 0 }}>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    boxShadow: "none",
                    userSelect: "none",
                    backgroundColor: theme.palette.background.default 
                }}
            >
                <Toolbar 
                    disableGutters
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        alignItems: 'center',
                        pt: "20px",
                        ml: "30px",
                        mr: "30px",
                        pb: 2,
                        backgroundColor: 'transparent',
                        minHeight: 'auto'
                    }}
                >
                    <Logo />
                    <DoubleLineText line1="almost full stack dev" line2="folio / 2024 - 2025" />
                    <Box sx={{ justifySelf: "center" }}>
                        <Status />
                    </Box>
                    <Box sx={{
                        justifySelf: "end",
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}>
                        <Button label="contact" onClick={handleContactClick} />
                        <DarkModeSwitch />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}