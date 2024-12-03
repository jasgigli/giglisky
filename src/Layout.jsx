import React from "react";
import { Outlet } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Auth from "./components/auth/Auth";
import FeedPage from "./components/Feed/Feed";

const Layout = () => {
  return (
    <div className="container mx-auto grid gap-4 min-h-screen p-4 lg:grid-cols-[1fr_2fr_1fr]">
      {/* Left Section (Navbar or Auth) */}
      <div className="lg:block hidden">
        <SignedIn>
          <Navbar />
        </SignedIn>
        <SignedOut>
          <Auth />
        </SignedOut>
      </div>

      {/* Middle Section (Content) */}
      <div className="content bg-white shadow-md p-4 rounded w-full">
        <SignedIn>
          <Outlet /> {/* Render Feed or other signed-in content */}
        </SignedIn>
        <SignedOut>
          <FeedPage /> {/* Display FeedPage for signed-out users */}
        </SignedOut>
      </div>

      {/* Right Section (Search) */}
      <div className="lg:block hidden">
        <Search />
      </div>
    </div>
  );
};

export default Layout;
