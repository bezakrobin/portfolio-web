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

function calculateClampedPosition(
    cursorPos: { x: number, y: number },
    viewportSize: { width: number, height: number },
    thumbSize: { width: number, height: number },
    offset: { x: number, y: number },
    margin: number
): { left: number, top: number } | null {
    if (!viewportSize.width || !viewportSize.height) {
        return null;
    }

    const { x: cursorX, y: cursorY } = cursorPos;
    const { width: viewportWidth, height: viewportHeight } = viewportSize;
    const { width: thumbWidth, height: thumbHeight } = thumbSize;
    const { x: offsetX, y: offsetY } = offset;

    let targetLeft = cursorX + offsetX;
    let targetTop = cursorY + offsetY;

    if (targetTop + thumbHeight + margin > viewportHeight) {
        targetTop = cursorY - thumbHeight - offsetY;
    }
    if (targetTop < margin) {
        targetTop = margin;
    }
    if (targetLeft + thumbWidth + margin > viewportWidth) {
        targetLeft = viewportWidth - thumbWidth - margin;
    }
    if (targetLeft < margin) {
        targetLeft = margin;
    }

    return { left: targetLeft, top: targetTop };
}


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

    const clampedPosition = useMemo(() => {
        return calculateClampedPosition(
            position,
            viewportSize,
            { width: THUMBNAIL_WIDTH_PX, height: THUMBNAIL_HEIGHT_PX },
            { x: CURSOR_OFFSET_X, y: CURSOR_OFFSET_Y },
            VIEWPORT_MARGIN
        );
    }, [position, viewportSize]);

    const shouldRender = isVisible && !!imageUrl && !hasError && !!clampedPosition;
    const showSkeleton = shouldRender && !isLoaded;
    const showImage = shouldRender && isLoaded;

    const baseBoxStyle: SxProps<Theme> = {
        position: 'fixed',
        width: `${THUMBNAIL_WIDTH_PX}px`,
        height: `${THUMBNAIL_HEIGHT_PX}px`,
        zIndex: 1500,
        pointerEvents: 'none',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity 0.2s ease-out, left 0.1s ease-out, top 0.1s ease-out',
    };

    if (!shouldRender) {
        return null;
    }

    const dynamicStyle: SxProps<Theme> = {
        ...baseBoxStyle,
        left: `${clampedPosition.left}px`,
        top: `${clampedPosition.top}px`,
        opacity: 1,
        visibility: 'visible',
    };

    if (showImage) {
        return (
            <Box sx={dynamicStyle}>
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
    } else if (showSkeleton) {
        const skeletonContainerStyle: SxProps<Theme> = {
            ...dynamicStyle,
            zIndex: 1499,
        };
        return (
            <Box sx={skeletonContainerStyle}>
                <Skeleton variant="rectangular" width="100%" height="100%" sx={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}} />
            </Box>
        );
    } else {
        return null;
    }
};