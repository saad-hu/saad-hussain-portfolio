import { useEffect, useRef, useState } from 'react';

// components
import ProjectsContainer from './ProjectsContainer';

// MUI
import { Box, Typography } from '@mui/material';


import "./projects-display.scss";



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
                threshold: 1
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

            <ProjectsContainer />
        </Box>
    );
}


export default ProjectsDisplay;