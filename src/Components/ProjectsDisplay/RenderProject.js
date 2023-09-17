import { memo } from "react"

// MUI
import { Box, Typography, Grid, Link, IconButton, Tooltip, styled, Divider } from '@mui/material';

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';


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
    paddingBottom: "4%",

    backgroundColor: "rgba(0,0,0,0.6)",

    transition: "opacity 300ms linear",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
});
const InfoText = styled(Typography)(({ fontSize }) => ({
    color: "white",
    fontSize: fontSize || "1.2rem",
    marginBottom: "4px"
}))
const ProjectContainer = styled('div')({
    height: "300px",
    border: "1px solid white",
    backgroundColor: "white",

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
const BgImage = styled('img')((props) => {
    return {
        width: "100%",
        height: "100%",

        objectFit: props?.imageObjectFit || "cover"
    }
});


const RenderProject = ({ project}) => {

    return (
        <Grid
            item
            xs={12} sm={6} md={4} xl={3}
        >
            <ProjectContainer>

                <ProjectInfoContainer className="info-container">
                    <InfoText>{project.name}</InfoText>

                    <Box className="tech-used-container">
                        {project.techUsed?.map((tech, index) => (
                            <div key={index} className="tech-box">
                                <Typography
                                    variant="caption"
                                    className="poppins-font"
                                    sx={{ marginRight: "5px" }}
                                >
                                    {tech}
                                </Typography>

                                {index !== project.techUsed?.length - 1 && (
                                    <Divider orientation="vertical" flexItem color="white" />
                                )}
                            </div>
                        ))}
                    </Box>

                </ProjectInfoContainer>

                <BgImage src={project.image} imageObjectFit={project.bgImageObjectFit} />

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
    )
}

export default memo(RenderProject)