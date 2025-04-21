import React, { useState, useEffect } from 'react';
import { Box, Skeleton } from '@mui/material';

interface HoverThumbnailProps {
    imageUrl: string | undefined;
    position: { x: number; y: number };
    isVisible: boolean;
}

export const HoverThumbnail: React.FC<HoverThumbnailProps> = ({ imageUrl, position, isVisible }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        setHasError(false);

        if (isVisible && imageUrl) {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => {
                setIsLoaded(true);
                setHasError(false);
            };
            img.onerror = () => {
                setIsLoaded(false);
                setHasError(true);
            };
        }
    }, [imageUrl, isVisible]);

    if (!isVisible || !imageUrl || hasError) {
        return null;
    }

    const commonSx = {
        position: 'fixed',
        left: position.x,
        top: position.y,
        transform: 'translate(15px, 15px)',
        width: '600px',
        height: 'auto',
        aspectRatio: '16 / 9',
        zIndex: 1500,
        pointerEvents: 'none',
        borderRadius: '4px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        overflow: 'hidden',
    };

    return (
        <Box sx={commonSx}>
            <Skeleton
                variant="rectangular"
                width="100%"
                height="100%"
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: isLoaded ? 0 : 1,
                    transition: 'opacity 0.3s ease-in-out',
                }}
            />
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out 0.1s',
                }}
            />
        </Box>
    );
};