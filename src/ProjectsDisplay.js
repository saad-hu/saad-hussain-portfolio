import { Stack, Box, Card, CardContent, CardActions, CardMedia, Typography, Button, Grid, Paper, Link, IconButton, Tooltip, Alert } from '@mui/material';

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
import SketchImage from './images/etch-color-demo.png';
import CalcImage from './images/calc-demo.png';
import RpsImage from './images/rps-demo.png';
import LibraryImage from './images/library-demo.png';
import TictactoeImage from './images/tic-tac-toe.png';
import WpImage from './images/wp-project.png';



const projects = [
    { name: 'Weather App', image: WeatherAppImage, techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-weather-app', demoLink: 'https://saad-hu.github.io/project-weather-app/' },
    { name: 'Etch A Sketch', image: SketchImage, techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-etch-a-sketch', demoLink: 'https://saad-hu.github.io/project-etch-a-sketch/' },
    { name: 'Library', image: LibraryImage, techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-library', demoLink: 'https://saad-hu.github.io/project-library/' },
    { name: 'Tic Tac Toe', image: TictactoeImage, techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-tic-tac-toe', demoLink: 'https://saad-hu.github.io/project-tic-tac-toe/' },
    { name: 'Rock Paper Scissors', image: RpsImage, techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-rock-paper-scissors', demoLink: 'https://saad-hu.github.io/project-rock-paper-scissors/' },
    { name: 'Signup Form', image: SignupFormImage, techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-signup-form', demoLink: 'https://saad-hu.github.io/project-signup-form/' },
    { name: 'Calculator', image: CalcImage, techUsed: ['JavaScript', 'HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-calculator', demoLink: 'https://saad-hu.github.io/project-calculator/' },
    { name: 'Restaurant Website', image: ResPageImage, techUsed: ['Webpack', 'JavaScript', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-restaurant-page', demoLink: 'https://saad-hu.github.io/project-restaurant-page/' },
    { name: 'Dashboard', image: DashboardImage, techUsed: ['HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/project-admin-dashboard', demoLink: 'https://saad-hu.github.io/project-admin-dashboard/' },
    { name: 'Bootstrap Website', image: BsNinjaImage, techUsed: ['HTML', 'Bootstrap'], githubRepo: 'https://github.com/saad-hu/bootstrap-ninja-book', demoLink: 'https://saad-hu.github.io/bootstrap-ninja-book/' },
    { name: 'Landing Page Test', image: TestWebisteImage, techUsed: ['HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/assessment-website-0', demoLink: 'https://saad-hu.github.io/assessment-website-0/' },
    { name: 'YouTube Clone', image: YoutubeCloneImage, techUsed: ['HTML', 'CSS'], githubRepo: 'https://github.com/saad-hu/bcp-youtube-page', demoLink: 'https://saad-hu.github.io/bcp-youtube-page/' },
    { name: 'WordPress Website', image: WpImage, techUsed: ['WordPress'], demoLink: 'https://project-wp-1.rf.gd/' }
]



const ProjectsDisplay = () => {

    function addRotationClass(event) {
        event.target.classList.add('rotate-scale-up');
    }

    function removeRotationClass(event) {
        event.target.classList.remove('rotate-scale-up');
    }


    return (
        <Box px={3} pt={4} pb={6} sx={{ backgroundColor: '#f5f5f5' }}>

            <Typography variant='h2' mb={4} textAlign='center' className='fontPoppins' sx={{ color: '#262626' }}>Projects</Typography>

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

            <Box mt={3}>
                <Alert variant="filled" severity="info">
                    MERN Projects comming soon...
                </Alert>
            </Box>

        </Box>
    );
}

export default ProjectsDisplay;