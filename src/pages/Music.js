import React from "react";
import WithNavs from "../components/layout/WithNavs";
import MusicSliderCarousel from "../components/music/MusicSliderCarousel";
import MusicListItem from "../components/music/MusicListItem";
import Carousel3D from "../components/3dcarousel/Carousel3D";
import MusicExplore from "../components/music/MusicExplore";

const Music = () => {
	return (
		<div className="p-4">
			<div className="flex w-full relative h-auto">
				<div className="w-1/2 ">
					<Carousel3D />
					{/* <MusicSliderCarousel /> */}
				</div>
				<div className="w-1/2"></div>
			</div>
			<MusicExplore />
		</div>
	);
};

export default WithNavs(Music);
