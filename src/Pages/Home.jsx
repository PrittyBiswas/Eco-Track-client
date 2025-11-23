import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import Challenges from "./Challenges";

// ICON IMPORTS
import { IoLocationSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
    const [challenges, setChallenges] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://eco-web-server.vercel.app/Challenges")
            .then((res) => res.json())
            .then((data) => setChallenges(data))
            .catch((error) => console.log("Error loading challenges:", error));
    }, []);

    // Show only 6 items
    const limitedChallenges = challenges.slice(0, 6);

    return (
        <div>
            {/* Header */}
            <Header />

            {/* Challenges Section */}
            <h1 className="text-3xl font-bold mt-10 text-center">Challenges</h1>

            {/* Show 6 challenges */}
            <Challenges challenges={limitedChallenges} />

            {/* SEE MORE BUTTON */}
            {challenges.length > 6 && (
                <div className="text-center my-6">
                    <button
                        onClick={() => navigate("/AllChallenges")}
                        className="btn bg-green-600 text-white px-8 py-2 rounded-full hover:bg-green-700"
                    >
                        See More
                    </button>
                </div>
            )}

            {/* Get In Touch Section */}
            <div className="px-6 md:px-20 py-16 bg-gray-50">
                <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    Ready to join our environmental mission? Have questions about our programs?
                    We’d love to hear from you and welcome you to our community.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Contact Information</h3>

                            <div className="flex items-start gap-3">
                                <IoLocationSharp className="text-green-700 text-2xl" />
                                <p>Warangle , India</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <FiPhoneCall className="text-green-700 text-xl" />
                                <p>+91 842020***</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <MdEmail className="text-green-700 text-xl" />
                                <p>prittybiswas@gmail.com</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                            <div className="flex items-center gap-4">
                                <a
                                    className="p-3 border border-green-600 rounded-lg text-green-700 hover:bg-green-100 transition"
                                    href="https://www.facebook.com/prittybiswas090"
                                >
                                    <FaFacebookF size={20} />
                                </a>

                                <a
                                    className="p-3 border border-green-600 rounded-lg text-green-700 hover:bg-green-100 transition"
                                    href="https://www.instagram.com/prittybiswas090/"
                                >
                                    <FaInstagram size={20} />
                                </a>

                                <a className="p-3 border border-green-600 rounded-lg text-green-700 hover:bg-green-100 transition">
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold mb-2">Volunteer Opportunities</h3>
                            <p className="text-gray-700 mb-4">
                                Join our weekly environmental activities every Friday. No experience necessary!
                            </p>
                            <button className="btn bg-green-600 hover:bg-green-700 text-white px-6 rounded-full">
                                Become a Volunteer
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    className="input input-bordered w-full"
                                />
                                <input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="What is this about?"
                                className="input input-bordered w-full"
                            />

                            <textarea
                                className="textarea textarea-bordered w-full h-32"
                                placeholder="Tell us how we can help you or how you'd like to get involved..."
                            ></textarea>

                            <button className="btn w-full bg-green-600 hover:bg-green-700 text-white rounded-full">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
