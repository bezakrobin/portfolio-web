import React, { useState, useMemo } from 'react';
import { Box, Typography, List, IconButton } from '@mui/material';
import { ExternalLink } from 'lucide-react';
import { Certificate } from '../types';
import { CertificateItem, HoverThumbnail } from '@components/index';

const ANIMATE_TITLE_CLASS = 'animate-title';

interface CertificatesListProps {
    certificates: Certificate[];
    allCertificatesUrl?: string;
}

export const CertificatesList: React.FC<CertificatesListProps> = ({ certificates, allCertificatesUrl }) => {
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

    const handleOpenLink = () => {
        if (allCertificatesUrl) {
            window.open(allCertificatesUrl, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pb: 2,
            }}>
                <Typography
                    className={ANIMATE_TITLE_CLASS}
                    variant="overline"
                    component="h2"
                    sx={{
                        color: '#AAAAAA',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        fontSize: '15px',
                        fontFamily: 'Poppins Regular, sans-serif',
                        lineHeight: 1.5
                    }}
                >
                    Certificates
                </Typography>

                {allCertificatesUrl && (
                    <IconButton
                        aria-label="Open all certificates in new tab"
                        size="small"
                        onClick={handleOpenLink}
                        sx={{
                            color: '#AAAAAA',
                            ml: 1,
                            mb: 1,
                            transition: 'color 0.2s ease-in-out',
                            '&:hover':{
                                color: '#CB450C',
                            }
                        }}
                    >
                        <ExternalLink size={16} />
                    </IconButton>
                )}
            </Box>

            <List
                disablePadding
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeaveList}
            >
                {certificates.map((cert) => (
                    <CertificateItem
                        key={cert.id}
                        certificate={cert}
                        isHovered={hoveredCertId === cert.id}
                        onMouseEnter={() => setHoveredCertId(cert.id)}
                    />
                ))}
            </List>

            <HoverThumbnail
                isVisible={!!hoveredCertificate && !!hoveredCertificate.url}
                imageUrl={hoveredCertificate?.url}
                position={cursorPosition}
            />
        </Box>
    );
}