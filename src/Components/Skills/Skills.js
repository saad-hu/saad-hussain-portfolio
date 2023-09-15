import { useEffect, useRef, useState } from 'react';

// MUI
import { Typography, Box } from "@mui/material";

import "./skills.scss";

const Skills = () => {

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
            // px={3} pt={4} pb={6}
            id="skills-section"
            className="skills-section"
        >
            <Typography
                variant='h3'
                textAlign='center'
                className='heading hidden'
                ref={headingRef}
            >
                Skills
            </Typography>


            <Box
                className="skills-container"
            >
                {skills.map((skill, index) => (
                    <Box
                        className="skill-box"
                        key={index}
                    >
                        <Typography
                            variant="body1 font-poppins"
                            sx={{fontSize: "20px"}}
                        >
                            {skill}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

const skills = [
    'JavaScript',
    'MongoDB',
    'Express.js',
    'React JS',
    'Node.js',
    'Webpack',
    'Redux/Redux Toolkit',
    'Firebase',
    'Material UI',
    'Socket.io',
    'Bootstrap 5',
    'HTML5',
    'CSS3',
    'SQL',
    'C/C++',
    'MATLAB',
    'Linux OS (Ubuntu)',
    'WordPress'
];

export default Skills;