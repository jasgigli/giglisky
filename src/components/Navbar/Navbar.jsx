import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import "./logo.css";
import {
  IoNotificationsOutline,
  IoChatbubbleEllipsesOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { FaHashtag, FaUserCircle, FaPlus } from "react-icons/fa";
import { TbList } from "react-icons/tb";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div className="navbar bg-gray-50 h-full text-black p-6 shadow-xl">
      {/* Logo or Profile Section */}
      <div className="mb-8 flex justify-center">
        {/* <img
          src="https://avatars.githubusercontent.com/u/167529475?v=4"
          alt="Profile"
          className="h-16 w-16 rounded-full border-4 border-blue-500 shadow-md"
        /> */}
        <div class="animated-galaxy">🌌</div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col space-y-4">
        <NavItem to="/" icon={<IoHomeOutline />} label="Home" />
        <NavItem to="/search" icon={<GoSearch />} label="Search" />
        <NavItem
          to="/notifications"
          icon={<IoNotificationsOutline />}
          label="Notifications"
        />
        <NavItem
          to="/chat"
          icon={<IoChatbubbleEllipsesOutline />}
          label="Chat"
        />
        <NavItem to="/feeds" icon={<FaHashtag />} label="Feeds" />
        <NavItem to="/lists" icon={<TbList />} label="Lists" />
        <NavItem to="/profile" icon={<FaUserCircle />} label="Profile" />
        <NavItem to="/settings" icon={<IoSettingsOutline />} label="Settings" />
      </nav>

      {/* New Post Button */}
      <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none font-bold my-4 transition-all duration-300 ease-in-out">
        <FaPlus className="mr-2" /> {/* Icon */}
        New Post
      </button>
    </div>
  );
};

/** Reusable Navigation Item Component */
const NavItem = ({ to, icon, label }) => (
  <Link
    to={to}
    className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 p-2 rounded-md hover:bg-gray-200"
  >
    <span className="text-xl">{icon}</span>
    <span className="font-medium">{label}</span>
  </Link>
);

export default Navbar;
