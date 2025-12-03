import React from "react";

import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaJs,
    FaPython,
    FaGithub,
    FaCloud,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiMysql,
    SiFlask,
    SiCanva,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-6xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-6xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-6xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-6xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-6xl" /> },
    { name: "Python", icon: <FaPython className="text-blue-500 text-6xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700 text-6xl" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-700 text-6xl" /> },
    { name: "API Integration", icon: <FaCloud className="text-gray-500 text-6xl" /> }, // API skill
    { name: "VS Code", icon: <VscVscode className="text-blue-500 text-6xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-black text-6xl" /> },
    { name: "Canva", icon: <SiCanva className="text-purple-500 text-6xl" /> },
];

export default function Skills() {
    return (
        <div id="skills" className="flex flex-col justify-center items-center min-h-screen ">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center  text-gray-700 mt-20 mb-14">Skills Set</h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-5 ">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className=" flex flex-col items-center bg-gray-100 p-10 rounded-xl shadow-md hover:scale-105 hover:shadow-gray-500/50 transition duration-300 "
                    >
                        {skill.icon}
                        <p className="text-center font-semibold mt-3">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
