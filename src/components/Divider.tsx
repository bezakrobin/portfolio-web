import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { useDividerDirection } from '../contexts/DividerDirectionContext.tsx';

interface DividerProps {
    thickness?: number;
    marginY?: number;
    width?: string;
}

const BASE_CLASS = 'divider-base';
const ANIMATE_CLASS = 'divider-animate';

export const Divider: React.FC<DividerProps> = ({
                                                    thickness = 2,
                                                    marginY = 4,
                                                    width = "100%",
                                                }) => {
    const dividerRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const { getNextDirection } = useDividerDirection();
    const [animateFromDirection, setAnimateFromDirection] = useState<'left' | 'right' | null>(null);

    useEffect(() => {
        const direction = getNextDirection();
        setAnimateFromDirection(direction);
    }, [getNextDirection]);

    useEffect(() => {
        if (!animateFromDirection || !dividerRef.current) return;
        const currentRef = dividerRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isVisible) {
                    setIsVisible(true);
                    observer.unobserve(currentRef);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [animateFromDirection]);

    if (!animateFromDirection) {
        return null;
    }

    const origin = animateFromDirection === "right" ? "100% 50%" : "0% 50%";

    return (
        <Box
            sx={{
                px: "40px",
            }}
        >
            <style>
                {`
                @keyframes scaleXAnimation {
                    from {
                        transform: scaleX(0);
                    }
                    to {
                        transform: scaleX(1);
                    }
                }

                .${BASE_CLASS} {
                    transform: scaleX(0);
                }

                .${ANIMATE_CLASS} {
                    animation-name: scaleXAnimation;
                    animation-duration: 1s;
                    animation-timing-function: ease-out;
                    animation-fill-mode: forwards;
                }
                `}
            </style>
            <Box
                ref={dividerRef}
                className={`${BASE_CLASS} ${isVisible ? ANIMATE_CLASS : ''}`}
                sx={{
                    height: thickness,
                    backgroundColor: "#777777",
                    marginY: marginY,
                    width: width,
                    transformOrigin: origin,
                }}
            />
        </Box>
    );
};
