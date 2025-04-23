import { useEffect, useRef } from "react";
import gsap from "gsap";

interface UseParallaxProps {
    speed?: number;
    direction?: "left" | "right";
}

export const useParallax = ({ speed = 1, direction = "left" }: UseParallaxProps) => {
    const elementRef = useRef<HTMLDivElement | null>(null);
    const offsetX = useRef(0);

    useEffect(() => {
        if (!elementRef.current) return;

        let lastScrollY = window.scrollY;
        let requestId: number;

        const smoothMove = () => {
            gsap.to(elementRef.current, {
                x: offsetX.current,
                duration: 0.3,
                ease: "power2.out",
            });
            requestId = requestAnimationFrame(smoothMove);
        };

        const updateVelocity = () => {
            const deltaY = window.scrollY - lastScrollY;
            lastScrollY = window.scrollY;

            offsetX.current += (direction === "left" ? -1 : 1) * deltaY * speed * 0.8;
        };

        window.addEventListener("scroll", updateVelocity);
        requestId = requestAnimationFrame(smoothMove);

        return () => {
            window.removeEventListener("scroll", updateVelocity);
            cancelAnimationFrame(requestId);
        };
    }, [speed, direction]);

    return elementRef;
}; 