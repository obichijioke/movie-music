import React from "react";

const MusicCard = ({ data }) => {
  return (
    <div className="w-[16%]">
      <img className="w-full" src={data.thumbnails[0].url} alt="" />
      <div>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default MusicCard;
