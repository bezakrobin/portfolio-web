import { useEffect, useRef } from "react";
import { AppBar, Box, Toolbar, useTheme, useMediaQuery } from "@mui/material";
import { DoubleLineText, Logo, Button, Status, DarkModeSwitch } from "@components/index";
import { MobileNavigation } from "./MobileNavigation";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const NavigationBar: React.FC = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

    if (isMobile) {
        return <MobileNavigation />;
    }

    return (
        <Box ref={navRef} sx={{ position: "absolute", width: "100%", zIndex: 1000, top: 0, opacity: 0 }}>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    boxShadow: "none",
                    userSelect: "none",
                    backgroundColor: 'transparent'
                }}
            >
                <Toolbar 
                    disableGutters
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr 1fr" },
                        alignItems: 'center',
                        pt: { xs: "10px", md: "20px" },
                        px: { xs: 2, md: "30px" },
                        pb: { xs: 1, md: 2 },
                        backgroundColor: 'transparent',
                        minHeight: 'auto',
                        gap: { xs: 1, md: 0 }
                    }}
                >
                    <Logo />
                    <DoubleLineText 
                        line1="almost full stack dev" 
                        line2="folio / 2024 - 2025" 
                        sx={{ 
                            display: { xs: 'none', md: 'block' },
                            justifySelf: 'center'
                        }}
                    />
                    <Box sx={{ 
                        justifySelf: { xs: 'flex-end', md: "center" },
                        display: 'flex',
                        alignItems: 'center'
                    }}>
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