import React, {useEffect, useState} from 'react';
import { Box, Link, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { Divider } from "./Divider.tsx";
import { ParallaxText } from "./ParallaxText.tsx";
import { Email } from "./Email.tsx";
import { NavButton } from "./NavButton.tsx";

interface SocialLink {
    id: string;
    name: string;
    url: string;
}

interface FooterProps {
    socials: SocialLink[];
}

export const Footer: React.FC<FooterProps> = ({ socials }) => {
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
            <Divider width="100%" thickness={2} marginY={2} />
            <Box
                sx={{
                    pt: 8,
                }}
                onClick={() => {
                    window.location.href = 'mailto:robin.bezak.99@gmail.com?subject=Inquiry%20from%20Portfolio%20Website';
                }}
            >
                <Marquee speed={100} gradient={false} pauseOnHover={true}>
                    <ParallaxText text={'LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING? — '} fontSize={'260px'} speed={0} />
                </Marquee>
            </Box>
            <Divider width="100%" thickness={2} marginY={2} />

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
                        <span style={{ fontWeight: 800 }}>Coded by</span>
                        <Link href="https://github.com/bezakrobin" target="_blank" rel="noopener noreferrer" color="inherit" underline="none"
                              sx={{
                                  color: '#777777',
                                  transition: 'color 0.3s ease',
                                  '&:hover': {
                                      color: '#CB450C'
                                  }
                              }}
                        >
                            {' '}Robin Bezak
                        </Link>
                    </Typography>
                </Box>
            </Box>

        </Box>
    );
};