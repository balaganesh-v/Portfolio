import React from "react";
import { FaSchool, FaGraduationCap, FaUniversity } from "react-icons/fa";

function Qualifications() {
    const qualifications = [
        {
            title: "SSLC",
            school: "Boo Vijesh Matric Hr. Sec. School, Mukkudal",
            year: "2022",
            score: "91% (School First)",
            icon: <FaSchool className="text-gray-900 text-3xl" />,
        },
        {
            title: "HSC",
            school: "St. Joseph Matric Hr. Sec. School, Alangulam",
            year: "2024",
            score: "92.1%",
            icon: <FaGraduationCap className="text-gray-900 text-3xl" />,
        },
        {
            title: "College",
            school: "Government College of Engineering, Tirunelveli",
            year: "2024-Present",
            score: "Computer Science",
            icon: <FaUniversity className="text-gray-900 text-3xl" />,
        },
    ];

    return (
        <section id="qualification" className="py-24 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-20">
                    Qualifications
                </h2>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-0 w-1 h-full bg-gray-300"></div>

                    {/* Cards */}
                    <div className="flex flex-col space-y-16">
                        {qualifications.map((q, idx) => (
                            <div key={idx} className="flex items-start relative">
                                {/* Icon Dot */}
                                <div className="absolute left-0 mt-2 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-md z-10">
                                    {q.icon}
                                </div>

                                {/* Card */}
                                <div className="ml-20 w-full">
                                    <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-gray-300 transition-transform duration-300">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {q.title}
                                        </h3>
                                        <p className="text-gray-700 mb-1">{q.school}</p>
                                        <p className="text-gray-500 font-medium">
                                            {q.year} • {q.score}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualifications;
