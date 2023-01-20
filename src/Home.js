import { Grid, Typography, Stack, Box } from "@mui/material";

import MongoLogo from './logos/mongodb-icon.svg'
import ExpressLogo from './logos/expressjs-icon.svg';
import ReactLogo from './logos/reactjs-icon.svg';
import NodeLogo from './logos/nodejs-icon.svg';

import { grey } from '@mui/material/colors';

// const color = red[500];



function Home() {
    return (
        <Grid container bgcolor={grey[400]} py={5}>


            <Grid item xs={12} sm={6} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Typography variant='h2' align='center'>Saad Hussain</Typography>
                <Typography variant='h6' align='center'>MERN Stack Developer</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Stack alignItems="center" justifyContent="center" spacing={5} mb={5} direction={{ xs: 'column', sm: 'row' }}>
                    <img src={MongoLogo} alt="MongoDB logo" className="mern-svg rotate-vert-center" />
                    <img src={ExpressLogo} alt="Express logo" className="mern-svg rotate-vert-center" />
                </Stack>

                <Stack alignItems="center" justifyContent="center" spacing={2}  direction={{ xs: 'column', sm: 'row' }}>
                    <img src={ReactLogo} alt="React logo" className="mern-svg rotate-vert-center" />
                    <img src={NodeLogo} alt="Node logo" className="mern-svg rotate-vert-center" />
                </Stack>
            </Grid>



        </Grid>
    )
}

export default Home;