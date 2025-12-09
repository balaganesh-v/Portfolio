import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen bg-white flex items-center justify-center px-6 sm:px-12 py-16"
        >
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Contact Info */}
                <div className="flex flex-col justify-center space-y-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Contact Me
                    </h1>
                    <p className="text-gray-700 text-lg">
                        I'd love to hear from you! Reach out for collaboration, projects, or
                        just a chat.
                    </p>

                    <div className="space-y-6">
                        {/* Phone */}
                        <div className="flex items-center space-x-4 bg-gray-50 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
                            <FaPhone className="text-gray-900 text-2xl" />
                            <div>
                                <h3 className="text-gray-900 font-semibold text-lg">Call Me</h3>
                                <a
                                    href="tel:+919025943236"
                                    className="text-gray-700 hover:underline"
                                >
                                    +91 9025943236
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-4 bg-gray-50 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
                            <FaEnvelope className="text-gray-900 text-2xl" />
                            <div>
                                <h3 className="text-gray-900 font-semibold text-lg">Email</h3>
                                <a
                                    href="mailto:vbalaganesh2007@gmail.com"
                                    className="text-gray-700 hover:underline"
                                >
                                    vbalaganesh2007@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-center space-x-4 bg-gray-50 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
                            <FaMapMarkerAlt className="text-gray-900 text-2xl" />
                            <div>
                                <h3 className="text-gray-900 font-semibold text-lg">
                                    Location
                                </h3>
                                <p className="text-gray-700">
                                    Alangulam, Tenkasi District, Tamil Nadu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Contact Form */}
                <div className="bg-gray-50 p-8 sm:p-10 rounded-2xl shadow-md border border-gray-200">
                    <h2 className="text-gray-900 font-semibold text-lg sm:text-2xl mb-6 text-center">
                        Interested in working together? Send me a message!
                    </h2>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="p-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:outline-none text-gray-900"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:outline-none text-gray-900"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className="p-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:outline-none text-gray-900"
                        />

                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="p-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-400 focus:outline-none text-gray-900"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gray-900 hover:bg-black text-white rounded-xl text-lg font-semibold shadow-md transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
