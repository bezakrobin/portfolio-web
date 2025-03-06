import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { HeaderText } from "./HeaderText.tsx";
import { Dash } from "./Dash.tsx";
import { AboutText } from "./AboutText.tsx";
import { ScrollDownButton } from "./ScrollDownButton.tsx";
import gsap from "gsap";

export const Header: React.FC = () => {
    const titleStRowRef = useRef<HTMLDivElement | null>(null);
    const titleNdRowRef = useRef<HTMLDivElement | null>(null);
    const aboutTextRef = useRef<HTMLDivElement | null>(null);

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
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
                height: "80vh",
                marginTop: "100px",
                display: "grid",
                gridTemplateRows: "auto auto",
                rowGap: "0px",
                padding: "40px",
            }}
        >
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
                <Box>
                    <HeaderText text="full" fontSize="400px" />
                </Box>
                <Box
                    sx={{
                        marginTop: "130px",
                    }}
                >
                    <Dash />
                </Box>
                <Box>
                    <HeaderText text="stack" fontSize="400px" />
                </Box>
            </Box>
            {/* Second Row: Left Column 3/4, Right Column 1/4 */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "4fr 2fr",
                    columnGap: "20px",
                }}
            >
                <Box ref={titleNdRowRef} sx={{ opacity: 0 }}>
                    <HeaderText text="developer" fontSize="400px" />
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
                    <AboutText text={"About I am a full-stack developer based in Prague, Czechia, passionate about building modern web experiences. I specialize in creating scalable applications using React, TypeScript, JavaScript and Python. I have worked with companies like ČEZ and Mibcon, and I am always seeking new challenges to drive digital innovation."} />
                    <ScrollDownButton />
                </Box>
            </Box>
        </Box>
    );
};