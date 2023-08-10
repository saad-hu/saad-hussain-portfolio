import { Grid, Typography, Stack } from "@mui/material";


function Hero() {
    return (
        <Grid px={1} container py={5}>


            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant='h1' align='center' sx={{ fontFamily: "Playball, cursive" }}>Saad Hussain</Typography>
                <Typography variant='body1' align='center' mb={1} className='fontPoppins'>MERN Stack/JavaScript Developer</Typography>
                <Typography variant='body1' align='center' mb={2} className='fontPoppins'>Programming Enthusiast</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Stack alignItems="center" justifyContent="center" spacing={3} mb={3} direction={{ xs: 'column', sm: 'row' }}>
                    <img src={process.env.PUBLIC_URL + "/Assets/mongodb-icon.svg"} alt="MongoDB logo" className="mern-svg rotate-vert-center" />
                    <img src={process.env.PUBLIC_URL + "/Assets/expressjs-icon.svg"} alt="Express logo" className="mern-svg rotate-vert-center" />
                </Stack>

                <Stack alignItems="center" justifyContent="center" spacing={3} direction={{ xs: 'column', sm: 'row' }}>
                    <img src={process.env.PUBLIC_URL + "/Assets/reactjs-icon.svg"} alt="React logo" className="mern-svg rotate-vert-center" />
                    <img src={process.env.PUBLIC_URL + "/Assets/nodejs-icon.svg"} alt="Node logo" className="mern-svg rotate-vert-center" />
                </Stack>
            </Grid>

        </Grid>
    )
}

export default Hero;