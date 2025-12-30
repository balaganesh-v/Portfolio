import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaInstagram,
    FaPinterest
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
    const { theme } = useTheme();
    const isLight = theme === "light";

    return (
        <footer
            className={`
                w-full py-8 border-t transition-colors duration-300
                ${isLight
                    ? "bg-gray-200 text-gray-800 border-gray-200"
                    : "bg-gray-900 text-white border-gray-700"}
            `}
        >
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">

                {/* Brand Info */}
                <div>
                    <h2 className="text-xl font-semibold">
                        Bala Dev
                    </h2>
                    <p
                        className={`text-sm mt-2
                            ${isLight ? "text-gray-600" : "text-gray-400"}
                        `}
                    >
                        © {new Date().getFullYear()} All Rights Reserved.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-medium mb-2">
                        Quick Links
                    </h3>
                    <ul
                        className={`space-y-1 text-sm
                            ${isLight ? "text-gray-700" : "text-gray-300"}
                        `}
                    >
                        <li>
                            <a href="#about" className="hover:text-blue-500 transition-colors">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-blue-500 transition-colors">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-blue-500 transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div>
                    <h3 className="text-lg font-medium mb-2">
                        Connect
                    </h3>
                    <div className="flex justify-center md:justify-start gap-4 text-2xl">
                        <a
                            href="https://github.com/balaganesh-v"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/bala-ganesh-114833222/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:vbalaganesh2007@gmail.com"
                            className="hover:text-blue-500 transition-colors"
                        >
                            <FaEnvelope />
                        </a>
                        <a
                            href="https://instagram.com/_.ganeshxx._21"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition-colors"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://pinterest.com/vbalaganesh2007"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-500 transition-colors"
                        >
                            <FaPinterest />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
