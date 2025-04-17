import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { Tooltip } from "./Tooltip.tsx";

interface EmailProps {
    email: string;
}

export const Email: React.FC<EmailProps> = ({ email }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [label, setLabel] = useState("click to copy");


    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setLabel("copied");
            setTimeout(() => { setLabel("click to copy") }, 1500);
        }).catch((err: unknown) => {
            console.error('Failed to copy email: ', err);
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
                    color: '#AAAAAA',
                    transition: 'color 0.3s ease margin-bottom 0.2s ease-in-out',
                    fontFamily: "'Poppins SemiBold', sans-serif",
                    fontSize: '30px',
                    pt: 1,
                    '&:hover': {
                        color: '#CB450C',
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
                transform: 'translateX(-50%)',
                opacity: isHovered ? 1 : 0,
                visibility: isHovered ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
                pointerEvents: isHovered ? 'auto' : 'none',
            }}>
                <Tooltip
                    label={label}
                />
            </Box>
        </Box>
    );
};
