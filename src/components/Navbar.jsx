import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const menuItems = [
        "home",
        "about",
        "skills",
        "qualifications",
        "projects",
        "contact",
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50
                ${theme === "light"
                ? "bg-gray-100 text-purple-700 shadow-lg"
                : "bg-gray-700 text-gray-100 shadow-xl/10 "}
            `}
        >
            {/* NavBar Container */}
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Title Logo */}
                <h1
                    className={`
                        font-bold tracking-wide transition-all duration-300
                        text-xl sm:text-2xl md:text-2xl
                        ${theme === "light"
                            ? "text-purple-600 hover:text-purple-800"
                            : "text-cyan-400 hover:text-cyan-500"}
                        `}
                >
                    Bala Dev
                </h1>

                {/* Desktop Menu's List */}
                <ul className="hidden md:flex items-center space-x-8 text-lg font-medium">
                    {menuItems.map((item) => (
                        <li key={item}>
                            <a href={`#${item}`}
                                className={` transition
                                    ${theme === "light"
                                        ? "text-gray-700 hover:text-purple-700"
                                        : "text-gray-300 hover:text-cyan-400"}
                                `}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Themes and MobileMenu Button */}
                <div className="flex items-center space-x-3">
                    <button
                        onClick={toggleTheme}
                        className={`
                            p-2 rounded-full transition
                            ${theme === "light"
                                ? "bg-white text-purple-700 hover:bg-purple-600 hover:text-white shadow-xl hover:shadow-xl/20"
                                : "bg-gray-600 text-yellow-400 hover:bg-cyan-300 hover:text-gray-800 shadow-xl hover:shadow-xl/20 "}
                        `}
                    >
                        {theme === "dark" ? (
                            <Sun size={20} />
                        ) : (
                            <Moon size={20} />
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`
                            md:hidden p-2 rounded transition text-md
                            ${theme === "light"
                                ? "hover:bg-purple-200 text-gray-900"
                                : "hover:bg-slate-700 text-gray-100"}
                        `}
                    >
                        {menuOpen ? (
                            <X size={28}
                                className={` ${theme === "light" ? "text-purple-600" : "text-cyan-400"}`}
                            />
                        ) : (
                            <Menu size={28}
                                className={` ${theme === "light" ? "text-purple-600" : "text-cyan-400"}`}
                            />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
                    md:hidden overflow-hidden transition-all duration-300
                    ${menuOpen ? "max-h-96 py-4" : "max-h-0"}
                    ${theme === "light" ? "bg-gray-100 text-gray-700" : "bg-gray-800 text-gray-100"}
                `}
            >
                <ul className="px-6 text-md font-medium">
                    {menuItems.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                onClick={() => setMenuOpen(false)}
                                className={`
                                    block py-3 border-b transition-colors duration-300 ease-in-out
                                    ${theme === "light"
                                        ? "text-gray-700 hover:text-purple-700"
                                        : "text-gray-300 hover:text-cyan-400"}
                                    `}
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
