import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Logo from '../assets/logo.png';
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => alert("Logged out successfully!"))
            .catch((error) => console.error("Logout Error:", error));
    };

    const navLinkClass = ({ isActive }) =>
        `cursor-pointer px-2 py-1 font-medium text-gray-800 hover:text-green-600 transition ${
            isActive ? "border-b-2 border-green-600" : ""
        }`;

    return (
        <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
            
            {/* Left - Logo */}
            <div className="flex items-center gap-2">
                <img src={Logo} alt="EcoTrack Logo" className="w-10 h-10" />
                <span className="text-green-700 font-bold text-xl tracking-wide">EcoTrack</span>
            </div>

            {/* Center - Navigation Links */}
            <ul className="flex gap-8">
                <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
                <li><NavLink to="/AllChallenges" className={navLinkClass}>Challenges</NavLink></li>
                <li><NavLink to="/UserChallenges" className={navLinkClass}>User Challenges</NavLink></li>
                <li><NavLink to="/events" className={navLinkClass}>Events</NavLink></li>
            </ul>

            {/* Right - User Info */}
            <div className="flex items-center gap-4">
                {user ? (
                    <>
                        <Link to="/profile">
                            <img
                                src={user.profileImage || "https://via.placeholder.com/40"}
                                alt={user.name}
                                className="w-10 h-10 rounded-full border-2 border-green-600 cursor-pointer"
                            />
                        </Link>

                        <button
                            onClick={handleLogOut}
                            className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-1 rounded-lg transition"
                        >
                            Log Out
                        </button>
                    </>
                ) : (
                    <NavLink
                        to="/login"
                        className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-1 rounded-lg transition"
                    >
                        Login
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
