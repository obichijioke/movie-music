import React from "react";
import WithNavs from "../components/layout/WithNavs";
import MusicSliderCarousel from "../components/music/MusicSliderCarousel";
import MusicListItem from "../components/music/MusicListItem";
import Carousel3D from "../components/3dcarousel/Carousel3D";

const Music = () => {
  return (
    <div>
      <p>Music</p>
      <div className="flex w-full">
        <div className="w-1/2">
          <Carousel3D />
          {/* <MusicSliderCarousel /> */}
        </div>
        <div className="w-1/2">
          <MusicListItem />
        </div>
      </div>
    </div>
  );
};

export default WithNavs(Music);
