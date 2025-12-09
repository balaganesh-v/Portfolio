import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaPinterest } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-8 mt-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">

                {/* Brand Info */}
                <div>
                    <h2 className="text-xl font-semibold">Bala Dev</h2>
                    <p className="text-sm text-gray-400 mt-2">
                        © {new Date().getFullYear()} All Rights Reserved.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-medium mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-gray-300 text-sm">
                        <li><a href="#about" className="hover:text-white">About</a></li>
                        <li><a href="#projects" className="hover:text-white">Projects</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Connect / Social Icons */}
                <div>
                    <h3 className="text-lg font-medium mb-2">Connect</h3>
                    <div className="flex justify-center md:justify-start gap-4 text-2xl">
                        <a href="https://github.com/balaganesh-v" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/bala-ganesh-114833222/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:vbalaganesh2007@gmail.com" className="hover:text-gray-400">
                            <FaEnvelope />
                        </a>
                        <a href="https://instagram.com/_.ganeshxx._21" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaInstagram />
                        </a>
                        <a href="https://pinterest.com/vbalaganesh2007" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaPinterest />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
