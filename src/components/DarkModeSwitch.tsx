import React from 'react';
import { IconButton, Box } from '@mui/material';
import { Sun, Moon } from 'lucide-react';
import { keyframes } from '@emotion/react';

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

interface DarkModeSwitchProps {
    currentTheme: 'light' | 'dark';
    onToggle: () => void;
}

export const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({ currentTheme, onToggle }) => {
    const isDark = currentTheme === 'dark';
    const IconComponent = isDark ? Sun : Moon;
    const iconKey = isDark ? 'sun-icon' : 'moon-icon';

    return (
        <IconButton
            onClick={onToggle}
            disableRipple
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            size="medium"
            sx={{
                color: '#777777',
                borderRadius: '50%',
                padding: '8px',
                transition: 'transform 0.25s ease-out, background-color 0.25s ease-out, color 0.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.15) rotate(10deg)',
                    backgroundColor: 'transparent',
                    color: '#CB450C',
                },
                '&:active': {
                    transform: 'scale(0.95)',
                }
            }}
        >
            <Box
                key={iconKey}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: `${rotateFadeIn} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                }}
            >
                <IconComponent
                    size={28}
                    strokeWidth={2}
                />
            </Box>
        </IconButton>
    );
};