import { useContext } from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaJs,
    FaPython,
    FaGithub,
    FaCloud,
    FaNodeJs,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiMysql,
    SiFlask,
    SiCanva,
    SiMongodb,
    SiExpress,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { useTheme } from "../context/ThemeContext"; // adjust path

export default function Skills() {
    const { theme } = useTheme();
    const isLight = theme === "light";

    const skills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-6xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-6xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-6xl" /> },
        { name: "React", icon: <FaReact className="text-blue-400 text-6xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-6xl" /> },

        // 🔥 MERN STACK
        { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-6xl" /> },
        { name: "Express.js", icon: <SiExpress className={`text-6xl ${isLight ? "text-gray-800" : "text-gray-200"}`} /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-6xl" /> },

        // Other Skills
        { name: "Python", icon: <FaPython className="text-blue-500 text-6xl" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-700 text-6xl" /> },
        { name: "Flask", icon: <SiFlask className={`text-6xl ${isLight ? "text-gray-700" : "text-gray-300"}`} /> },
        { name: "API Integration", icon: <FaCloud className="text-sky-500 text-6xl" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-500 text-6xl" /> },
        { name: "GitHub", icon: <FaGithub className={`text-6xl ${isLight ? "text-black" : "text-white"}`} /> },
        { name: "Canva", icon: <SiCanva className="text-purple-500 text-6xl" /> },
    ];

    return (
        <section
            id="skills"
            className={`
                min-h-screen flex flex-col justify-center items-center px-6 py-20
                transition-colors duration-300
                ${isLight ? "bg-gray-100" : "bg-gray-900"}
            `}
        >
            {/* Section Title */}
            <h1
                className={`
                    text-3xl md:text-4xl font-bold text-center mt-6 mb-14
                    transition-colors duration-300
                    ${isLight ? "text-gray-800" : "text-gray-100"}
                `}
            >
                Skills Set
            </h1>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className={`
                            flex flex-col items-center p-8 rounded-2xl
                            shadow-md transition-all duration-300
                            hover:scale-105
                            ${isLight
                                ? "bg-gray-100 hover:shadow-gray-500/40"
                                : "bg-gray-800 hover:shadow-gray-700/60"}
                        `}
                    >
                        {skill.icon}
                        <p
                            className={`
                                text-center font-semibold mt-4 transition-colors duration-300
                                ${isLight ? "text-gray-800" : "text-gray-200"}
                            `}
                        >
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>

            {/* MERN Highlight Card */}
            <div
                className={`
                    mt-16 flex items-center gap-3 px-10 py-5 rounded-2xl
                    font-semibold tracking-wide text-base
                    shadow-md transition-all duration-300

                    ${isLight
                        ? "bg-gray-100 text-gray-800 hover:shadow-gray-500/40 hover:text-purple-600"
                        : "bg-gray-800 text-gray-200 hover:shadow-gray-700/60 hover:text-purple-300"}
                    `}
            >
                <span className="text-lg">🚀</span>
                <span>MERN Stack Developer</span>
            </div>
        </section>
    );
}
