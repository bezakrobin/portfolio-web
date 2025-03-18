import React from 'react';
import { Box } from '@mui/material';

interface CenteredContainerProps {
    children: React.ReactNode;
}

export const CenteredContainer: React.FC<CenteredContainerProps> = ({ children }) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                userSelect: "none",
            }}
        >
            {children}
        </Box>
    );
};