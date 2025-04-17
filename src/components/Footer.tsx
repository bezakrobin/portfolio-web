import React from 'react';
import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import { Divider } from "./Divider.tsx";
import { ParallaxText } from "./ParallaxText.tsx";
import { Email } from "./Email.tsx";


export const Footer: React.FC = () => {
    return (
        <Box>
            <Divider width="100%" thickness={2} marginY={2} animateFrom="left" />
            <Box
                sx={{
                    pt: 8,
                }}
            >
                <Marquee speed={100} gradient={false} pauseOnHover={true}>
                    <ParallaxText text={'LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING? — '} fontSize={'260px'} speed={0} />
                </Marquee>
            </Box>
            <Divider width="100%" thickness={2} marginY={2} animateFrom="right" />

            <Email email="robin.bezak.99@gmail.com" />

        </Box>
    );
};