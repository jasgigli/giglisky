import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import "./logo.css";

const Auth = () => {
  return (
    <div className="auth-container p-4">
      {/* <img
        src="https://avatars.githubusercontent.com/u/167529475?v=4"
        alt="Avatar"
        className="h-12 rounded-full"
      /> */}
      <div class="animated-galaxy">🌌</div>

      <h1 className="my-4 text-2xl font-black">
        Join the <br /> conversation
      </h1>
      <div>
        <SignedOut>
          <Link
            to="/sign-up"
            className="bg-blue-500 font-bold rounded-md text-white p-2 text-sm mx-2"
          >
            Sign Up
          </Link>
          <Link
            to="/sign-in"
            className="bg-gray-200 opacity-60 font-bold rounded-md text-black p-2 mx-1 text-sm"
          >
            Sign In
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="my-2">
        <select name="language" id="language" className="border-none">
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
          <option value="Pashto">Pashto</option>
          <option value="Arabic">Arabic</option>
          <option value="Russian">Russian</option>
        </select>
      </div>
    </div>
  );
};

export default Auth;
