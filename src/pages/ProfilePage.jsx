import React from "react";
import { IoSettingsOutline } from "react-icons/io5";

const ProfilePage = () => {
  return (
    <>
      <div className="flex flex-col border-[1px] border-gray-300 w-full ">
        <div className="upper w-fill h-36 bg-gray-200 relative"></div>
        <div className="lower  bg-transparent absolute top-28 p-4">
          <div className="mb-2 flex justify-start">
            <img
              src="https://avatars.githubusercontent.com/u/167529475?v=4"
              alt="Profile"
              className="h-16 w-16 rounded-full border-4 border-blue-500 shadow-md"
            />
          </div>
          <h1 className="text-3xl">jasgigli.bsky.social</h1>
          <p className="opacity-50">@jasgigli.bsky.social</p>
          <div className="flex space-x-1 leading-loose mb-8">
            <span className="text-black">210K</span>
            <span className="opacity-50"> followers</span>
            <span className="text-black">120K</span>
            <span className="opacity-50"> following</span>
            <span className="text-black">70K</span>
            <span className="opacity-50"> posts</span>
          </div>
        </div>
        <div className="posts mt-40 p-4">
          <div className=" flex space-x-4 ">
            <h1>Posts</h1>
            <h1>Replies</h1>
            <h1>Media</h1>
            <h1>Likes</h1>
            <h1>Feeds</h1>
          </div>
        </div>
        <div className="bg-gray-300 h-[1px] w-full"></div>
      </div>
    </>
  );
};

export default ProfilePage;
