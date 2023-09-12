import { useState, useLayoutEffect, useRef } from 'react';

// MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

// icons
import KeyboardIcon from '@mui/icons-material/Keyboard';

import "./navbar.scss"

import gsap from 'gsap';

const pages = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "#projects-section" },
    { name: "Skills", link: "#skills-section" },
    { name: "Contact", link: "/" },
];

function ResponsiveAppBarWithMenuOnly() {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    let timeline = useRef();

    useLayoutEffect(() => {
        let context = gsap.context(() => {

            timeline.current = gsap.timeline()
                .from(".navbar", {
                    delay: 2,
                    duration: 1,
                    y: "-120%",
                    ease: "bounce"
                })
        })

        return () => context.revert();
    }, [])

    return (
        <>
            <AppBar
                position="fixed"
                className='navbar'
                sx={{
                    backgroundColor: "var(--primary-bg)",
                    boxShadow: "0px 1px 10px 2px rgb(112, 112, 112)",
                    WebkitBoxShadow: "0px 1px 10px 2px rgb(112, 112, 112)",
                    MozBoxShadow: "0px 1px 10px 2px rgb(112, 112, 112)",
                }}
            >
                <Container maxWidth="xl" className='navbar-container'>
                    <Toolbar disableGutters>
                        {/* the below KeyboardIcon(logo) and Typography(company name) are hidden in xs and md screens. this is for the screens above md */}
                        <KeyboardIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 0.5 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',

                            }}
                        >
                            S.H
                        </Typography>

                        {/* this box contains the pages buttons/links for screens above md.  */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: "flex-end"
                            }}

                        >
                            {pages.map((page) => (
                                <a
                                    href={page.link}
                                    key={page.name}
                                    className='link-style-reset navbar-link-desktop'
                                >
                                    <Typography>
                                        {page.name}
                                    </Typography>
                                </a>
                            ))}
                        </Box>



                        {/* this Box contains the hamburger icon and menu for screens below md. upon clicking 'nav' menu opens */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            {/* the 'nav' menu */}
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page.name}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <a
                                            href={page.link}
                                            className='link-style-reset'
                                        >
                                            <Typography>
                                                {page.name}
                                            </Typography>
                                        </a>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>


                        {/* the below KeyboardIcon(logo) and Typography(company name) are hidden in screens above md. this is for the screens below md */}
                        <KeyboardIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            S.H
                        </Typography>

                    </Toolbar>
                </Container>

            </AppBar>
        </>
    );
}
export default ResponsiveAppBarWithMenuOnly;