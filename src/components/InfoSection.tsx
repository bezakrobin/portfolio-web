import React from 'react';
import {
    Box,
    Container,
    Typography,
    List,
    ListItem,
    Link
} from '@mui/material';

const certificates = [
    'SOLOLEARN: Tech for Everyone',
    'SOLOLEARN: Introduction to SQL',
    'SOLOLEARN: Introduction to HTML',
    'SOLOLEARN: Introduction to Python',
    'SOLOLEARN: Introduction to JavaScript',
    'SOLOLEARN: Introduction to Java',
    'SOLOLEARN: Introduction to CSS',
    'SOLOLEARN: Introduction to C++',
    'SOLOLEARN: Introduction to C#',
    'SOLOLEARN: Introduction to C',
];

export const InfoSection: React.FC = () => {
    const columnGap = 15;

    return (
        <Box
            component="section"
            sx={{
                color: '#AAAAAA',
                pb: 12,
                px: 3,
                pt: { xs: 10, md: 20 },
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        mb: { xs: 20, md: 40 },
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: '100%', md: `calc(50% - ${String((columnGap / 2) * 8)}px)`},
                            px: (columnGap / 2),
                            mb: { xs: columnGap, md: 0 },
                        }}
                    >
                        <Typography
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
                            {certificates.map((cert, index) => (
                                <React.Fragment key={index}>
                                    <ListItem
                                        sx={{
                                            py: 1.25,
                                            px: 0,
                                            borderTop: '1px solid #AAAAAA',
                                        }}
                                    >
                                        <Typography variant="body1" sx={{ color: '#AAAAAA', fontSize: '20px' }}>{cert}</Typography>
                                    </ListItem>
                                </React.Fragment>
                            ))}
                        </List>
                    </Box>

                    <Box
                        sx={{
                            width: { xs: '100%', md: `calc(50% - ${String((columnGap / 2) * 8)}px)` },
                            px: (columnGap / 2),
                        }}
                    >
                        <Box mb={5}>
                            <Typography
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
                                Interests
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: '20px' }}>
                                Art Direction, Brand Strategy, Creative Development, E-Commerce, Webflow, 3D/Augmented Reality, Web3
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: '20px' }}>
                                <Link
                                    href="https://github.com/bezakrobin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="inherit"
                                    underline="none"
                                    sx={{
                                        color: '#AAAAAA',
                                        fontFamily: 'Poppins SemiBold, sans-serif',
                                        textTransform: 'uppercase',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: '#CB450C',
                                        },
                                    }}
                                >
                                    See my GitHub
                                </Link>
                            </Typography>
                        </Box>

                        <Box>
                            <Typography
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
                                ICEBREAKERS
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: '20px' }}>
                                I listen to Drum & Bass and Alternative music all the time. Check out what I'm into on my{' '}
                                <Link
                                    href={"#spotify"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="inherit"
                                    underline="none"
                                    sx={{
                                        color: '#AAAAAA',
                                        fontFamily: 'Poppins SemiBold, sans-serif',
                                        textTransform: 'uppercase',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: '#CB450C',
                                        },
                                    }}
                                >
                                    Spotify PLAYLIST
                                </Link>
                                . I also love travelling and good food—work with me so I can fund this!{' '}
                                <Link
                                    href={"#get-in-touch"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="inherit"
                                    underline="none"
                                    sx={{
                                        color: '#AAAAAA',
                                        fontFamily: 'Poppins SemiBold, sans-serif',
                                        textTransform: 'uppercase',
                                        transition: 'color 0.3s ease',
                                        '&:hover': {
                                            color: '#CB450C',
                                        },
                                    }}
                                >
                                    GET IN TOUCH
                                </Link>
                                {' '}to know more about me.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box
                    component="footer"
                    sx={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        mx: 'auto',
                    }}
                >
                    <Typography variant="body1" sx={{ color: '#AAAAAA', lineHeight: 1.6, fontSize: '20px' }}>
                        Got a question, proposal or project or want to work together on something? Feel free to reach out.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
