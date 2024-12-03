import React from "react";
import { IoSettingsOutline } from "react-icons/io5";

const NotificationsPage = () => {
  return (
    <>
      <div className="flex flex-col border-[1px] border-gray-300 w-full ">
        <div className="tabs flex space-x-4 p-4 justify-between">
          <h1>Notification</h1>
          <IoSettingsOutline className="text-2xl" />
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

export default NotificationsPage;
