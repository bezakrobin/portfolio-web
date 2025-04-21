import React from 'react';
import { Box, Typography } from '@mui/material';
import { InfiniteIconCarousel } from "../InfiniteIconCarousel";
import { Language } from '../../types';

const ANIMATE_TITLE_CLASS = 'animate-title';
const ANIMATE_CAROUSEL_CLASS = 'animate-carousel';

interface LanguagesSectionProps {
    languages: Language[];
}

export const LanguagesSection: React.FC<LanguagesSectionProps> = ({ languages }) => (
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
                color: '#AAAAAA',
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
