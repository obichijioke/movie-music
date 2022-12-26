import React from "react";
import MusicCard from "./MusicCard";

const MusicSection = ({ data }) => {
  return (
    <div className="px-10 my-10 w-full">
      {data && (
        <p className="text-gray-200 text-2xl font-semibold mb-5">
          {data.title}
        </p>
      )}
      {data && (
        <div className="flex w-full gap-2 flex-wrap">
          {data.contents.map((item, i) => (
            <MusicCard key={i} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MusicSection;
