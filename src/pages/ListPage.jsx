import React from "react";
import { FaPlus } from "react-icons/fa";

const ListPage = () => {
  return (
    <>
      <div className="flex flex-col border-[1px] border-gray-300 w-full ">
        <div className="flex  justify-between p-4">
          <div>
            <h1 className="text-2xl">User Lists</h1>
            <p>Public, shareable lists which can drive feeds.</p>
          </div>
          <button className="flex items-center bg-gray-200 text-black hover:bg-gray-100 focus:outline-none  transition-all duration-300 ease-in-out h-8 py-1 px-2 rounded-full">
            <FaPlus className="mr-2" /> {/* Icon */}
            New
          </button>
        </div>
        <div className="bg-gray-300 h-[1px] w-full"></div>
        <p className="p-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          assumenda laborum, eaque, blanditiis ab dolor velit sint voluptatibus
          exercitationem quam at voluptatem vero veniam veritatis laudantium
          nihil aperiam soluta nulla?
        </p>
      </div>
    </>
  );
};

export default ListPage;
