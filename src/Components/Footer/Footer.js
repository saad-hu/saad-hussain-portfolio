import { Box, Link, IconButton, Typography, Divider } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';


import "./footer.scss"

const Footer = () => {

    return (
        <Box
            className="footer"
        >
            <Link
                href='https://github.com/saad-hu'
                className="link-style-reset"
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
                            fontSize: 22,
                            color: "white",
                        }}
                    />
                </IconButton>
            </Link>


            <Divider orientation="vertical" flexItem />

            <Typography
                variant="body1"
                className="poppins-font"
            >
                saad9191h@gmail.com
            </Typography>


            <Divider orientation="vertical" flexItem />


            <Typography
                variant="body1"
                className="poppins-font"
            >
                &#169; {new Date().getFullYear()} Saad Hussain
            </Typography>


        </Box>
    );
}

export default Footer;
