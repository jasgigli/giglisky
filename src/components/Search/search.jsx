import React from "react";
import { CiSearch } from "react-icons/ci";

const search = () => {
  return (
    <div className="border-[1px] border-gray-300 w-full">
      <div className="feed flex flex-col items-start px-8 text-black ">
        <form action="" className="relative my-4">
          <CiSearch className="text-2xl absolute bottom-[10px] mx-2" />
          <input
            type="text"
            placeholder="Search"
            className="py-2 pl-8 w-full"
          />
        </form>
        <hr />
        <ul className="leading-loose my-4">
          <li>Discover</li>
          <li>Following</li>
          <li>Science</li>
          <li>More Feed</li>
          <hr />
          <div className="flex space-x-3 my-4">
            <li>Feedback</li>
            <li>Privacy</li>
            <li>Terms</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default search;
