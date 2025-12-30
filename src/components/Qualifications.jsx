import { FaSchool, FaGraduationCap, FaUniversity } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext"; // adjust path if needed

function Qualifications() {
    const { theme } = useTheme();
    const isLight = theme === "light";

    const qualifications = [
        {
            title: "SSLC",
            school: "Boo Vijesh Matric Hr. Sec. School, Mukkudal",
            year: "2022",
            score: "91% (School First)",
            icon: FaSchool,
        },
        {
            title: "HSC",
            school: "St. Joseph Matric Hr. Sec. School, Alangulam",
            year: "2024",
            score: "92.1%",
            icon: FaGraduationCap,
        },
        {
            title: "College",
            school: "Government College of Engineering, Tirunelveli",
            year: "2024 - Present",
            score: "Computer Science",
            icon: FaUniversity,
        },
    ];

    return (
        <section
            id="qualifications"
            className={`
                py-24 px-6 transition-colors duration-300
                ${isLight ? "bg-white" : "bg-gray-900"}
            `}
        >
            <div className="max-w-5xl mx-auto">

                {/* Section Title */}
                <h2
                    className={`
                        text-4xl font-bold text-center mt-6 mb-20 transition-colors duration-300
                        ${isLight ? "text-gray-900" : "text-gray-100"}
                    `}
                >
                    Qualifications
                </h2>

                {/* Timeline Container */}
                <div className="relative">

                    {/* Vertical Line */}
                    <div
                        className={`
                            absolute left-6 top-0 w-1 h-full transition-colors duration-300
                            ${isLight ? "bg-gray-300" : "bg-gray-700"}
                        `}
                    />

                    {/* Cards */}
                    <div className="flex flex-col space-y-16">
                        {qualifications.map((q, idx) => {
                            const Icon = q.icon;
                            return (
                                <div key={idx} className="flex items-start relative">

                                    {/* Icon Dot */}
                                    <div
                                        className={`
                                            absolute left-0 mt-2 w-12 h-12 rounded-full
                                            flex items-center justify-center shadow-md z-10
                                            transition-all duration-300
                                            ${isLight ? "bg-gray-100" : "bg-gray-800"}
                                        `}
                                    >
                                        <Icon
                                            className={`
                                                text-3xl transition-colors duration-300
                                                ${isLight ? "text-gray-900" : "text-gray-100"}
                                            `}
                                        />
                                    </div>

                                    {/* Card */}
                                    <div className="ml-20 w-full">
                                        <div
                                            className={`
                                                p-6 rounded-2xl shadow-lg transition-all duration-300
                                                ${isLight
                                                    ? "bg-gray-50 hover:shadow-gray-300"
                                                    : "bg-gray-800 hover:shadow-gray-700/60"}
                                            `}
                                        >
                                            <h3
                                                className={`
                                                    text-xl font-semibold mb-2 transition-colors duration-300
                                                    ${isLight ? "text-gray-900" : "text-gray-100"}
                                                `}
                                            >
                                                {q.title}
                                            </h3>

                                            <p
                                                className={`
                                                    mb-1 transition-colors duration-300
                                                    ${isLight ? "text-gray-700" : "text-gray-300"}
                                                `}
                                            >
                                                {q.school}
                                            </p>

                                            <p
                                                className={`
                                                    font-medium transition-colors duration-300
                                                    ${isLight ? "text-gray-500" : "text-gray-400"}
                                                `}
                                            >
                                                {q.year} • {q.score}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualifications;
