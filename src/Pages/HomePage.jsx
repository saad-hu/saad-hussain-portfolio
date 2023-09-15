import Hero from "../Components/Hero/Hero"
import ProjectsDisplay from "../Components/ProjectsDisplay/ProjectsDisplay"
import Skills from "../Components/Skills/Skills"
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"
import Contact from "../Components/Contact/Contact"

// MUI
import { Toolbar } from "@mui/material"


const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Toolbar />
            <Hero />
            <ProjectsDisplay />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage