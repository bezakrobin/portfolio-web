import React from 'react';
import { ListItem, Typography } from '@mui/material';
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
    return (
        <ListItem
            className={CERTIFICATE_ITEM_CLASS}
            sx={{
                py: 1.25,
                px: 0,
                borderTop: '1px solid #AAAAAA',
                position: 'relative',
                cursor: 'pointer',
            }}
            onMouseEnter={onMouseEnter}
        >
            <Typography
                variant="body1"
                sx={{
                    color: isHovered ? '#CB450C' : '#AAAAAA',
                    fontSize: '20px',
                    transition: 'color 0.2s ease-in-out',
                    width: '100%',
                }}
            >
                {certificate.name}
            </Typography>
        </ListItem>
    );
};