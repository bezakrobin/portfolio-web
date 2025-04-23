import React from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';

const ANIMATE_TITLE_CLASS = 'animate-title';
const ANIMATE_TEXT_BLOCK_CLASS = 'animate-text-block';

export const InterestsSection: React.FC = () => {
    const theme = useTheme();

    return (
        <Box mb={5}>
            <Typography
                className={ANIMATE_TITLE_CLASS}
                variant="overline" component="h2" gutterBottom
                sx={{
                    color: theme.palette.text.primary,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    fontSize: '15px',
                    fontFamily: 'Poppins Regular, sans-serif',
                    pb: 2
                }}
            >
                Interests
            </Typography>
            <Typography
                className={ANIMATE_TEXT_BLOCK_CLASS}
                variant="body1" sx={{ lineHeight: 1.6, fontSize: '20px' }}>
                Art Direction, Brand Strategy, Creative Development, E-Commerce, Webflow, 3D/Augmented Reality, Web3
            </Typography>
            <Typography
                className={ANIMATE_TEXT_BLOCK_CLASS}
                variant="body1" sx={{ lineHeight: 1.6, fontSize: '20px' }}>
                <Link href="https://github.com/bezakrobin" target="_blank" rel="noopener noreferrer" color="inherit" underline="none"
                      sx={{
                          color: theme.palette.text.primary,
                          fontFamily: 'Poppins SemiBold, sans-serif',
                          textTransform: 'uppercase',
                          transition: 'color 0.3s ease',
                          '&:hover': {
                              color: theme.palette.accent.hover
                          }
                      }}
                >
                    See my GitHub
                </Link>
            </Typography>
        </Box>
    );
}