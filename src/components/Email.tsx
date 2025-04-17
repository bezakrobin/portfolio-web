import React from 'react';
import { Typography, Box } from '@mui/material';

interface EmailProps {
    email: string;
}

export const Email: React.FC<EmailProps> = ({ email }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                py: 6,
            }}
        >
            <Typography
                component="span"
                sx={{
                    cursor: 'pointer',
                    color: '#AAAAAA',
                    transition: 'color 0.3s ease',
                    fontFamily: "'Poppins SemiBold', sans-serif",
                    fontSize: '30px',
                    '&:hover': {
                        color: '#CB450C',
                    },
                }}
            >
                {email}
            </Typography>
        </Box>
    );
};
