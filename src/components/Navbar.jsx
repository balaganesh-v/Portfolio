import { useState } from "react";
import { Menu, X } from "lucide-react"; // modern icons

function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-white text-gray-900 shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* LOGO */}
                <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
                    Bala <span className="text-blue-700">Dev</span>
                </h1>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex items-center space-x-8 text-lg font-medium">
                    <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
                    <li><a href="#skills" className="hover:text-blue-600 transition">Skills</a></li>
                    <li><a href="#qualification" className="hover:text-blue-600 transition">Qualification</a></li>
                    <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
                </ul>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden text-3xl p-2 rounded hover:bg-gray-100 transition"
                    onClick={toggleMenu}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            <div
                className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
                    open ? "max-h-96 py-4" : "max-h-0"
                }`}
            >
                <ul className="px-6 space-y-4 text-lg font-medium">
                    <li><a href="#home" onClick={toggleMenu} className="block hover:text-blue-600">Home</a></li>
                    <li><a href="#about" onClick={toggleMenu} className="block hover:text-blue-600">About</a></li>
                    <li><a href="#skills" onClick={toggleMenu} className="block hover:text-blue-600">Skills</a></li>
                    <li><a href="#qualification" onClick={toggleMenu} className="block hover:text-blue-600">Qualification</a></li>
                    <li><a href="#projects" onClick={toggleMenu} className="block hover:text-blue-600">Projects</a></li>
                    <li><a href="#contact" onClick={toggleMenu} className="block hover:text-blue-600">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
