import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaPinterest } from "react-icons/fa";

function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 ">
            {/* SOCIAL BAR */}
            <div className="hidden sm:flex flex-col items-center space-y-4 absolute left-26 top-1/2 -translate-y-1/2">
                <a href="https://github.com/balaganesh-v" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 hover:scale-110 transition text-2xl">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/bala-ganesh-114833222/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#0A66C2] hover:scale-110 transition text-2xl">
                    <FaLinkedin />
                </a>
                <a href="mailto:vbalaganesh2007@gmail.com" className="text-gray-700 hover:text-red-500 hover:scale-110 transition text-2xl">
                    <FaEnvelope />
                </a>
                <a href="https://instagram.com/rolls_royce_828" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#E1306C] hover:scale-110 transition text-2xl">
                    <FaInstagram />
                </a>
                <a href="https://pinterest.com/vbalaganesh2007" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#BD081C] hover:scale-110 transition text-2xl">
                    <FaPinterest />
                </a>
                <div className="w-[2px] h-20 bg-gray-300"></div>
            </div>

            <div className="flex flex-col justify-center items-center ">
                <div className="text-5xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                    Hi, I'm{" "}
                </div>
                <div className=" text-5xl sm:text-4xl md:text-5xl font-extrabold text-gray-500">
                    V. Balaganesh
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-10">
                <p className="text-gray-700 text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed mb-8">
                    Aspiring Web Developer • React • Tailwind CSS • JavaScript
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
                <a href="#skills"
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-xl hover:shadow-blue-500/50 transition">
                    View Skills
                </a>

                <a
                    href="#contact"
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl bg-white shadow-lg hover:shadow-gray-500/50  transition"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
}

export default Hero;
