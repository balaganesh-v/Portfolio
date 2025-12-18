import React from "react";
import todoImage from "../assets/todolist-project.png";
import phoneBookImage from "../assets/phonebook-project.png";

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                My Projects
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
                
                {/* Project 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <img
                        src={todoImage}
                        alt="Todo List Application"
                        className="w-full h-56 object-cover"
                    />

                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            Todo List Application
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            A modern Todo List application built using <strong>React</strong> and
                            <strong> Tailwind CSS</strong> for the frontend, with
                            <strong> FastAPI</strong> and <strong>Python</strong> powering the backend.
                            The application supports creating, updating, and deleting tasks with
                            a clean and responsive UI.
                        </p>

                        <a
                            href="https://github.com/balaganesh-v/Todo-list"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-blue-600 font-medium hover:underline"
                        >
                            View on GitHub →
                        </a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <img
                        src={phoneBookImage}
                        alt="Phone Book Application"
                        className="w-full h-56 object-cover"
                    />

                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                            Phone Book Application
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            A full-stack <strong>MERN</strong> Phone Book application featuring
                            contact management with <strong>Light and Dark modes</strong>.
                            The project is fully deployed and provides a smooth,
                            user-friendly experience across devices.
                        </p>

                        <div className="flex gap-6">
                            <a
                                href="https://vbalaganesh-phonebook-version2.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 font-medium hover:underline"
                            >
                                Live Demo →
                            </a>

                            <a
                                href="https://github.com/balaganesh-v/Phonebook"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-medium hover:underline"
                            >
                                GitHub →
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
