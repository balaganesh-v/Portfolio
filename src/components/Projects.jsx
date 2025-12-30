import todoImage from "../assets/todolist-project.png";
import phoneBookImage from "../assets/phonebook-project.png";
import { useTheme } from "../context/ThemeContext"; // adjust path if needed

const Projects = () => {
    const { theme } = useTheme();
    const isLight = theme === "light";

    const projects = [
        {
            title: "Todo List Application",
            image: todoImage,
            description: (
                <>
                    A modern Todo List application built using <strong>React</strong> and{" "}
                    <strong>Tailwind CSS</strong> for the frontend, with{" "}
                    <strong>FastAPI</strong> and <strong>Python</strong> powering the backend.
                    Supports full CRUD operations with a clean UI.
                </>
            ),
            links: [
                {
                    label: "View on GitHub →",
                    url: "https://github.com/balaganesh-v/Todo-list",
                    color:`${isLight ? "text-blue-600" : "text-cyan-400"}` ,
                },
            ],
        },
        {
            title: "Phone Book Application",
            image: phoneBookImage,
            description: (
                <>
                    A full-stack <strong>MERN</strong> Phone Book application with{" "}
                    <strong>Light & Dark modes</strong>. Fully deployed and optimized
                    for smooth, responsive user experience.
                </>
            ),
            links: [
                {
                    label: "Live Demo →",
                    url: "https://vbalaganesh-phonebook-version2.vercel.app/",
                    color: `${isLight ? "text-blue-600" : "text-cyan-400"}`,
                },
                {
                    label: "GitHub →",
                    url: "https://github.com/balaganesh-v/Phonebook",
                    color: `${isLight ? "text-green-600" : "text-green-300"}`,
                },
            ],
        },
    ];

    return (
        <section
            id="projects"
            className={`
                py-24 px-6 transition-colors duration-300
                ${isLight ? "bg-white" : "bg-gray-900"}
            `}
        >
            {/* Section Title */}
            <h2
                className={`
                    text-4xl font-bold text-center mt-6 mb-16 transition-colors duration-300
                    ${isLight ? "text-gray-800" : "text-gray-100"}
                `}
            >
                Projects
            </h2>

            {/* Projects Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-10 place-items-center">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`
                            w-full max-w-sm rounded-xl overflow-hidden
                            shadow-md transition-all duration-300
                            hover:-translate-y-1
                            ${isLight
                                ? "bg-white hover:shadow-gray-400/50"
                                : "bg-gray-800 hover:shadow-gray-700/60"}
                        `}
                    >
                        {/* Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-52 object-cover"
                        />

                        {/* Content */}
                        <div className="p-6">
                            <h3
                                className={`
                                    text-xl font-semibold mb-3 transition-colors duration-300
                                    ${isLight ? "text-gray-900" : "text-gray-100"}
                                `}
                            >
                                {project.title}
                            </h3>

                            <p
                                className={`
                                    text-sm leading-relaxed mb-4 transition-colors duration-300
                                    ${isLight ? "text-gray-600" : "text-gray-300"}
                                `}
                            >
                                {project.description}
                            </p>

                            <div className="flex gap-6 flex-wrap">
                                {project.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                            font-medium hover:underline transition
                                            ${link.color}
                                        `}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
