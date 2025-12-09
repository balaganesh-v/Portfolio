import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with public key from environment
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Contact() {
    const [user_name, setName] = useState("");
    const [user_email, setEmail] = useState("");
    const [user_subject, setSubject] = useState("");
    const [user_message, setMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

        // Log to verify env variables are loaded
        console.log("Service ID:", serviceID);
        console.log("Template ID:", templateID);
        console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

        const templateParams = {
            name: user_name,        // template variable: {{name}}
            email: user_email,      // template variable: {{email}}
            subject: user_subject,  // template variable: {{subject}}
            message: user_message,  // template variable: {{message}}
        };

        emailjs
            .send(serviceID, templateID, templateParams)
            .then(() => {
                alert("Email sent successfully!");
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
            })
            .catch((err) => {
                console.error("EmailJS Error:", err);
                alert("Failed to send email. Please try again.");
            });
    };

    return (
        <section
            id="contact"
            className="min-h-screen bg-white flex items-center justify-center px-6 sm:px-12 py-16"
        >
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left Section */}
                <div className="flex flex-col justify-center space-y-10">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-700">
                        Contact Me
                    </h1>

                    <p className="text-gray-700 text-lg">
                        I'd love to hear from you! Reach out for collaboration, projects, or just a chat.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 bg-gray-50 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
                            <FaPhone className="text-gray-900 text-2xl" />
                            <div>
                                <h3 className="text-gray-900 font-semibold text-lg">Call Me</h3>
                                <a href="tel:+919025943236" className="text-gray-700 hover:underline">
                                    +91 9025943236
                                </a>
                            </div>
                        </div>

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

                        <div className="flex items-center space-x-4 bg-gray-50 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
                            <FaMapMarkerAlt className="text-gray-900 text-2xl" />
                            <div>
                                <h3 className="text-gray-900 font-semibold text-lg">Location</h3>
                                <p className="text-gray-700">Alangulam, Tenkasi District, Tamil Nadu</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 p-8 sm:p-10 rounded-2xl shadow-md border border-gray-200">
                    <h2 className="text-gray-900 font-semibold text-lg sm:text-2xl mb-6 text-center">
                        Interested in working together? Send me a message!
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={user_name}
                                onChange={(e) => setName(e.target.value)}
                                className="p-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                value={user_email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
                                required
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            value={user_subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="p-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
                            required
                        />

                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            value={user_message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="p-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
