import React from 'react';
import { IconButton, Box } from '@mui/material';
import { Sun, Moon } from 'lucide-react';
import { keyframes, useTheme } from '@mui/material';
import { useDarkMode } from '../contexts/DarkModeContext';

const rotateFadeIn = keyframes`
  0% {
    transform: rotate(-60deg) scale(0.8);
    opacity: 0;
  }
  100% {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
`;

export const DarkModeSwitch: React.FC = () => {
    const { currentTheme, toggleTheme } = useDarkMode();
    const isDark = currentTheme === 'dark';
    const IconComponent = isDark ? Sun : Moon;
    const iconKey = isDark ? 'sun-icon' : 'moon-icon';
    const theme = useTheme();

    return (
        <IconButton
            onClick={toggleTheme}
            disableRipple
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            size="medium"
            sx={{
                color: theme.palette.text.secondary,
                borderRadius: '50%',
                padding: '8px',
                transition: 'transform 0.25s ease-out, background-color 0.25s ease-out, color 0.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.15) rotate(10deg)',
                    backgroundColor: 'transparent',
                    color: theme.palette.accent.hover,
                },
                '&:active': {
                    transform: 'scale(0.95)',
                }
            }}
        >
            <Box
                sx={{
                    animation: `${rotateFadeIn} 0.3s ease-out`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                key={iconKey}
            >
                <IconComponent size={28} strokeWidth={2} />
            </Box>
        </IconButton>
    );
};