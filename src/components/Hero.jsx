import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaPinterest } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Hero() {
    const { theme } = useTheme();
    const isLight = theme === "light";

    return (
        <section
            id="home"
            className={`
                relative min-h-screen flex flex-col justify-center items-center text-center px-6
                transition-colors duration-300
                ${isLight ? "bg-white text-gray-900" : "bg-gray-900 text-gray-100"}
            `}
        >
            {/* SOCIAL BAR – DESKTOP */}
            <div className="hidden md:flex absolute left-1/7 top-1/2 -translate-y-1/2">
                <SocialLinks direction="col" theme={theme} />
            </div>

            {/* HERO TEXT */}
            <div className="flex flex-col items-center justify-center">
                <div className={`text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300
                        ${isLight ? "text-purple-600" : " text-gray-100"}
                    `}>
                    Hi, I'm
                </div>
                <div className={`text-3xl md:text-5xl font-extrabold transition-colors duration-300
                    ${isLight ? "text-gray-500 hover:text-gray-600" : "text-cyan-400  hover:text-gray-500"}
                `}>
                    V. Balaganesh
                </div>
            </div>

            {/* TAGLINE */}
            <p className={`text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed mt-8 text-center transition-colors duration-300
                ${isLight ? "text-gray-700" : "text-gray-300"}
            `}>
                Aspiring Full Stack Web Developer • Python • JavaScript • Tailwind CSS • React • Java Basics
            </p>

            {/* SOCIAL ROW – MOBILE */}
            <div className="flex md:hidden mt-6">
                <SocialLinks direction="row" theme={theme} />
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
                <a
                    href="#skills"
                    className={`px-6 py-3 rounded-3xl shadow-xl transition-all duration-300
                        ${isLight
                            ? "bg-purple-500 text-white hover:bg-purple-600 hover:shadow-purple-500/50"
                            : "bg-cyan-400 text-white hover:bg-cyan-300 hover:shadow-cyan-500/50"
                        }
                    `}
                >
                    View Skills
                </a>

                <a
                    href="#contact"
                    className={`px-6 py-3 rounded-3xl shadow-xl border transition-all duration-300
                        ${isLight
                            ? "bg-gray-200 text-black border-gray-300 hover:bg-gray-300 hover:shadow-gray-500/50"
                            : "bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:shadow-gray-700/50"
                        }
                    `}
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
}

/* Reusable Social Links */
const SocialLinks = ({ direction, theme }) => {
    const isLight = theme === "light";
    const baseColor = isLight ? "text-gray-700" : "text-gray-300";

    return (
        <div className={`flex ${direction === "col" ? "flex-col space-y-4" : "flex-row space-x-6"}`}>
            <a href="https://github.com/balaganesh-v" target="_blank" rel="noopener noreferrer"
                className={`${baseColor} ${isLight ? "hover:text-green-600" : "hover:text-green-400"}  hover:scale-110 transition-all duration-300 text-2xl`}
            >
                <FaGithub />
            </a>
            <a href="https://linkedin.com/in/bala-ganesh-114833222/" target="_blank" rel="noopener noreferrer"
                className={`${baseColor} ${isLight ? "hover:text-cyan-600" : "hover:text-cyan-400"} hover:scale-110  transition-all duration-300 text-2xl`}
            >
                <FaLinkedin />
            </a>
            <a href="mailto:vbalaganesh2007@gmail.com"
                className={`${baseColor} hover:text-red-500 hover:scale-110 transition-all duration-300 text-2xl`}
            >
                <FaEnvelope />
            </a>
            <a href="https://instagram.com/_.ganeshxx._21" target="_blank" rel="noopener noreferrer"
                className={`${baseColor} hover:text-[#E1306C] hover:scale-110 transition-all duration-300 text-2xl`}
            >
                <FaInstagram />
            </a>
            <a href="https://pinterest.com/vbalaganesh2007" target="_blank" rel="noopener noreferrer"
                className={`${baseColor} hover:text-[#BD081C] hover:scale-110 transition-all duration-300 text-2xl`}
            >
                <FaPinterest />
            </a>
        </div>
    );
};

export default Hero;
