import { Stack, Box, Card, CardContent, CardActions, CardMedia, Typography, Button, Grid, Paper, Link, IconButton, Tooltip } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import DataObjectIcon from '@mui/icons-material/DataObject';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

import WeatherAppImage from './images/weather-demo-0.png';
import YoutubeCloneImage from './images/youtube-clone.png';
import TestWebisteImage from './images/test-website.png';
import BsNinjaImage from './images/bs-ninja-book.png';
import ResPageImage from './images/res-demo-0.png';
import DashboardImage from './images/dashboard-demo.png';
import SignupFormImage from './images/form-demo.png';


const projects = [
    { name: 'Weather App', image: WeatherAppImage, techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-weather-app', demoLink: 'https://saad-hu.github.io/project-weather-app/' },

    { name: 'Signup Form', image: SignupFormImage, techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-signup-form', demoLink: 'https://saad-hu.github.io/project-signup-form/' },

    { name: 'Bistecca - Restaurant Website', image: ResPageImage, techUsed: ['Webpack', 'JavaScript', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-restaurant-page', demoLink: 'https://saad-hu.github.io/project-restaurant-page/' },
    { name: 'Dashboard', image: DashboardImage, techUsed: ['HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-admin-dashboard', demoLink: 'https://saad-hu.github.io/project-admin-dashboard/' },
    { name: 'A Bootstrap Website', image: BsNinjaImage, techUsed: ['HTML', 'Bootstrap'], githubRepo: 'https://github.com/saad-hu/bootstrap-ninja-book', demoLink: 'https://saad-hu.github.io/bootstrap-ninja-book/' },
    { name: 'Landing Page Test', image: TestWebisteImage, techUsed: ['HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/assessment-website-0', demoLink: 'https://saad-hu.github.io/assessment-website-0/' },
    { name: 'YouTube Clone', image: YoutubeCloneImage, techUsed: ['HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/bcp-youtube-page', demoLink: 'https://saad-hu.github.io/bcp-youtube-page/' }
]



const ProjectsDisplay = () => {


    function addRotationClass(event) {
        event.target.classList.add('rotate-scale-up');
    }

    function removeRotationClass(event) {
        event.target.classList.remove('rotate-scale-up');
    }


    return (
        <Box px={3} py={5} sx={{ backgroundColor: '#f5f5f5' }}>
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

                                    <Tooltip title='Github Repository'>
                                        <Link href={project.githubRepo} sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} >
                                            <IconButton component="label" onMouseEnter={addRotationClass} onMouseLeave={removeRotationClass}>
                                                <GitHubIcon sx={{ fontSize: 30 }} />
                                            </IconButton>
                                        </Link>
                                    </Tooltip>

                                    <Tooltip title='Live Demo'>
                                        <Link href={project.demoLink} sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} >
                                            <IconButton component="label" onMouseEnter={addRotationClass} onMouseLeave={removeRotationClass}>
                                                <OpenInBrowserIcon sx={{ fontSize: 30 }} />
                                            </IconButton>
                                        </Link>

                                    </Tooltip>
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