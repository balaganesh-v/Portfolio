import React from "react";
import todoImage from "../assets/todo-project.png";

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                My Project
            </h2>

            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Project Image */}
                <img
                    src={todoImage}
                    alt="FastAPI Todo App"
                    className="w-full h-68 object-cover"
                />

                {/* Project Content */}
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        FastAPI ToDo App
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        A clean and modern ToDo application built using FastAPI along with a
                        simple HTML & CSS interface. The app supports adding, editing,
                        updating, and deleting tasks with a clean UI—just like the look in
                        the screenshot above.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
