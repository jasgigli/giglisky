import React from "react";
import Discover from "./Tabs/Discover";
import Following from "./Tabs/Following";
import User1 from "./users/User1";
import User2 from "./users/User2";
import User3 from "./users/User3";
import User4 from "./users/User4";
import User5 from "./users/User5";

const Feed = () => {
  return (
    <div className="feed  border-[1px] border-gray-300 w-full">
      <div className="tabs flex space-x-4 p-4">
        <Discover />
        <Following />
      </div>
      <div className="bg-gray-300 h-[1px] w-full"></div>
      <div>
        <User1 />
        <User2 />
        <User3 />
        <User4 />
        <User5 />
      </div>
    </div>
  );
};

export default Feed;
