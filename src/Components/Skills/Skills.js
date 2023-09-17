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
                            sx={{ fontSize: "20px" }}
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
    'C/C++',
    'React JS',
    'Redux/Redux Toolkit',
    'Node.js',
    'Express.js',
    'MongoDB',
    "Next.js",
    'Material UI',
    "Ant Design",
    "CoreUI",
    "styled-components",
    'Bootstrap',
    "WebSocket",
    'Socket.io',
    'SQL',
    "NoSQL",
    "EJS",
    "GSAP",
    "WordPress"
];

export default Skills;