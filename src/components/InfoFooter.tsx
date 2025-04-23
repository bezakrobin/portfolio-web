import React from 'react';
import { Box, Typography } from '@mui/material';

const ANIMATE_FOOTER_CLASS = 'animate-footer';

export const InfoFooter: React.FC = () => {
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
                variant="body1" sx={{ color: '#AAAAAA', lineHeight: 1.6, fontSize: '20px' }}>
                Got a question, proposal or project or want to work together on something? Feel free to reach out.
            </Typography>
        </Box>
    );
}