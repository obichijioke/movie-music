import React, { useState } from "react";
import ProfileMenu from "../profile/ProfileMenu";
import TopNavList from "./TopNavList";

const TopNav = () => {
  const [list, setList] = useState([
    {
      name: "Overview",
      link: "/overview",
      id: 1,
      active: false,
    },
    {
      name: "Charts",
      link: "/charts",
      id: 2,
      active: false,
    },
    {
      name: "Genres & Moods",
      link: "/genres",
      id: 3,
      active: false,
    },
    {
      name: "Albums",
      link: "/albums",
      id: 4,
      active: false,
    },
    {
      name: "New Releases",
      link: "/new-releases",
      id: 5,
      active: true,
    },
    {
      name: "Concerts",
      link: "/concerts",
      id: 6,
      active: false,
    },
    {
      name: "Discover",
      link: "/discover",
      id: 7,
      active: false,
    },
  ]);
  return (
    <div className="z-10 h-[60px] w-full bg-neutral-800 shadow-lg flex items-center justify-between fixed top-0 left-0 right-0 pr-6 pl-[70px] md:pl-[140px] ">
      <TopNavList data={list} setList={setList} />
      <div>
        <ProfileMenu />
      </div>
    </div>
  );
};

export default TopNav;
