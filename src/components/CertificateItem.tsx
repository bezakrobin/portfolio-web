import React from 'react';
import { ListItem, Typography, useTheme } from '@mui/material';
import { Certificate } from '../types';

const CERTIFICATE_ITEM_CLASS = 'certificate-list-item';

interface CertificateItemProps {
    certificate: Certificate;
    isHovered: boolean;
    onMouseEnter: () => void;
}

export const CertificateItem: React.FC<CertificateItemProps> = ({
                                                                                          certificate,
                                                                                          isHovered,
                                                                                          onMouseEnter,
                                                                                      }) => {
    const theme = useTheme();

    return (
        <ListItem
            className={CERTIFICATE_ITEM_CLASS}
            sx={{
                py: 1.25,
                px: 0,
                borderTop: `1px solid ${theme.palette.text.secondary}`,
                position: 'relative',
                cursor: 'pointer',
            }}
            onMouseEnter={onMouseEnter}
        >
            <Typography
                variant="body1"
                sx={{
                    color: isHovered ? theme.palette.accent.hover : theme.palette.text.primary,
                    fontSize: '20px',
                    transition: 'color 0.2s ease-in-out',
                    width: '100%',
                }}
            >
                {certificate.title}
            </Typography>
        </ListItem>
    );
};