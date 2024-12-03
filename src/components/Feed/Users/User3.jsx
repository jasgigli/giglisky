import React from "react";

const User3 = () => {
  return (
    <div className="user-post border-b border-gray-300 p-6">
      {/* User Info Section */}
      <div className="user flex items-center space-x-3 mb-4">
        <img
          src="https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp"
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
        <h1 className="font-bold text-xl mb-2">
          The Future of Web Development
        </h1>
        <p className="mb-4 leading-relaxed text-gray-600">
          Web development is evolving rapidly, with frameworks like React, Vue,
          and Angular paving the way for more dynamic and interactive
          applications. The future of web development lies in building faster,
          more efficient applications with greater accessibility and
          performance.
        </p>

        <div className="post-image flex justify-center mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQE6kleRVHtrvB4V4W12YvpqPWi_kDmOMbg&s"
            alt="Web Development Future"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default User3;
