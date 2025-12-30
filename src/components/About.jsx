import profileImg from "../assets/profile.jpg";
import { useTheme } from "../context/ThemeContext"; // adjust path if needed

function About() {
    const { theme } = useTheme()
    const isLight = theme === "light";

    return (
        <section
            id="about"
            className={`
                min-h-screen flex items-center justify-center px-4
                transition-colors duration-300
                ${isLight ? "bg-gray-100" : "bg-gray-900"}
            `}
        >
            <div className="flex flex-col items-center justify-center w-full max-w-5xl">

                {/* Section Title */}
                <h2
                    className={`
                        text-4xl font-bold text-center mb-8 md:mb-12
                        transition-colors duration-300
                        ${isLight ? "text-gray-900" : "text-gray-100"}
                    `}
                >
                    About Me
                </h2>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">

                    {/* Profile Image */}
                    <div className="flex justify-center md:justify-start w-full md:w-auto">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className={`
                                w-48 h-48 md:w-72 md:h-72 rounded-2xl object-cover
                                border shadow-xl transition-all duration-300
                                ${isLight
                                    ? "border-gray-200 hover:shadow-gray-500/50"
                                    : "border-gray-700 hover:shadow-gray-800/80"}
                            `}
                        />
                    </div>

                    {/* About Text */}
                    <div className="text-left max-w-md md:max-w-lg">
                        <h3
                            className={`
                                text-2xl font-semibold mb-4 transition-colors duration-300
                                ${isLight ? "text-gray-900" : "text-gray-100"}
                            `}
                        >
                            Hello! I'm{" "}
                            <span
                                className={`
                                    transition-colors duration-300
                                    ${isLight
                                        ? "text-purple-500 hover:text-purple-800"
                                        : "text-cyan-400 hover:text-cyan-300"}
                                `}
                            >
                                V. Balaganesh
                            </span>
                        </h3>

                        <p
                            className={`
                                text-base md:text-lg leading-relaxed mb-4
                                transition-colors duration-300
                                ${isLight ? "text-gray-700" : "text-gray-300"}
                            `}
                        >
                            I’m an aspiring web developer passionate about building modern,
                            responsive, and user-friendly websites. I focus on creating
                            clean interfaces with React, Tailwind CSS, and JavaScript.
                        </p>

                        <p
                            className={`
                                text-base md:text-lg leading-relaxed
                                transition-colors duration-300
                                ${isLight ? "text-gray-700" : "text-gray-300"}
                            `}
                        >
                            I love learning new technologies, improving my skills, and
                            delivering real-world projects that make a difference. My goal
                            is to build professional applications with excellent user
                            experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
