import { useLayoutEffect, useRef, useEffect } from "react";

// gsap
import gsap from "gsap";

// MUI
import { Grid, Typography, Stack } from "@mui/material";

import "./hero.scss"


const introSentences = ['Software Engineer', 'MERN Stack Developer', 'Programming Enthusiast'];


function Hero() {

    let timeline = useRef();
    let introSliderTimeline = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            timeline.current = gsap.timeline()
                .from(".name-intro-container", {
                    x: "-100%",
                    delay: 0.5,
                    duration: 1,
                })
                .to(".name.text-shadow", {
                    textShadow: "5px 5px 10px rgb(150, 150, 150)",
                    duration: 1
                })
                .from(".mern-logos-container", {
                    x: "100%",
                    duration: 0.8,
                })


        })


        return () => ctx.revert();
    }, [])



    // useLayoutEffect for vertical slider for intro sentences
    useLayoutEffect(() => {
        let context = gsap.context(() => {
            let numberOfTargets = introSentences.length

            let duration = 0.6 //change this
            let pause = 2 // change this

            let stagger = duration + pause
            let repeatDelay = (stagger * (numberOfTargets - 1)) + pause

            introSliderTimeline.current = gsap.timeline({ repeat: 20, delay: 1.5 })
                .from(".animation-sentence", {
                    y: 80, duration: duration, opacity: 0, stagger: {
                        each: stagger,
                        repeat: -1,
                        repeatDelay: repeatDelay
                    }
                })
                .to(".animation-sentence", {
                    y: -80, duration: duration, opacity: 0, stagger: {
                        each: stagger,
                        repeat: -1,
                        repeatDelay: repeatDelay
                    }
                }, stagger)
        })


        return () => context.revert();
    }, [])




    return (
        <Grid
            px={1}
            py={5}
            container
            className="hero-container"
        >

            {/* name and intro */}
            <Grid
                item
                xs={12} sm={6}
                className="name-intro-container"
            >
                {/* name */}
                <Typography
                    variant='h2'
                    align='center'
                    className="name text-shadow"
                >
                    Saad Hussain
                </Typography>


                <div className="slider-animation-sentences-conatiner">
                    {introSentences.map((sentence, index) => (
                        <Typography
                            className="animation-sentence"
                            key={index}
                        >
                            {sentence}
                        </Typography>
                    ))}
                </div>
            </Grid>




            {/* MERN logos */}
            <Grid
                item
                xs={12} sm={6}
                className="mern-logos-container"
            >
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    spacing={3}
                    mb={3}
                    direction={{ xs: 'column', sm: 'row' }}
                >
                    <img
                        src={process.env.PUBLIC_URL + "/Assets/mongodb-icon.svg"}
                        alt="MongoDB logo"
                        className="mern-svg rotate-vert-center"
                    />
                    <img
                        src={process.env.PUBLIC_URL + "/Assets/javascript-icon.svg"}
                        alt="Javascript logo"
                        className="mern-svg rotate-vert-center"
                    />
                </Stack>

                <Stack
                    alignItems="center"
                    justifyContent="center"
                    spacing={3}
                    direction={{ xs: 'column', sm: 'row' }}
                >
                    <img
                        src={process.env.PUBLIC_URL + "/Assets/reactjs-icon.svg"}
                        alt="React logo"
                        className="mern-svg rotate-vert-center"
                    />
                    <img
                        src={process.env.PUBLIC_URL + "/Assets/nodejs-icon.svg"}
                        alt="Node logo"
                        className="mern-svg rotate-vert-center"
                    />
                </Stack>
            </Grid>

        </Grid>
    )
}

export default Hero;