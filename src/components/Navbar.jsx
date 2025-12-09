import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    // State to track if the mobile menu is open or closed
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Menu items
    const menuItems = ["home", "about", "skills", "qualification", "projects", "contact"];

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-white text-gray-900 shadow-md">
            {/* Container */}
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-500 tracking-wide hover:text-blue-700 transition">
                    Bala Dev
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-8 text-lg font-medium">
                    {menuItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                className="hover:text-blue-600 transition"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    aria-label="Toggle Menu"
                    className="md:hidden text-3xl p-2 rounded hover:bg-gray-100 transition"
                    onClick={toggleMenu}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden bg-white shadow-md overflow-hidden transition-[max-height] duration-300 ${menuOpen ? "max-h-96 py-4" : "max-h-0"
                    }`}
            >
                <ul className="px-6 space-y-4 text-lg font-medium">
                    {menuItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                onClick={toggleMenu} // Close menu after clicking
                                className="block hover:text-blue-600"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
