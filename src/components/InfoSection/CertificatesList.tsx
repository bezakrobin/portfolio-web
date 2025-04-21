import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import { Certificate } from '../../types.ts';

const ANIMATE_TITLE_CLASS = 'animate-title';
const CERTIFICATE_ITEM_CLASS = 'certificate-list-item';

interface CertificatesListProps {
    certificates: Certificate[];
}

export const CertificatesList: React.FC<CertificatesListProps> = ({ certificates }) => (
    <Box>
        <Typography
            className={ANIMATE_TITLE_CLASS}
            variant="overline"
            component="h2"
            gutterBottom
            sx={{
                color: '#AAAAAA',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontSize: '15px',
                fontFamily: 'Poppins Regular, sans-serif',
                pb: 2,
            }}
        >
            Certificates
        </Typography>
        <List disablePadding>
            {certificates.map((cert) => (
                <ListItem
                    key={cert.id}
                    className={CERTIFICATE_ITEM_CLASS}
                    sx={{
                        py: 1.25,
                        px: 0,
                        borderTop: '1px solid #AAAAAA',
                    }}
                >
                    <Typography variant="body1" sx={{ color: '#AAAAAA', fontSize: '20px' }}>{cert.name}</Typography>
                </ListItem>
            ))}
        </List>
    </Box>
);