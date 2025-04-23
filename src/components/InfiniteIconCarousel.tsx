import React from 'react';
import Box from '@mui/material/Box';
import Marquee from "react-fast-marquee";
import { Language } from '../types';
import { useTheme } from '@mui/material';

interface InfiniteIconCarouselProps {
    speed?: number;
    languages?: Language[];
}

export const InfiniteIconCarousel: React.FC<InfiniteIconCarouselProps> = ({ speed = 20, languages }) => {
    const theme = useTheme();

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ width: '100%' }}>
                <Marquee
                    speed={speed}
                    gradient={true}
                    gradientColor={theme.palette.background.default}
                    gradientWidth={50}
                    pauseOnHover={true}
                    style={{
                        overflow: 'hidden',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                    }}
                >
                    {languages?.map((lang) => (
                        <Box
                            key={lang.name}
                            aria-label={lang.name}
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                mx: 2.5,
                                cursor: 'pointer',
                                textDecoration: 'none',
                                color: 'inherit',
                                flexShrink: 0,
                                transition: (theme) => theme.transitions.create('transform', {
                                    duration: theme.transitions.duration.short,
                                }),
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={lang.icon}
                                alt={`${lang.name} logo`}
                                sx={{
                                    height: '40px',
                                    width: 'auto',
                                    verticalAlign: 'middle',
                                }}
                            />
                        </Box>
                    ))}
                </Marquee>
            </Box>
        </Box>
    );
};