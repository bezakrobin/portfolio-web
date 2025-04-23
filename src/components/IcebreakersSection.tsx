import React from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';

const ANIMATE_TITLE_CLASS = 'animate-title';
const ANIMATE_TEXT_BLOCK_CLASS = 'animate-text-block';

interface IcebreakersSectionProps {
    onGetInTouchClick: () => void;
}

export const IcebreakersSection: React.FC<IcebreakersSectionProps> = ({ onGetInTouchClick }) => {
    const theme = useTheme();

    return (
        <Box>
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
                ICEBREAKERS
            </Typography>
            <Typography
                className={ANIMATE_TEXT_BLOCK_CLASS}
                variant="body1" sx={{ lineHeight: 1.6, fontSize: '20px'}}>
                I listen to Drum & Bass and Alternative music all the time. Check out what I'm into on my{' '}
                <Link href={"https://open.spotify.com/playlist/5e65hMw6lgqkxScPH5E6ol"}
                      target="_blank" rel="noopener noreferrer" color="inherit" underline="none"
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
                    Spotify PLAYLIST
                </Link>
                . I also love travelling and good food—work with me so I can fund this!{' '}
                <Link color="inherit" underline="none"
                      sx={{
                          cursor: 'pointer',
                          color: theme.palette.text.primary,
                          fontFamily: 'Poppins SemiBold, sans-serif',
                          textTransform: 'uppercase',
                          transition: 'color 0.3s ease',
                          '&:hover': {
                              color: theme.palette.accent.hover
                          }
                      }}
                      onClick={onGetInTouchClick}
                >
                    GET IN TOUCH
                </Link>
                {' '}to know more about me.
            </Typography>
        </Box>
    );
}