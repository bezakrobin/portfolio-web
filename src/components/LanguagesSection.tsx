import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { InfiniteIconCarousel } from "@components/index";
import { Language } from '../types';

const ANIMATE_TITLE_CLASS = 'animate-title';
const ANIMATE_CAROUSEL_CLASS = 'animate-carousel';

interface LanguagesSectionProps {
    languages: Language[];
}

export const LanguagesSection: React.FC<LanguagesSectionProps> = ({ languages }) => {
    const theme = useTheme();

    return (
        <Box
            id="languages-frameworks"
            component="div"
            sx={{
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                mb: '50px',
            }}
        >
            <Typography
                className={ANIMATE_TITLE_CLASS}
                variant="overline" component="h2" gutterBottom
                sx={{
                    color: theme.palette.text.primary,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    fontSize: '15px',
                    fontFamily: 'Poppins Regular, sans-serif',
                    mb: 4,
                }}
            >
                Languages & Frameworks I use
            </Typography>
            <Box className={ANIMATE_CAROUSEL_CLASS}>
                <InfiniteIconCarousel languages={languages} />
            </Box>
        </Box>
    );
}
