import { useEffect, useRef, useState } from 'react';

// MUI
import { Box, Typography, Grid, Link, IconButton, Tooltip, styled } from '@mui/material';

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

import "./projects-display.scss";


const PUBLIC_URL = process.env.PUBLIC_URL;



const ActionsContainer = styled('div')({
    opacity: "0",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0px",
    left: "0px",

    display: "flex",
    alignItems: "center",
    gap: "12px",
    justifyContent: "center",

    transition: "opacity 300ms linear"
});
const ProjectInfoContainer = styled('div')({
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0px",
    left: "0px",
    paddingLeft: "5%",
    paddingTop: "10%",
    paddingRight: "2%",

    backgroundColor: "rgba(0,0,0,0.7)",

    transition: "opacity 300ms linear"
});
const InfoText = styled(Typography)(({ fontSize }) => ({
    color: "white",
    fontSize: fontSize || "1.2rem",
    marginBottom: "4px"
}))
const ProjectContainer = styled('div')({
    height: "300px",
    border: "1px solid white",

    position: "relative",

    "&:hover": {
        boxShadow: "1px 1px 5px 5px rgba(200,200,200,1)",

        ".play-button-container": {
            opacity: "1",
        },
        ".info-container": {
            opacity: "0"
        }
    },


});
const BgImage = styled('img')({
    width: "100%",
    height: "100%",

    objectFit: "cover"
});





const ProjectsDisplay = () => {

    // intersection observer for heading
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
            className="projects-display"
            id="projects-section"
        >

            <Typography
                variant='h3'
                textAlign='center'
                className='heading hidden'
                ref={headingRef}
            >
                Projects
            </Typography>


            {/* grid containg projects */}
            <Grid container spacing={3}>

                {projects.map((project, index) => (
                    <Grid
                        item
                        xs={12} sm={6} md={4} xl={3}
                        key={index}
                    >
                        <ProjectContainer>

                            <ProjectInfoContainer className="info-container">
                                <InfoText>{project.name}</InfoText>
                            </ProjectInfoContainer>

                            <BgImage src={project.image} />

                            <ActionsContainer className="play-button-container">
                                {project.githubRepo && (
                                    <Tooltip title='Github Repository'>
                                        <Link
                                            href={project.githubRepo}
                                            sx={{ display: 'flex', alignItems: 'center' }}
                                            className='link-style-reset'
                                            target='_blank'
                                        >
                                            <IconButton
                                                className='rotate-scale-up'
                                                sx={{
                                                    bgcolor: "lightShadedText.main",
                                                    "&:hover": {
                                                        bgcolor: "lightShadedText.main",
                                                    }
                                                }}
                                                size='small'
                                            >
                                                <GitHubIcon
                                                    sx={{
                                                        fontSize: 25,
                                                        color: "white",
                                                    }}
                                                />
                                            </IconButton>
                                        </Link>
                                    </Tooltip>
                                )}


                                {project.demoLink && (
                                    <Tooltip title='Live Demo'>
                                        <Link
                                            href={project.demoLink}
                                            sx={{ display: 'flex', alignItems: 'center' }}
                                            className='link-style-reset'
                                            target='_blank'
                                        >
                                            <IconButton
                                                className='rotate-scale-up'
                                                sx={{
                                                    bgcolor: "lightShadedText.main",
                                                    "&:hover": {
                                                        bgcolor: "lightShadedText.main",
                                                    }
                                                }}
                                                size='small'
                                            >
                                                <OpenInBrowserIcon
                                                    sx={{
                                                        fontSize: 25,
                                                        color: "white",
                                                    }}
                                                />
                                            </IconButton>
                                        </Link>
                                    </Tooltip>
                                )}
                            </ActionsContainer>

                        </ProjectContainer>

                    </Grid>
                ))}

            </Grid>

        </Box>
    );
}


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

export default ProjectsDisplay;