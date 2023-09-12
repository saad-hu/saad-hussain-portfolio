import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';


// MUI
import { Stack, Box, Card, CardContent, CardActions, CardMedia, Typography, Button, Grid, Paper, Link, IconButton, Tooltip, Alert } from '@mui/material';

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import DataObjectIcon from '@mui/icons-material/DataObject';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

import "./projects-display.scss";


const PUBLIC_URL = process.env.PUBLIC_URL;


const projects = [
    { name: 'MERN Weather App', techUsed: ['Socket.io', 'MongoDB', 'Express', 'React', 'Node.js', 'Material UI'], githubRepo: 'https://github.com/saad-hu/bcp-weather-app', image: PUBLIC_URL + "/Assets/mern-weather.png", },
    { name: 'Weather App', techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-weather-app', demoLink: 'https://saad-hu.github.io/project-weather-app/', image: PUBLIC_URL + "/Assets/weather-demo-0.png", },
    { name: 'Etch A Sketch', techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-etch-a-sketch', demoLink: 'https://saad-hu.github.io/project-etch-a-sketch/', image: PUBLIC_URL + "/Assets/etch-color-demo.png", },
    { name: 'Library', techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-library', demoLink: 'https://saad-hu.github.io/project-library/', image: PUBLIC_URL + "/Assets/library-demo.png", },
    { name: 'Tic Tac Toe', techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-tic-tac-toe', demoLink: 'https://saad-hu.github.io/project-tic-tac-toe/', image: PUBLIC_URL + "/Assets/tic-tac-toe.png", },
    { name: 'Rock Paper Scissors', techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-rock-paper-scissors', demoLink: 'https://saad-hu.github.io/project-rock-paper-scissors/', image: PUBLIC_URL + "/Assets/rps-demo.png", },
    { name: 'Signup Form', techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-signup-form', demoLink: 'https://saad-hu.github.io/project-signup-form/', image: PUBLIC_URL + "/Assets/form-demo.png", },
    { name: 'Calculator', techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-calculator', demoLink: 'https://saad-hu.github.io/project-calculator/', image: PUBLIC_URL + "/Assets/calc-demo.png", },
    { name: 'Restaurant Website', techUsed: ['Webpack', 'JavaScript', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-restaurant-page', demoLink: 'https://saad-hu.github.io/project-restaurant-page/', image: PUBLIC_URL + "/Assets/res-demo-0.png", },
    { name: 'Dashboard', techUsed: ['HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-admin-dashboard', demoLink: 'https://saad-hu.github.io/project-admin-dashboard/', image: PUBLIC_URL + "/Assets/dashboard-demo.png", },
    { name: 'Bootstrap Website', techUsed: ['HTML', 'Bootstrap'], githubRepo: 'https://github.com/saad-hu/bootstrap-ninja-book', demoLink: 'https://saad-hu.github.io/bootstrap-ninja-book/', image: PUBLIC_URL + "/Assets/bs-ninja-book.png", },
    { name: 'Landing Page Test', techUsed: ['HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/assessment-website-0', demoLink: 'https://saad-hu.github.io/assessment-website-0/', image: PUBLIC_URL + "/Assets/test-website.png", },
    { name: 'YouTube Clone', techUsed: ['HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/bcp-youtube-page', demoLink: 'https://saad-hu.github.io/bcp-youtube-page/', image: PUBLIC_URL + "/Assets/youtube-clone.png", },
    { name: 'WordPress Website', techUsed: ['WordPress'], demoLink: 'https://project-wp-1.rf.gd/', image: PUBLIC_URL + "/Assets/wp-project.png", },
]



const ProjectsDisplay = () => {

    function addRotationClass(event) {
        event.target.classList.add('rotate-scale-up');
    }

    function removeRotationClass(event) {
        event.target.classList.remove('rotate-scale-up');
    }




    let timeline = useRef();

    // useLayoutEffect(() => {
    //     const ctx = gsap.context(() => {
    //         timeline.current = gsap.timeline()
    //             .from(".projects-display .heading", {
    //                 scrollTrigger: ".projects-display .heading",
    //                 start: "bottom bottom",
    //                 duration: 1.5,
    //                 x: "-100%",
    //                 filter: "blur(40px)",
    //             })
    //         // .to(".name.text-shadow", {
    //         //     textShadow: "5px 5px 10px rgb(150, 150, 150)",
    //         //     duration: 1
    //         // })
    //         // .from(".mern-logos-container", {
    //         //     x: "100%",
    //         //     duration: 0.8,
    //         // })


    //     })


    //     return () => ctx.revert();
    // }, [])



    // intersection observr for heading
    let headingRef = useRef();
    let [isHeadingIntersecting, setIsHeadingIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (headingRef.current) {
                let headingEntry = entries[0];
                setIsHeadingIntersecting(headingEntry.isIntersecting);
            }
        },
            {
                threshold: 0.1
            }
        )

        observer.observe(headingRef.current);

        return () => observer.disconnect();
    }, [headingRef])


    useEffect(() => {
        if (isHeadingIntersecting) {
            headingRef.current.classList.add("show");
        } else {
            headingRef.current.classList.remove("show");
        }
    }, [isHeadingIntersecting])


    return (
        <Box
            px={3}
            className="projects-display"
        >

            <Typography
                variant='h3'
                mb={4}
                textAlign='center'
                className='heading hidden'
                ref={headingRef}
            >
                Projects
            </Typography>


            {/* grid containg projects */}
            <Grid container spacing={3}>

                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                        <Paper elevation={16}>
                            <Card sx={{ backgroundColor: '#d4d4d4' }}>

                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={project.image}
                                />

                                <CardContent>
                                    <Typography textAlign='center' variant="h4" mb={2} className='fontPoppins' sx={{ color: '#262626' }}>{project.name}</Typography>
                                    <Stack spacing={1} direction='row' justifyContent='center' flexWrap='wrap'>
                                        {project.techUsed.map((tech, index) => (
                                            <Button variant="text" size='small' key={index} sx={{ color: '#1e3a8a' }} startIcon={<DataObjectIcon />}>{tech}</Button>
                                        ))}
                                    </Stack>

                                </CardContent>

                                <CardActions sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>

                                    {project.githubRepo && (
                                        <Tooltip title='Github Repository'>
                                            <Link href={project.githubRepo} sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} >
                                                <IconButton component="label" onMouseEnter={addRotationClass} onMouseLeave={removeRotationClass}>
                                                    <GitHubIcon sx={{ fontSize: 30 }} />
                                                </IconButton>
                                            </Link>
                                        </Tooltip>
                                    )}

                                    {project.demoLink && (
                                        <Tooltip title='Live Demo'>
                                            <Link href={project.demoLink} sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} >
                                                <IconButton component="label" onMouseEnter={addRotationClass} onMouseLeave={removeRotationClass}>
                                                    <OpenInBrowserIcon sx={{ fontSize: 30 }} />
                                                </IconButton>
                                            </Link>
                                        </Tooltip>
                                    )}

                                </CardActions>
                            </Card>
                        </Paper>

                    </Grid>
                ))}

            </Grid>

        </Box>
    );
}

export default ProjectsDisplay;