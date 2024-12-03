import React from "react";

const User2 = () => {
  return (
    <div className="user-post border-b border-gray-300 p-6">
      {/* User Info Section */}
      <div className="user flex items-center space-x-3 mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzBE_P3rPclK8gJnC-y1Mq7kNOvyL8yUHlg&s"
          alt="User profile"
          className="h-10 w-10 rounded-full border border-gray-200"
        />
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-gray-800">JasGigli</span>
          <span className="text-gray-500">@jasgigli</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-500">6h</span>
        </div>
      </div>

      {/* Post Content */}
      <div className="post-content text-gray-800">
        <h1 className="font-bold text-xl mb-2">What is React.js?</h1>
        <p className="mb-4 leading-relaxed text-gray-600">
          React.js is a powerful JavaScript library for building user
          interfaces. It's widely used for creating fast and dynamic single-page
          applications (SPAs). React's component-based architecture allows for
          efficient updates and rendering of UI components.
        </p>

        <div className="post-image flex justify-center mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s"
            alt="React.js Logo"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default User2;
