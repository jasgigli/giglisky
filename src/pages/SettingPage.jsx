import React from "react";
import { SignOutButton } from "@clerk/clerk-react"; // Import SignOutButton
import {
  FaUser,
  FaShieldAlt,
  FaGavel,
  FaImage,
  FaPalette,
  FaUniversalAccess,
  FaLanguage,
  FaInfoCircle,
  FaQuestionCircle,
} from "react-icons/fa"; // Import icons for the menu items

const SettingPage = () => {
  return (
    <>
      <div className="tabs text-center text-2xl  space-x-4 p-4 n">
        <h1>Settings</h1>
      </div>
      <div className="bg-gray-300 h-[1px] w-full"></div>
      {/* Profile Section */}
      <div className="flex flex-col items-center py-6 px-4 border-b">
        <img
          src="https://avatars.githubusercontent.com/u/167529475?v=4"
          alt="Profile"
          className="h-20 w-20 rounded-full border-4 border-blue-500"
        />
        <h1 className="text-xl font-bold mt-4">JasGigli</h1>
        <p className="text-sm text-gray-500">@jasgigli.bsky.social</p>
      </div>

      {/* Menu Section */}
      <div className="divide-y divide-gray-200">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <span className="text-gray-500 text-lg">{item.icon}</span>
              <p className="text-sm font-medium">{item.label}</p>
            </div>
            <span className="text-gray-400">›</span>
          </div>
        ))}
      </div>

      {/* Sign Out Button */}
      <div className="border-t py-4 px-4">
        <SignOutButton>
          <button className="w-full bg-red-500 text-white py-2 rounded-md font-bold hover:bg-red-600">
            Sign Out
          </button>
        </SignOutButton>
      </div>
    </>
  );
};

// Menu items for settings
const menuItems = [
  { label: "Account", icon: <FaUser /> },
  { label: "Privacy and Security", icon: <FaShieldAlt /> },
  { label: "Moderation", icon: <FaGavel /> },
  { label: "Content and Media", icon: <FaImage /> },
  { label: "Appearance", icon: <FaPalette /> },
  { label: "Accessibility", icon: <FaUniversalAccess /> },
  { label: "Languages", icon: <FaLanguage /> },
  { label: "Help", icon: <FaQuestionCircle /> },
  { label: "About", icon: <FaInfoCircle /> },
];

export default SettingPage;
