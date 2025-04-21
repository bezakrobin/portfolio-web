import React, { useState, useMemo } from 'react';
import { Box, Typography, List } from '@mui/material';
import { Certificate } from '../../types';
import { CertificateListItemDisplay } from '../CertificateListItemDisplay';
import { HoverThumbnail } from '../HoverThumbnail';

const ANIMATE_TITLE_CLASS = 'animate-title';

interface CertificatesListProps {
    certificates: Certificate[];
}

export const CertificatesList: React.FC<CertificatesListProps> = ({ certificates }) => {
    const [hoveredCertId, setHoveredCertId] = useState<string | null>(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const hoveredCertificate = useMemo(() => {
        if (!hoveredCertId) return null;
        return certificates.find(cert => cert.id === hoveredCertId);
    }, [hoveredCertId, certificates]);

    const handleMouseMove = (event: React.MouseEvent<HTMLUListElement>) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeaveList = () => {
        setHoveredCertId(null);
    };

    return (
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

            <List
                disablePadding
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeaveList}
            >
                {certificates.map((cert) => (
                    <CertificateListItemDisplay
                        key={cert.id}
                        certificate={cert}
                        isHovered={hoveredCertId === cert.id}
                        onMouseEnter={() => setHoveredCertId(cert.id)}
                    />
                ))}
            </List>

            <HoverThumbnail
                isVisible={!!hoveredCertificate && !!hoveredCertificate.image_url}
                imageUrl={hoveredCertificate?.image_url}
                position={cursorPosition}
            />
        </Box>
    );
};