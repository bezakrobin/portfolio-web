import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const ANIMATE_FOOTER_CLASS = 'animate-footer';

export const InfoFooter: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            id="footer-box"
            component="footer"
            sx={{
                textAlign: 'center',
                maxWidth: '600px',
                mx: 'auto',
            }}
        >
            <Typography
                className={ANIMATE_FOOTER_CLASS}
                variant="body1" sx={{ color: theme.palette.text.primary, lineHeight: 1.6, fontSize: '20px' }}>
                Got a question, proposal or project or want to work together on something? Feel free to reach out.
            </Typography>
        </Box>
    );
}