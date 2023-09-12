import { Typography, Box, Stack } from "@mui/material";


const skills = ['JavaScript', 'MongoDB', 'Express.js', 'React JS', 'Node.js', 'Webpack', 'Redux/Redux Toolkit', 'Firebase','Material UI', 'Socket.io', 'Bootstrap 5', 'HTML5', 'CSS3', 'SQL', 'C/C++', 'MATLAB', 'Linux OS (Ubuntu)', 'WordPress'];

const Skills = () => {
    return (
        <Box px={3} pt={4} pb={6} id="skills-section">
            <Typography variant='h2' mb={4} textAlign='center' className='fontPoppins' sx={{ color: '#262626' }}>Skills</Typography>

            <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {skills.map((skill, index) => (
                    <Box sx={{ border: '2px solid #93c5fd', borderRadius: 2, padding: '10px 15px' }} key={index}>
                        <Typography variant="body1" sx={{ fontSize: 20 }}>{skill}</Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}

export default Skills;