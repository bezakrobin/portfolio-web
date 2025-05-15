import { useState, useEffect, useRef } from "react";
import { Box, IconButton, Drawer, List, ListItem, useTheme, Divider, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Logo, Button, Status, DarkModeSwitch, DoubleLineText } from "@components/index";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useData } from '../contexts/DataContext';

gsap.registerPlugin(ScrollToPlugin);

export const MobileNavigation: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<'main' | 'featured' | 'other'>('main');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { featuredProjects, otherProjects } = useData();

    const mainMenuRef = useRef<HTMLDivElement>(null);
    const featuredListRef = useRef<HTMLDivElement>(null);
    const otherListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isDrawerOpen) {
            if (mainMenuRef.current) gsap.set(mainMenuRef.current, { x: 0, opacity: 0, display: 'none' });
            if (featuredListRef.current) gsap.set(featuredListRef.current, { x: 80, opacity: 0, display: 'none' });
            if (otherListRef.current) gsap.set(otherListRef.current, { x: 80, opacity: 0, display: 'none' });
            return;
        }

        if (mainMenuRef.current) gsap.set(mainMenuRef.current, { display: 'none' });
        if (featuredListRef.current) gsap.set(featuredListRef.current, { display: 'none' });
        if (otherListRef.current) gsap.set(otherListRef.current, { display: 'none' });

        if (activeMenu === 'main' && mainMenuRef.current) {
            const previousX = gsap.getProperty(mainMenuRef.current, "x") as number;
            const startX = (previousX === -80) ? -80 : 0;

            gsap.set(mainMenuRef.current, { display: 'flex', x: startX, opacity: 0 });
            gsap.to(mainMenuRef.current, { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' });

        } else if (activeMenu === 'featured' && featuredListRef.current) {
            gsap.set(featuredListRef.current, { display: 'flex', x: 80, opacity: 0 });
            gsap.to(featuredListRef.current, { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' });
        } else if (activeMenu === 'other' && otherListRef.current) {
            gsap.set(otherListRef.current, { display: 'flex', x: 80, opacity: 0 });
            gsap.to(otherListRef.current, { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' });
        }
    }, [activeMenu, isDrawerOpen]);

    const handleMenuButton = (menu: 'featured' | 'other') => {
        if (mainMenuRef.current) {
            gsap.to(mainMenuRef.current, {
                x: -80,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    if(mainMenuRef.current) gsap.set(mainMenuRef.current, { display: 'none' });
                    setActiveMenu(menu);
                }
            });
        }
    };

    const handleBack = () => {
        const currentMenuRef = activeMenu === 'featured' ? featuredListRef.current : otherListRef.current;
        if (currentMenuRef) {
            gsap.to(currentMenuRef, {
                x: 80,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    if(currentMenuRef) gsap.set(currentMenuRef, { display: 'none' });
                    setActiveMenu('main');
                }
            });
        }
    };

    const createScrollHandler = (sectionId: string) => () => {
        setIsDrawerOpen(false);
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: sectionId, offsetY: 50 },
            ease: "power2.inOut",
        });
    };

    const handleContactClick = createScrollHandler("#contact-section");
    const handleAboutClick = createScrollHandler("#about-section");
    const handleCommunityClick = createScrollHandler("#community-section");
    const handleCertificatesClick = createScrollHandler("#certs-col");
    const handleInterestsClick = createScrollHandler("#interests-col");
    const handleIcebreakersClick = createScrollHandler("#icebreakers-section");
    const handleLanguagesClick = createScrollHandler("#languages-frameworks");

    const handleProjectClick = (url: string) => {
        setIsDrawerOpen(false);
        if (url) {
            window.open(url, "_blank");
        }
    };

    return (
        <Box sx={{
            position: isMobile ? "fixed" : "absolute",
            width: "100%",
            zIndex: 1000,
            top: 0,
            backgroundColor: isMobile && isScrolled
                ? `${theme.palette.background.default}CC`
                : 'transparent',
            backdropFilter: isMobile && isScrolled ? 'blur(8px)' : 'none',
            WebkitBackdropFilter: isMobile && isScrolled ? 'blur(8px)' : 'none',
            px: { xs: 2, md: "30px" },
            py: { xs: 1, md: "20px" },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease',
            boxShadow: isMobile && isScrolled
                ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                : 'none'
        }}>
            <Box sx={{ ml: { xs: 0, md: "30px" } }}>
                <Logo />
            </Box>
            <Box sx={{ mr: { xs: 4, md: "30px" } }}>
                <IconButton
                    onClick={() => {
                        setActiveMenu('main');
                        setIsDrawerOpen(true);
                    }}
                    sx={{
                        color: theme.palette.text.secondary,
                        padding: "4px",
                        '& .MuiSvgIcon-root': {
                            fontSize: '2rem'
                        }
                    }}
                >
                    <MenuIcon />
                </IconButton>
            </Box>

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => {
                    setIsDrawerOpen(false);
                    setActiveMenu('main');
                }}
                PaperProps={{
                    sx: {
                        backgroundColor: theme.palette.background.default,
                        width: '360px',
                        height: '100%',
                        overflow: 'hidden',
                    }
                }}
            >
                <Box sx={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                    <List sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        p: 3,
                        pt: 4,
                        height: '100%',
                        width: '100%',
                        boxSizing: 'border-box',
                    }}>
                        <ListItem sx={{ p: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
                            <Logo />
                            <DarkModeSwitch />
                        </ListItem>
                        <Divider sx={{ borderColor: theme.palette.text.secondary, flexShrink: 0, my: 1 }} />
                        <ListItem sx={{ p: 0, flexShrink: 0 }}>
                            <DoubleLineText
                                line1="almost full stack dev"
                                line2="folio / 2024 - 2025"
                                sx={{ fontSize: '14px' }}
                            />
                        </ListItem>
                        <ListItem sx={{ p: 0, flexShrink: 0 }}>
                            <Status />
                        </ListItem>
                        <Divider sx={{ borderColor: theme.palette.text.secondary, flexShrink: 0, my: 1 }} />

                        <Box sx={{ position: 'relative', flexGrow: 1, overflowY: 'auto', overflowX: 'hidden' }}>
                            <Box ref={mainMenuRef} sx={{
                                position: 'absolute', top: 0, left: 0, width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                            }}>
                                <Button label="about" onClick={handleAboutClick} fullWidth />
                                <Button
                                    label="featured projects"
                                    onClick={() => handleMenuButton('featured')}
                                    fullWidth
                                    endIcon={<KeyboardArrowRightIcon sx={{ color: theme.palette.text.secondary }} />}
                                />
                                <Button label="community contributions" onClick={handleCommunityClick} fullWidth />
                                <Button
                                    label="other projects"
                                    onClick={() => handleMenuButton('other')}
                                    fullWidth
                                    endIcon={<KeyboardArrowRightIcon sx={{ color: theme.palette.text.secondary }} />}
                                />
                                <Button label="certificates" onClick={handleCertificatesClick} fullWidth />
                                <Button label="interests" onClick={handleInterestsClick} fullWidth />
                                <Button label="icebreakers" onClick={handleIcebreakersClick} fullWidth />
                                <Button label="languages & frameworks i use" onClick={handleLanguagesClick} fullWidth />
                                <Button label="contact" onClick={handleContactClick} fullWidth />
                            </Box>

                            <Box ref={featuredListRef} sx={{
                                position: 'absolute', top: 0, left: 0, width: '100%',
                                display: 'none',
                                flexDirection: 'column',
                                gap: 1,
                            }}>
                                <Button
                                    label="back"
                                    onClick={handleBack}
                                    fullWidth
                                    endIcon={<KeyboardArrowLeftIcon sx={{ color: theme.palette.text.secondary }} />}
                                />
                                {featuredProjects.map((project) => (
                                    <Button
                                        key={project.id}
                                        label={project.projectTitle}
                                        onClick={() => handleProjectClick(project.url)}
                                        fullWidth
                                    />
                                ))}
                            </Box>

                            <Box ref={otherListRef} sx={{
                                position: 'absolute', top: 0, left: 0, width: '100%',
                                display: 'none',
                                flexDirection: 'column',
                                gap: 1,
                            }}>
                                <Button
                                    label="back"
                                    onClick={handleBack}
                                    fullWidth
                                    endIcon={<KeyboardArrowLeftIcon sx={{ color: theme.palette.text.secondary }} />}
                                />
                                {otherProjects.map((project) => (
                                    <Button
                                        key={project.id}
                                        label={project.projectTitle}
                                        onClick={() => handleProjectClick(project.url)}
                                        fullWidth
                                    />
                                ))}
                            </Box>
                        </Box>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};
