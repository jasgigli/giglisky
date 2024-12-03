import React from "react";
import { FaPlus } from "react-icons/fa";

const ChatPage = () => {
  return (
    <>
      <div className="flex flex-col border-[1px] border-gray-300 w-full ">
        <div className="flex  justify-between p-4">
          <h1>Messages</h1>
          <button className="flex items-center bg-blue-500 text-white  rounded-lg hover:bg-blue-600 focus:outline-none font-bold transition-all duration-300 ease-in-out px-4 py-1">
            <FaPlus className="mr-2" /> {/* Icon */}
            New Chat
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

export default ChatPage;
