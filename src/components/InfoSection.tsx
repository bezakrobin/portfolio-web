import React, { useEffect, useRef } from 'react';
import {
    Box,
    Container,
    Typography,
    List,
    ListItem,
    Link
} from '@mui/material';
import gsap from "gsap";
import { InfiniteIconCarousel } from "./InfiniteIconCarousel.tsx";
import { languages } from '../data/data.ts';

interface Certificate {
    id: string;
    name: string;
    image_url?: string;
}

interface InfoSectionProps {
    certificates: Certificate[];
}

const CERTIFICATE_ITEM_CLASS = 'certificate-list-item';
const ANIMATE_TITLE_CLASS = 'animate-title';
const ANIMATE_TEXT_BLOCK_CLASS = 'animate-text-block';
const ANIMATE_FOOTER_CLASS = 'animate-footer';

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

        if (!certsCol || !interestsCol || !languagesFrameworksBox || !footerBox) {
            console.error("Required section container IDs not found for animation setup.");
            const allAnimatableElements = sectionElement.querySelectorAll(`.${ANIMATE_TITLE_CLASS}, .${CERTIFICATE_ITEM_CLASS}, .${ANIMATE_TEXT_BLOCK_CLASS}, .${ANIMATE_FOOTER_CLASS}`);
            if (allAnimatableElements.length > 0) {
                gsap.set(allAnimatableElements, { opacity: 0, y: 30 });
                console.warn("Could not find all section containers, animations might not trigger correctly via IntersectionObserver.");
            }
            return;
        }

        const allAnimatableElements = sectionElement.querySelectorAll(`.${ANIMATE_TITLE_CLASS}, .${CERTIFICATE_ITEM_CLASS}, .${ANIMATE_TEXT_BLOCK_CLASS}, .${ANIMATE_FOOTER_CLASS}`);
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

                        if (container.id === 'certs-col') {
                            const title = container.querySelector<Element>(`.${ANIMATE_TITLE_CLASS}`);
                            const items = container.querySelectorAll<Element>(`.${CERTIFICATE_ITEM_CLASS}`);
                            targets = title ? [title, ...Array.from(items)] : [...Array.from(items)];
                            stagger = 0.1;
                        } else if (container.id === 'interests-col') {
                            const interestsTitles = container.querySelectorAll<Element>(`.${ANIMATE_TITLE_CLASS}`);
                            const interestsTexts = container.querySelectorAll<Element>(`.${ANIMATE_TEXT_BLOCK_CLASS}`);
                            targets = [...Array.from(interestsTitles), ...Array.from(interestsTexts)];
                            stagger = 0.1;
                        } else if (container.id === 'languages-frameworks') {
                            const titles = container.querySelectorAll<Element>(`.${ANIMATE_TITLE_CLASS}`);
                            const texts = container.querySelectorAll<Element>(`.${ANIMATE_TEXT_BLOCK_CLASS}`);
                            targets = [...Array.from(titles), ...Array.from(texts)];
                            stagger = 0.1;
                        } else if (container.id === 'footer-box') {
                            const footerElements = container.querySelectorAll<Element>(`.${ANIMATE_FOOTER_CLASS}`);
                            targets = [...Array.from(footerElements)];
                            stagger = 0.1;
                        }

                        if (targets.length > 0) {
                            gsap.to(targets, {
                                opacity: 1,
                                y: 0,
                                duration: 1,
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

        observerContainers.observe(certsCol);
        observerContainers.observe(interestsCol);
        observerContainers.observe(languagesFrameworksBox);
        observerContainers.observe(footerBox);

        return () => {
            if (observerContainers) {
                observerContainers.disconnect();
            }
        };

    }, []);

    const handleGetInTouchClick = () => {
        gsap.to(window, {
            duration: 0.6,
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

                    <Box
                        id="interests-col"
                        sx={{
                            width: { xs: '100%', md: `calc(50% - ${String((columnGap / 2) * 8)}px)` },
                            px: (columnGap / 2),
                        }}
                    >
                        <Box mb={5}>
                            <Typography
                                className={ANIMATE_TITLE_CLASS}
                                variant="overline" component="h2" gutterBottom
                                sx={{
                                    color: '#AAAAAA',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    fontSize: '15px',
                                    fontFamily: 'Poppins Regular, sans-serif',
                                    pb: 2
                                }}
                            >
                                Interests
                            </Typography>
                            <Typography
                                className={ANIMATE_TEXT_BLOCK_CLASS}
                                variant="body1" sx={{ lineHeight: 1.6, fontSize: '20px' }}>
                                Art Direction, Brand Strategy, Creative Development, E-Commerce, Webflow, 3D/Augmented Reality, Web3
                            </Typography>
                            <Typography
                                className={ANIMATE_TEXT_BLOCK_CLASS}
                                variant="body1" sx={{ lineHeight: 1.6, fontSize: '20px' }}>
                                <Link href="https://github.com/bezakrobin" target="_blank" rel="noopener noreferrer" color="inherit" underline="none"
                                    sx={{
                                        color: '#AAAAAA',
                                        fontFamily: 'Poppins SemiBold, sans-serif',
                                        textTransform: 'uppercase',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: '#CB450C'
                                        }
                                    }}
                                >
                                    See my GitHub
                                </Link>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                className={ANIMATE_TITLE_CLASS}
                                variant="overline" component="h2" gutterBottom
                                sx={{
                                    color: '#AAAAAA',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    fontSize: '15px',
                                    fontFamily: 'Poppins Regular, sans-serif',
                                    pb: 2
                                }}
                            >
                                ICEBREAKERS
                            </Typography>
                            <Typography
                                className={ANIMATE_TEXT_BLOCK_CLASS}
                                variant="body1" sx={{ lineHeight: 1.6, fontSize: '20px' }}>
                                I listen to Drum & Bass and Alternative music all the time. Check out what I'm into on my{' '}
                                <Link href={"https://open.spotify.com/playlist/5e65hMw6lgqkxScPH5E6ol"} target="_blank" rel="noopener noreferrer" color="inherit" underline="none"
                                    sx={{
                                        color: '#AAAAAA',
                                        fontFamily: 'Poppins SemiBold, sans-serif',
                                        textTransform: 'uppercase',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: '#CB450C'
                                        }
                                    }}
                                >
                                    Spotify PLAYLIST
                                </Link>
                                . I also love travelling and good food—work with me so I can fund this!{' '}
                                <Link color="inherit" underline="none"
                                    sx={{
                                        cursor: 'pointer',
                                        color: '#AAAAAA',
                                        fontFamily: 'Poppins SemiBold, sans-serif',
                                        textTransform: 'uppercase',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: '#CB450C'
                                        }
                                    }}
                                    onClick={handleGetInTouchClick}
                                >
                                    GET IN TOUCH
                                </Link>
                                {' '}to know more about me.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box
                    id="languages-frameworks"
                    component="div"
                    sx={{
                        textAlign: 'center',
                        maxWidth: '800px',
                        mx: 'auto',
                        mb: '50px',
                    }}
                >
                    <Typography
                        className={ANIMATE_TITLE_CLASS}
                        variant="overline" component="h2" gutterBottom
                        sx={{
                            color: '#AAAAAA',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            fontSize: '15px',
                            fontFamily: 'Poppins Regular, sans-serif',
                        }}
                    >
                        Languages & Frameworks I use
                    </Typography>
                    <Box className={ANIMATE_TEXT_BLOCK_CLASS}>
                        <InfiniteIconCarousel languages={languages} />
                    </Box>
                </Box>

                <Box
                    id="footer-box"
                    component="footer"
                    sx={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        mx: 'auto',
                    }}
                >
                    <Typography
                        className={ANIMATE_FOOTER_CLASS}
                        variant="body1" sx={{ color: '#AAAAAA', lineHeight: 1.6, fontSize: '20px' }}>
                        Got a question, proposal or project or want to work together on something? Feel free to reach out.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
