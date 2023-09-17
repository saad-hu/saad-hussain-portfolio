import { memo } from "react"

// components
import RenderProject from "./RenderProject";

// MUI
import { Grid } from '@mui/material';

const ProjectsGrid = ({ projects }) => {

    return (
        <Grid container spacing={3} marginBottom={4}>
            {projects.map((project, index) => (
                <RenderProject
                    project={project}
                    key={index}
                />
            ))}
        </Grid >
    )
}

export default memo(ProjectsGrid);