import Hero from "../Components/Hero/Hero"
import ProjectsDisplay from "../Components/ProjectsDisplay"
import Skills from "../Components/Skills"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar/Navbar"
// import Testing from "../Testing"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />

            {/* <Testing /> */}

            <ProjectsDisplay />
            <Skills />
            <Footer />
        </div>
    )
}

export default HomePage