import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
      <div className="flex flex-col border-[1px] border-gray-300 w-full px-8">
        <form action="" className="relative my-4">
          <CiSearch className="text-2xl absolute bottom-[10px] mx-2" />
          <input
            type="text"
            placeholder="Search"
            className="py-2 pl-8 w-full"
          />
        </form>
        <h1>Search page</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          assumenda laborum, eaque, blanditiis ab dolor velit sint voluptatibus
          exercitationem quam at voluptatem vero veniam veritatis laudantium
          nihil aperiam soluta nulla?
        </p>
      </div>
    </>
  );
};

export default Search;
