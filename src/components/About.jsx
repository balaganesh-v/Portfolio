import profileImg from "../assets/profile.jpg";

function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="flex flex-col items-center justify-center w-full max-w-5xl">
                
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
                    About Me
                </h2>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">

                    {/* Profile Image */}
                    <div className="flex justify-center md:justify-start w-full md:w-auto">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="w-48 h-48 md:w-72 md:h-72 rounded-2xl shadow-xl object-cover border border-gray-200
                            hover:shadow-xl hover:shadow-gray-500/50 transition transform duration-300"
                        />
                    </div>

                    {/* About Text */}
                    <div className="text-left max-w-md md:max-w-lg">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Hello! I'm <span className="text-gray-400">V. Balaganesh</span>
                        </h3>

                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                            I’m an aspiring web developer passionate about building modern, responsive, and user-friendly websites. I focus on creating clean interfaces with React, Tailwind CSS, and JavaScript.
                        </p>

                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            I love learning new technologies, improving my skills, and delivering real-world projects that make a difference. My goal is to build professional applications with excellent user experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
