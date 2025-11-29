import profileImg from "../assets/profile.jpg";

function About() {
    return (
        <section
            id="about"
            className="py-20 px-6 bg-white"
        >
            <div className="max-w-5xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center text-blue-700 mb-12 tracking-wide">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-10">

                    {/* Image */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="w-64 h-64 rounded-xl shadow-lg object-cover border border-gray-200"
                        />
                    </div>

                    {/* Short Content */}
                    <div className="text-left">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Hi, I'm <span className="text-blue-600">V. Balaganesh</span>
                        </h3>

                        <p className="text-gray-700 text-lg leading-relaxed mb-3">
                            Aspiring web developer focused on building modern and user-friendly websites.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            I enjoy creating clean, responsive interfaces and continuously learning
                            new technologies to improve my skills.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;
