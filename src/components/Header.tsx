import { useEffect, useRef } from "react";
import { Box, useTheme } from "@mui/material";
import { SectionHeader, HorizontalLine, ScrollDownButton, AboutSection } from "@components/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Header: React.FC = () => {
    const titleStRowRef = useRef<HTMLDivElement | null>(null);
    const titleNdRowRef = useRef<HTMLDivElement | null>(null);
    const aboutTextRef = useRef<HTMLDivElement | null>(null);
    const fullRef = useRef<HTMLDivElement | null>(null);
    const stackRef = useRef<HTMLDivElement | null>(null);
    const dashRef = useRef<HTMLDivElement | null>(null);
    const theme = useTheme();

    useEffect(() => {
        if (titleStRowRef.current) {
            gsap.fromTo(
                titleStRowRef.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
            );
        }
        if(titleNdRowRef.current) {
            gsap.fromTo(
                titleNdRowRef.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.9 }
            );
        }
        if(aboutTextRef.current) {
            gsap.fromTo(
                aboutTextRef.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1.1 }
            );
        }

        if (fullRef.current && stackRef.current && dashRef.current) {
            gsap.to(fullRef.current, {
                x: "-50vw",
                scrollTrigger: {
                    trigger: fullRef.current,
                    start: "0%",
                    end: "100%",
                    scrub: 1,
                    pin: false,
                },
            });

            gsap.to(stackRef.current, {
                x: "50vw",
                scrollTrigger: {
                    trigger: stackRef.current,
                    start: "0%",
                    end: "100%",
                    scrub: 1,
                    pin: false,
                },
            });

            gsap.to(dashRef.current, {
                scaleX: 7,
                duration: 2,
                scrollTrigger: {
                    trigger: dashRef.current,
                    start: "top 15%",
                    end: "100%",
                    scrub: 0.3,
                    pin: false,
                },
            });
        }
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                marginTop: "100px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Box sx={{ mx: "40px" }}>
                {/* First Row: Three Equal Columns */}
                <Box
                    ref={titleStRowRef}
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "auto 1fr auto",
                        columnGap: "20px",
                        opacity: 0
                    }}
                >
                    <Box ref={fullRef}>
                        <SectionHeader text="full" fontSize="400px" />
                    </Box>
                    <Box
                        ref={dashRef}
                        sx={{
                            marginTop: "130px",
                            display: "flex",
                            justifyContent: "center",
                            position: "relative",
                            left: "50%",
                            transform: "translateX(-50%)",
                        }}
                    >
                        <HorizontalLine width={"1000%"}/>
                    </Box>
                    <Box ref={stackRef}>
                        <SectionHeader text="stack" fontSize="400px" />
                    </Box>
                </Box>
            </Box>
            <Box>
                {/* Second Row: Left Column 3/4, Right Column 1/4 */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "4fr 2fr",
                        columnGap: "20px",
                        position: "relative",
                    }}
                >
                    <Box ref={titleNdRowRef} sx={{ opacity: 0 }}>
                        <SectionHeader text="developer" fontSize="400px" />
                    </Box>
                    <Box
                        ref={aboutTextRef}
                        sx={{
                            width: "85%",
                            display: "grid",
                            gridTemplateRows: "auto 1fr",
                            rowGap: "0px",
                            opacity: 0
                        }}
                    >
                        <AboutSection text={"About I am a full-stack developer based in Prague, Czechia, passionate about building modern web experiences. I specialize in creating scalable applications using React, TypeScript, JavaScript and Python. I have worked with companies like ČEZ and Mibcon, and I am always seeking new challenges to drive digital innovation."} />
                        <ScrollDownButton />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}