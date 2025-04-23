import React from 'react';
import { isAvailableForHire } from '@/data/data';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


export const Status: React.FC = () => {

    const statusText = isAvailableForHire ? 'Available for hire' : 'Currently not available for hire';

    const dotColor = isAvailableForHire ? '#34D399' : '#EF4444';

    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            title={`Current Status: ${statusText}`}
            sx={{
                padding: '5px 0',
            }}
        >
            <Box
                component="span"
                sx={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    bgcolor: dotColor,
                    display: 'inline-block',
                }}
                aria-hidden="true"
            />

            <Typography
                variant="body2"
                sx={{
                    fontSize: '1rem',
                    color: isAvailableForHire ? '#AAAAAA' : '#777777',
                    fontFamily: 'Poppins Regular, sans-serif',
                }}
            >
                {statusText}
            </Typography>
        </Stack>
    );
};