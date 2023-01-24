import { Grid, Typography, Stack } from "@mui/material";

import MongoLogo from './logos/mongodb-icon.svg'
import ExpressLogo from './logos/expressjs-icon.svg';
import ReactLogo from './logos/reactjs-icon.svg';
import NodeLogo from './logos/nodejs-icon.svg';




function Home() {
    return (
        <Grid container py={5} sx={{backgroundColor: '#525252', color: '#fafafa'}}>


            <Grid item xs={12} sm={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Typography variant='h2' align='center' sx={{fontFamily: "Playball, cursive"}}>Saad Hussain</Typography>
                <Typography variant='body1' align='center' mb={2}>MERN Stack/JavaScript Developer</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Stack alignItems="center" justifyContent="center" spacing={3} mb={3} direction={{ xs: 'column', sm: 'row' }}>
                    <img src={MongoLogo} alt="MongoDB logo" className="mern-svg rotate-vert-center" />
                    <img src={ExpressLogo} alt="Express logo" className="mern-svg rotate-vert-center" />
                </Stack>

                <Stack alignItems="center" justifyContent="center" spacing={3}  direction={{ xs: 'column', sm: 'row' }}>
                    <img src={ReactLogo} alt="React logo" className="mern-svg rotate-vert-center" />
                    <img src={NodeLogo} alt="Node logo" className="mern-svg rotate-vert-center" />
                </Stack>
            </Grid>



        </Grid>
    )
}

export default Home;