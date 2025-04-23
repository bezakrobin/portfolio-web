import React, { useEffect, useRef } from 'react';
import { Box, Container } from '@mui/material';
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CertificatesList, InterestsSection, IcebreakersSection, LanguagesSection, InfoFooter } from '@components/index';
import { Certificate } from '../types';
import { languages } from '@data/data';

interface InfoSectionProps {
    certificates: Certificate[];
}

const CERTIFICATE_ITEM_CLASS = 'certificate-list-item';
const ANIMATE_TITLE_CLASS = 'animate-title';
const ANIMATE_TEXT_BLOCK_CLASS = 'animate-text-block';
const ANIMATE_FOOTER_CLASS = 'animate-footer';
const ANIMATE_CAROUSEL_CLASS = 'animate-carousel';

export const InfoSection: React.FC<InfoSectionProps> = ({ certificates }) => {
    const columnGap = 15;
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const sectionElement = sectionRef.current;
        if (!sectionElement) return;

        const certsCol = sectionElement.querySelector('#certs-col');
        const interestsCol = sectionElement.querySelector('#interests-col');
        const languagesFrameworksBox = sectionElement.querySelector('#languages-frameworks');
        const footerBox = sectionElement.querySelector('#footer-box');

        const containers = [certsCol, interestsCol, languagesFrameworksBox, footerBox].filter(Boolean);
        if (containers.length !== 4) {
            console.error("One or more section container IDs not found for animation setup.");
            const allAnimatableElements = sectionElement.querySelectorAll(`.${ANIMATE_TITLE_CLASS}, .${CERTIFICATE_ITEM_CLASS}, .${ANIMATE_TEXT_BLOCK_CLASS}, .${ANIMATE_FOOTER_CLASS}, .${ANIMATE_CAROUSEL_CLASS}`);
            if (allAnimatableElements.length > 0) {
                gsap.set(allAnimatableElements, { opacity: 0, y: 30 });
            }
            return;
        }

        const allAnimatableElements = sectionElement.querySelectorAll(`.${ANIMATE_TITLE_CLASS}, .${CERTIFICATE_ITEM_CLASS}, .${ANIMATE_TEXT_BLOCK_CLASS}, .${ANIMATE_FOOTER_CLASS}, .${ANIMATE_CAROUSEL_CLASS}`);
        if (allAnimatableElements.length > 0) {
            gsap.set(allAnimatableElements, { opacity: 0, y: 30 });
        } else {
            return;
        }

        const observerContainers = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const container = entry.target;
                        let targets: Element[] = [];
                        let stagger = 0;
                        let duration = 0.6;

                        if (container.id === 'certs-col') {
                            const title = container.querySelector<Element>(`.${ANIMATE_TITLE_CLASS}`);
                            const items = container.querySelectorAll<Element>(`.${CERTIFICATE_ITEM_CLASS}`);
                            targets = title ? [title, ...Array.from(items)] : [...Array.from(items)];
                            stagger = 0.1;
                        } else if (container.id === 'interests-col') {
                            const titles = container.querySelectorAll<Element>(`.${ANIMATE_TITLE_CLASS}`);
                            const texts = container.querySelectorAll<Element>(`.${ANIMATE_TEXT_BLOCK_CLASS}`);
                            targets = [...Array.from(titles), ...Array.from(texts)];
                            stagger = 0.1;
                        } else if (container.id === 'languages-frameworks') {
                            const title = container.querySelector<Element>(`.${ANIMATE_TITLE_CLASS}`);
                            const carouselBox = container.querySelector<Element>(`.${ANIMATE_CAROUSEL_CLASS}`);
                            targets = title && carouselBox ? [title, carouselBox] : (title ? [title] : (carouselBox ? [carouselBox] : []));
                            stagger = 0.1;
                        } else if (container.id === 'footer-box') {
                            const footerElements = container.querySelectorAll<Element>(`.${ANIMATE_FOOTER_CLASS}`);
                            targets = [...Array.from(footerElements)];
                            duration = 1.0;
                        }

                        if (targets.length > 0) {
                            gsap.to(targets, {
                                opacity: 1,
                                y: 0,
                                duration: duration,
                                ease: 'power2.out',
                                stagger: stagger,
                                overwrite: true,
                            });
                        }
                        observerContainers.unobserve(container);
                    }
                });
            },
            { threshold: 0.1 }
        );

        containers.forEach(container => observerContainers.observe(container!));

        return () => {
            if (observerContainers) {
                observerContainers.disconnect();
            }
        };

    }, []);

    const handleGetInTouchClick = () => {
        gsap.registerPlugin(ScrollToPlugin);
        gsap.to(window, {
            duration: 1.0,
            scrollTo: "#contact-section",
            ease: "power2.inOut",
        });
    };

    return (
        <Box
            ref={sectionRef}
            component="section"
            sx={{
                color: '#AAAAAA',
                pb: 12,
                px: 3,
                pt: { xs: 10, md: 20 },
                userSelect: 'none',
                overflow: 'hidden',
            }}
        >
            <Container
                maxWidth="lg"
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        mb: { xs: 5, md: 10 },
                    }}
                >
                    <Box
                        id="certs-col"
                        sx={{
                            width: { xs: '100%', md: `calc(50% - ${String((columnGap / 2) * 8)}px)`},
                            px: (columnGap / 2),
                            mb: { xs: columnGap, md: 0 },
                        }}
                    >
                        <CertificatesList certificates={certificates} allCertificatesUrl={"https://github.com/bezakrobin/certificates-collection"} />
                    </Box>

                    <Box
                        id="interests-col"
                        sx={{
                            width: { xs: '100%', md: `calc(50% - ${String((columnGap / 2) * 8)}px)` },
                            px: (columnGap / 2),
                        }}
                    >
                        <InterestsSection />
                        <IcebreakersSection onGetInTouchClick={handleGetInTouchClick} />
                    </Box>
                </Box>

                <LanguagesSection languages={languages} />

                <InfoFooter />

            </Container>
        </Box>
    );
}