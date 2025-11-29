import {
    FaInstagram,
    FaPinterest,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-[#eef4ff] via-white to-[#f4f8ff] relative"
        >

            {/* SOCIAL BAR (Closer to content) */}
            <div className="hidden sm:flex flex-col items-center space-y-4 absolute left-6 top-1/2 -translate-y-1/2">
                <a className="text-gray-700 hover:text-[#E1306C] hover:scale-125 transition text-3xl">
                    <FaInstagram />
                </a>
                <a className="text-gray-700 hover:text-[#BD081C] hover:scale-125 transition text-3xl">
                    <FaPinterest />
                </a>
                <a className="text-gray-700 hover:text-[#0A66C2] hover:scale-125 transition text-3xl">
                    <FaLinkedin />
                </a>
                <a className="text-gray-700 hover:text-[#1DA1F2] hover:scale-125 transition text-3xl">
                    <FaTwitter />
                </a>
                <div className="w-[2px] h-20 bg-gray-300"></div>
            </div>

            {/* MAIN TEXT */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 drop-shadow-sm mb-4">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                    V. Balaganesh
                </span>
            </h1>

            <p className="text-gray-700 text-lg sm:text-xl max-w-xl leading-relaxed mb-6">
                Aspiring Web Developer • React • Tailwind CSS • JavaScript
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4">
                <a
                    href="/projects"
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition"
                >
                    View Projects
                </a>

                <a
                    href="/contact"
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl bg-white hover:bg-blue-50 shadow hover:shadow-md transition"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
}

export default Hero;
