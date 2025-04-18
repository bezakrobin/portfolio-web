import React, {useEffect, useState} from 'react';
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { Divider } from "./Divider.tsx";
import { ParallaxText } from "./ParallaxText.tsx";
import { Email } from "./Email.tsx";
import { NavButton } from "./NavButton.tsx";

const socials = [
    {
        id: 'soc-1',
        name: 'Instagram',
        url: 'https://www.instagram.com/robin.bezak/'
    },
    {
        id: 'soc-2',
        name: 'Threads',
        url: 'https://www.instagram.com/robin.bezak/'
    },
    {
        id: 'soc-3',
        name: 'TikTok',
        url: 'https://www.instagram.com/robin.bezak/'
    },
    {
        id: 'soc-4',
        name: 'GitHub',
        url: 'https://www.instagram.com/robin.bezak/'
    }
];

export const Footer: React.FC = () => {
    const [hours, setHours] = useState<string>('');
    const [minutes, setMinutes] = useState<string>('');
    const [showColon, setShowColon] = useState<boolean>(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('cs-CZ', {
                timeZone: 'Europe/Prague',
                hour: '2-digit',
                minute: '2-digit'
            });
            const [currentHours, currentMinutes] = timeString.split(':');

            setHours(currentHours);
            setMinutes(currentMinutes);
            setShowColon(prevShowColon => !prevShowColon);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Box
            id="contact-section"
            sx={{
                userSelect: 'none',
            }}
        >
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

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    flexWrap: 'wrap',
                    px: 5,
                    mt: 4,
                    gap: 2,
                    pb: 8,
                    pt: 4,
                }}
            >
                <Box sx={{
                    width: { xs: '100%', sm: 'auto' },
                    minWidth: { sm: '25%' },
                    textAlign: { xs: 'center', sm: 'left' },
                    textTransform: 'uppercase',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                }}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: '16px',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Prague, CZ
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: '16px',
                            fontFamily: "'Poppins SemiBold', sans-serif",
                        }}
                    >
                        {hours}{showColon ? ':' : ' '}{minutes}
                    </Typography>
                </Box>

                <Box sx={{
                    width: { xs: '100%', sm: 'auto' },
                    minWidth: { sm: '25%' },
                    textAlign: 'center',
                    fontFamily: "'Poppins Regular', sans-serif",
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1,
                    mt: -1,
                }}>
                    {socials.map(social => (
                        <NavButton key={social.id} label={social.name} onClick={ () => window.open(social.url, '_blank', 'noopener,noreferrer') } />
                    ))}
                </Box>

                <Box sx={{
                    width: { xs: '100%', sm: 'auto' },
                    minWidth: { sm: '25%' },
                    textAlign: { xs: 'center', sm: 'right' },
                    textTransform: 'normal',
                }}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: '16px',
                        }}
                    >
                        <span style={{ fontWeight: 800 }}>Coded by</span> Robin Bezak
                    </Typography>
                </Box>
            </Box>

        </Box>
    );
};