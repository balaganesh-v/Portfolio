import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { sendEmail } from "../services/emailService";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
    const { theme } = useTheme();

    const [user_name, setName] = useState("");
    const [user_email, setEmail] = useState("");
    const [user_subject, setSubject] = useState("");
    const [user_message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: user_name,
            email: user_email,
            subject: user_subject,
            message: user_message,
        };

        sendEmail(templateParams)
            .then(() => {
                alert("Message sent successfully!");
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            })
            .catch(() => {
                alert("Message not sent. Please try again.");
            });
    };

    return (
        <section
            id="contact"
            className={`min-h-screen flex items-center justify-center px-6 py-16
                ${theme === "light" ? "bg-gray-100" : "bg-gray-900"}
            `}
        >
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left Section */}
                <div className="flex flex-col justify-center space-y-8">
                    <h1
                        className={`text-3xl md:text-4xl font-bold
                            ${theme === "light" ? "text-gray-800" : "text-gray-200"}
                        `}
                    >
                        Get in Touch
                    </h1>

                    <p
                        className={`text-md md:text-lg
                            ${theme === "light" ? "text-gray-600" : "text-gray-400"}
                        `}
                    >
                        You can call me, message me, or send an email anytime.
                    </p>

                    <div className={` space-y-5 ${theme === "light" ? "text-gray-700" : "text-white"} `} >

                        {/* Call */}
                        <a
                            href="tel:+919025943236"
                            className={`flex items-center space-x-4 p-4 rounded-2xl shadow-md
                                ${theme === "light" ? "bg-white " : "bg-gray-800 "}
                            `}
                        >
                            <FaPhone className="text-lg text-blue-500" />
                            <div>
                                <h3 className="text-sm font-semibold">Phone</h3>
                                <p className="text-sm opacity-80">
                                    +91 9025943236
                                </p>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/919025943236"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center space-x-4 p-4 rounded-2xl shadow-md
                                ${theme === "light" ? "bg-white" : "bg-gray-800"}
                            `}
                        >
                            <FaWhatsapp className="text-lg text-green-500" />
                            <div>
                                <h3 className="text-sm font-semibold">WhatsApp</h3>
                                <p className="text-sm opacity-80">
                                    Chat with me on WhatsApp
                                </p>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:vbalaganesh2007@gmail.com"
                            className={`flex items-center space-x-4 p-4 rounded-2xl shadow-md
                                ${theme === "light" ? "bg-white" : "bg-gray-800"}
                            `}
                        >
                            <FaEnvelope className="text-lg text-red-500" />
                            <div>
                                <h3 className="text-sm font-semibold">Email</h3>
                                <p className="text-sm opacity-80">
                                    vbalaganesh2007@gmail.com
                                </p>
                            </div>
                        </a>

                        {/* Location */}
                        <div
                            className={`flex items-center space-x-4 p-4 rounded-2xl shadow-md
                                ${theme === "light" ? "bg-white" : "bg-gray-800"}
                            `}
                        >
                            <FaMapMarkerAlt className="text-lg text-purple-500" />
                            <div>
                                <h3 className="text-sm font-semibold">Location</h3>
                                <p className="text-sm opacity-80">
                                    Alangulam, Tenkasi, Tamil Nadu
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Contact Form */}
                <div
                    className={`p-8 rounded-2xl shadow-md border
                        ${theme === "light"
                            ? "bg-white border-gray-200"
                            : "bg-gray-800 border-gray-700"}
                    `}
                >
                    <h2
                        className={`text-lg font-semibold mb-6 text-center
                            ${theme === "light" ? "text-gray-800" : "text-gray-100"}
                        `}
                    >
                        Send me a message
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={user_name}
                                onChange={(e) => setName(e.target.value)}
                                className={`
                                    p-3 w-full text-sm rounded-xl border outline-none
                                    transition-colors duration-300
                                    ${ theme === "light"
                                        ? "bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500"
                                        : "bg-gray-700 text-gray-100 border-gray-600 focus:border-blue-400"}
                                    `}
                                required
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                value={user_email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`
                                    p-3 w-full text-sm rounded-xl border outline-none
                                    transition-colors duration-300
                                    ${ theme === "light"
                                        ? "bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500"
                                        : "bg-gray-700 text-gray-100 border-gray-600 focus:border-blue-400"}
                                    `}
                                required
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            value={user_subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className={`
                                p-3 w-full text-sm rounded-xl border outline-none
                                transition-colors duration-300
                                ${ theme === "light"
                                    ? "bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500"
                                    : "bg-gray-700 text-gray-100 border-gray-600 focus:border-blue-400"}
                                `}
                            required
                        />

                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            value={user_message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`
                                p-3 w-full text-sm rounded-xl border outline-none resize-none
                                transition-colors duration-300
                                ${ theme === "light"
                                    ? "bg-gray-50 text-gray-800 border-gray-300 focus:border-blue-500"
                                    : "bg-gray-700 text-white border-gray-600 focus:border-blue-400"}
                                `}
                            required
                        />

                        <button
                            type="submit"
                            className={`
                                w-full py-3 rounded-xl text-sm font-semibold
                                transition-all duration-300
                                ${ theme === "light"
                                    ? "bg-blue-500 text-white hover:bg-blue-600"
                                    : "bg-cyan-500 text-white hover:bg-cyan-600"}
                                `}
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}
