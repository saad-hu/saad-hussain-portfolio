import { memo } from "react"

// components
import ProjectsGrid from "./ProjectsGrid";

// MUI
import { Box, Typography } from '@mui/material';


const ProjectsContainer = () => {
    return (
        <Box>
            <Typography
                variant="h5"
                gutterBottom
                color="lightShadedText.main"
            >
                Professional Projects
            </Typography>

            <ProjectsGrid projects={professionalProjects} />


            <Typography
                variant="h5"
                gutterBottom
                color="lightShadedText.main"
            >
                Personal Projects
            </Typography>

            <ProjectsGrid projects={personalProjects} />
        </Box>

    )
}


const PUBLIC_URL = process.env.PUBLIC_URL;


const professionalProjects = [
    { name: 'OkayKer Web App', techUsed: ['Socket.io', 'React.js', 'Redux Toolkit', 'Material UI', "Google Maps"], demoLink: 'https://app.okayker.com/', image: PUBLIC_URL + "/Assets/okayker-web-app.png", },
    { name: 'XPERDRIVER', techUsed: ['React.js', "CoreUI", "OTP Integration"], demoLink: 'https://www.xperdriver.com/', image: PUBLIC_URL + "/Assets/xperdriver.png", },
    { name: 'OkayKer Admin Portal', techUsed: ['React.js', "Ant Design"], image: PUBLIC_URL + "/Assets/confidential.png", bgImageObjectFit: "contain" },
]

const personalProjects = [
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


export default memo(ProjectsContainer)