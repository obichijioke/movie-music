import React from "react";
import TopNav from "../nav/TopNav";
import SideNav from "../nav/SideNav";

const WithNavs = (Component) => {
  return (props) => {
    return (
      <div className="h-screen w-full bg-[#191a1e] hideScroll">
        <TopNav />
        <SideNav />
        <div className="pt-[60px] pl-[60px]">
          <Component {...props} />
        </div>
      </div>
    );
  };
};

export default WithNavs;
