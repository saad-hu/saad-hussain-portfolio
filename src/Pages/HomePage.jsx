import Hero from "../Components/Hero/Hero"
import ProjectsDisplay from "../Components/ProjectsDisplay/ProjectsDisplay"
import Skills from "../Components/Skills"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar/Navbar"

import { Toolbar } from "@mui/material"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Toolbar />
            <Hero />


            <ProjectsDisplay />
            <Skills />
            <Footer />
        </div>
    )
}

export default HomePage