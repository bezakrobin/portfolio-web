import React, { useState } from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { Tooltip } from "@components/index";

interface EmailButtonProps {
    email: string;
}

export const EmailButton: React.FC<EmailButtonProps> = ({ email }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [label, setLabel] = useState("click to copy");
    const theme = useTheme();

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setLabel("copied");
            setTimeout(() => { setLabel("click to copy") }, 1500);
        }).catch((err: unknown) => {
            console.error('Failed to copy email: ', err);
            setLabel("copy failed");
            setTimeout(() => { setLabel("click to copy") }, 1500);
        });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                py: 6,
                position: 'relative',
            }}
        >
            <Typography
                component="span"
                sx={{
                    cursor: 'pointer',
                    color: theme.palette.text.primary,
                    transition: 'color 0.3s ease',
                    fontFamily: "'Poppins SemiBold', sans-serif",
                    fontSize: '30px',
                    pt: 1,
                    '&:hover': {
                        color: theme.palette.accent.hover,
                    },
                    mb: 2
                }}
                onClick={handleCopyEmail}
                onMouseEnter={() => { setIsHovered(true)} }
                onMouseLeave={() => {
                    setIsHovered(false);
                    if (label.toLowerCase() === "copied") {
                        setTimeout(() => { setLabel("click to copy") }, 500);
                    }
                }}
            >
                {email}
            </Typography>
            <Box sx={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: isHovered ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(10px)',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                pointerEvents: isHovered ? 'auto' : 'none',
            }}>
                <Tooltip
                    label={label}
                />
            </Box>
        </Box>
    );
};
