import React, { useState, useEffect, useMemo } from 'react';
import { Box, Skeleton } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

interface HoverThumbnailProps {
    imageUrl: string | undefined;
    position: { x: number; y: number };
    isVisible: boolean;
}

const THUMBNAIL_WIDTH_PX = 600;
const THUMBNAIL_ASPECT_RATIO = 4 / 3;
const THUMBNAIL_HEIGHT_PX = THUMBNAIL_WIDTH_PX / THUMBNAIL_ASPECT_RATIO;
const CURSOR_OFFSET_X = 15;
const CURSOR_OFFSET_Y = 15;
const VIEWPORT_MARGIN = 10;

export const HoverThumbnail: React.FC<HoverThumbnailProps> = ({ imageUrl, position, isVisible }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateSize = () => {
            setViewportSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        setIsLoaded(false);
        setHasError(false);

        if (isVisible && imageUrl) {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => setIsLoaded(true);
            img.onerror = () => {
                console.error("Failed to load thumbnail image:", imageUrl);
                setHasError(true);
            };
        }
    }, [imageUrl, isVisible]);

    const calculatedStyle: SxProps<Theme> | null = useMemo(() => {
        const shouldCalculate = isVisible && !!imageUrl && !hasError && isLoaded && !!viewportSize.width && !!viewportSize.height;

        if (!shouldCalculate) {
            return null;
        }

        const { x: cursorX, y: cursorY } = position;
        const { width: viewportWidth, height: viewportHeight } = viewportSize;

        let targetLeft = cursorX + CURSOR_OFFSET_X;
        let targetTop = cursorY + CURSOR_OFFSET_Y;

        if (targetTop + THUMBNAIL_HEIGHT_PX + VIEWPORT_MARGIN > viewportHeight) {
            targetTop = cursorY - THUMBNAIL_HEIGHT_PX - CURSOR_OFFSET_Y;
        }
        if (targetTop < VIEWPORT_MARGIN) {
            targetTop = VIEWPORT_MARGIN;
        }

        if (targetLeft + THUMBNAIL_WIDTH_PX + VIEWPORT_MARGIN > viewportWidth) {
            targetLeft = viewportWidth - THUMBNAIL_WIDTH_PX - VIEWPORT_MARGIN;
        }
        if (targetLeft < VIEWPORT_MARGIN) {
            targetLeft = VIEWPORT_MARGIN;
        }

        return {
            position: 'fixed',
            left: `${targetLeft}px`,
            top: `${targetTop}px`,
            width: `${THUMBNAIL_WIDTH_PX}px`,
            height: `${THUMBNAIL_HEIGHT_PX}px`,
            zIndex: 1500,
            pointerEvents: 'none',
            borderRadius: '4px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            overflow: 'hidden',
            transition: 'opacity 0.2s ease-out, left 0.1s ease-out, top 0.1s ease-out',
            opacity: 1,
            visibility: 'visible',
        };

    }, [position, isVisible, imageUrl, hasError, isLoaded, viewportSize]);

    const showSkeleton = isVisible && !!imageUrl && !isLoaded && !hasError;

    if (!calculatedStyle) {
        if (showSkeleton) {
            const skeletonStyle: SxProps<Theme> = {
                position: 'fixed',
                left: position.x + CURSOR_OFFSET_X,
                top: position.y + CURSOR_OFFSET_Y,
                width: `${THUMBNAIL_WIDTH_PX}px`,
                height: `${THUMBNAIL_HEIGHT_PX}px`,
                zIndex: 1499,
                pointerEvents: 'none',
                borderRadius: '4px',
                overflow: 'hidden',
                opacity: 1,
                visibility: 'visible',
                transition: 'opacity 0.3s ease-in-out',
            };
            return (
                <Box sx={skeletonStyle}>
                    <Skeleton variant="rectangular" width="100%" height="100%" sx={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}} />
                </Box>
            );
        }
        return null;
    }

    return (
        <Box sx={calculatedStyle}>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
        </Box>
    );
};