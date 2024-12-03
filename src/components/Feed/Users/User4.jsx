import React from "react";

const User4 = () => {
  return (
    <div className="user-post border-b border-gray-300 p-6">
      {/* User Info Section */}
      <div className="user flex items-center space-x-3 mb-4">
        <img
          src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
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
        <h1 className="font-bold text-lg mb-2">
          Svelte is a JavaScript framework for building web applications
        </h1>
        <h3 className="font-semibold mb-2">How it works</h3>
        <p className="mb-4 leading-relaxed">
          Svelte compiles code into optimized JavaScript, which results in
          faster, more efficient applications. Svelte moves work that would
          normally be done by the browser to a compile step during app building.
        </p>

        <div className="post-image flex justify-center mb-4">
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1619358925225/50e2XssdE.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
            alt="Svelte Framework"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default User4;