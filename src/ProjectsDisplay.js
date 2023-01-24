import { Stack, Box, Card, CardContent, CardActions, CardMedia, Typography, Button, Grid, Paper, Link, IconButton, Tooltip } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import DataObjectIcon from '@mui/icons-material/DataObject';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

import WeatherAppImage from './images/weather-demo-0.png';
import YoutubeCloneImage from './images/youtube-clone.png';




const projects = [
    { name: 'Weather App', image: WeatherAppImage, techUsed: ['HTML', 'CSS', 'JavaScript'], githubRepo: 'https://github.com/saad-hu/project-weather-app', demoLink: 'https://saad-hu.github.io/project-weather-app/' },
    { name: 'Weather App', image: WeatherAppImage, techUsed: ['HTML', 'CSS', 'JavaScript'], githubRepo: 'https://github.com/saad-hu/project-weather-app', demoLink: 'https://saad-hu.github.io/project-weather-app/' },
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
        <Box p={6} mb={6} sx={{ backgroundColor: '#f5f5f5' }}>
            <Grid container spacing={3}>

                {projects.map(project => (
                    <Grid item xs={12} sm={6} md={4} xl={3}>

                        <Paper elevation={16}>
                            <Card sx={{ backgroundColor: '#d4d4d4' }}>

                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={project.image}
                                />

                                <CardContent>
                                    <Typography textAlign='center' variant="h4" mb={2} className='fontPoppins' sx={{ color: '#262626' }}>{projects[0].name}</Typography>
                                    <Stack spacing={1} direction='row' justifyContent='center'>
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