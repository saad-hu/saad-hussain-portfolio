import { Box, Link, IconButton, Typography, Divider } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

    function addRotationClass(event) {
        event.target.classList.add('rotate-scale-up');
    }

    function removeRotationClass(event) {
        event.target.classList.remove('rotate-scale-up');
    }

    return (
        <Box p={1} sx={{ backgroundColor: '#44403c', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <Link href='https://github.com/saad-hu' sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} >
                <IconButton component="label" onMouseEnter={addRotationClass} onMouseLeave={removeRotationClass}>
                    <GitHubIcon sx={{ fontSize: 30 }} />
                </IconButton>
            </Link>


            <Divider orientation="vertical" flexItem />

            <Typography variant="body1" sx={{ color: '#e5e5e5' }}>saad9191h@gmail.com</Typography>
        </Box>
    );
}

export default Footer;
