import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Qualifications from "../components/Qualifications";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


function Layout() {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Qualifications />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Layout;
