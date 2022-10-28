import React from "react";

const TopNavList = ({ data, setList }) => {
  const handleClick = (selected) => {
    let arr = [];
    data &&
      data.map((item) => {
        if (item.id === selected.id) {
          arr.push({ ...item, active: true });
        } else {
          arr.push({ ...item, active: false });
        }
      });
    setList(arr);
  };
  return (
    <ul className="flex items-center gap-2 md:gap-10 text-gray-400 font-normal">
      {data &&
        data.map((item, i) => (
          <li
            onClick={() => handleClick(item)}
            className={
              item.active !== true
                ? "hover:text-orange-600 border-b-2 border-transparent hover:border-orange-600 cursor-pointer py-4"
                : "text-orange-600 border-b-2 border-orange-600 cursor-pointer py-4"
            }
            key={item.id}
          >
            {item.name}
          </li>
        ))}
    </ul>
  );
};

TopNavList.defaultProps = {
  data: [
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
  ],
};
export default TopNavList;
