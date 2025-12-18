import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaPinterest } from "react-icons/fa";

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center items-center text-center px-6"
        >
            {/* SOCIAL BAR – DESKTOP */}
            <div className="hidden md:flex flex-col items-center space-y-4 absolute left-10 top-1/2 -translate-y-1/2">
                <SocialLinks direction="col" />
                <div className="w-[2px] h-20 bg-gray-300"></div>
            </div>

            {/* HERO TEXT */}
            <div className="flex flex-col items-center ">
                <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
                    Hi, I'm
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-gray-500 hover:text-gray-600 transition">
                    V. Balaganesh
                </div>
            </div>

            {/* TAGLINE */}
            <p className="text-gray-700 text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed mt-8 text-center">
                Aspiring Full Stack Web Developer • Python • React • Tailwind CSS • JavaScript • Java Basics
            </p>

            {/* SOCIAL ROW – MOBILE */}
            <div className="flex md:hidden mt-6">
                <SocialLinks direction="row" />
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
                <a
                    href="#skills"
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-xl hover:bg-blue-500 hover:shadow-blue-500/50 transition"
                >
                    View Skills
                </a>

                <a
                    href="#contact"
                    className="px-6 py-3 border border-gray-900 text-black rounded-xl bg-gray-200 shadow-xl hover:bg-gray-300 hover:shadow-gray-500/50 transition"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
}

/* Reusable Social Links */
const SocialLinks = ({ direction }) => (
    <div className={`flex ${direction === "col" ? "flex-col space-y-4" : "flex-row space-x-6"}`}>
        <a href="https://github.com/balaganesh-v" target="_blank" rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 hover:scale-110 transition text-2xl">
            <FaGithub />
        </a>
        <a href="https://linkedin.com/in/bala-ganesh-114833222/" target="_blank" rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#0A66C2] hover:scale-110 transition text-2xl">
            <FaLinkedin />
        </a>
        <a href="mailto:vbalaganesh2007@gmail.com"
            className="text-gray-700 hover:text-red-500 hover:scale-110 transition text-2xl">
            <FaEnvelope />
        </a>
        <a href="https://instagram.com/_.ganeshxx._21" target="_blank" rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#E1306C] hover:scale-110 transition text-2xl">
            <FaInstagram />
        </a>
        <a href="https://pinterest.com/vbalaganesh2007" target="_blank" rel="noopener noreferrer"
            className="text-gray-700 hover:text-[#BD081C] hover:scale-110 transition text-2xl">
            <FaPinterest />
        </a>
    </div>
);

export default Hero;
