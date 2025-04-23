import React from 'react';
import { useData } from '../contexts/DataContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material';

export const Status: React.FC = () => {
    const { isAvailableForHire } = useData();
    const theme = useTheme();

    const statusText = isAvailableForHire ? 'Available for hire' : 'Currently not available for hire';

    const dotColor = isAvailableForHire ? theme.palette.success.main : theme.palette.error.main;

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
                    color: isAvailableForHire ? theme.palette.text.primary : theme.palette.text.secondary,
                    fontFamily: 'Poppins Regular, sans-serif',
                }}
            >
                {statusText}
            </Typography>
        </Stack>
    );
};