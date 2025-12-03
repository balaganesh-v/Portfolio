import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; "react";

export default function Contact() {
    return (
        <div id="contact" className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Info Section */}
                <div className="space-y-10 pl-6">
                    <h1 className="text-5xl font-bold text-gray-700 drop-shadow-md">Contact Me</h1>
                    <p className="text-lg text-gray-700">Get in touch</p>

                    <div className="space-y-8">
                        <div className="flex items-start space-x-4 bg-white-200 p-4 rounded-xl shadow-lg hover:shadow-xl hover:from-green-300 hover:to-teal-300 transition">
                            <span className="text-blue-600 text-3xl"><FaPhone className="text-blue-600 text-3xl" /></span>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Call Me</h3>
                                <p className="text-gray-700">+91 9025943236</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 bg-orange-200 p-4 rounded-xl shadow-lg hover:shadow-xl hover:from-yellow-300 hover:to-orange-300 transition">
                            <span className="text-blue-600 text-3xl"><FaEnvelope className="text-red-500 text-3xl" /></span>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">E-mail</h3>
                                <p className="text-gray-700">vbalaganesh2007@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 bg-gray-200 p-4 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-300 hover:to-indigo-300 transition">
                            <span className="text-blue-600 text-3xl"><FaMapMarkerAlt className="text-indigo-600 text-3xl" /></span>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">Address</h3>
                                <p className="text-gray-700">Alangulam , Tenkasi District , Tamil Nadu</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Contact Form */}
                <div className="bg-white shadow-xl rounded-2xl p-10 border border-gray-200 bg-gradient-to-br from-white to-purple-50">
                    <h2 className="text-xl font-semibold text-center text-purple-700 mb-6">
                        Interested to work together? – Let's talk
                    </h2>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="p-3 w-full border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none bg-purple-50"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-3 w-full border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none bg-purple-50"
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className="p-3 w-full border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none bg-purple-50"
                        />

                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="p-3 w-full border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none bg-purple-50"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-lg font-semibold shadow-md hover:from-purple-700 hover:to-pink-700 transition flex justify-center items-center space-x-2"
                        >
                            <span>Send Message</span>
                            <span>➤</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
