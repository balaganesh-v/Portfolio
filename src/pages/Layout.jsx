import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Qualifications from "../components/Qualifications";
import Skills from "../components/Skills";
import Contact from "../components/Contact";


function Layout() {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Qualifications />
            <Skills />
            <Contact />
        </div>
    );
};

export default Layout;
