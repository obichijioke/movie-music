import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";

const MusicListItem = ({ data }) => {
	return (
		<div className="flex items-center justify-between py-2 px-3 w-full h-[50px] bg-[#232429] rounded-lg hover:bg-[#2b2e35] cursor-pointer my-2">
			<div className="flex items-center gap-4">
				<img
					src={data.thumbnails[0].url}
					alt=""
					className="w-9 h-9 rounded-md"
				/>
				<p className="text-[#9d9d9e] font-medium">1</p>
				<p className="text-[#cfcfd1] font-medium">{data.title}</p>
			</div>
			<div className="flex items-center gap-6">
				{/* <p className="text-[#696971] font-medium">4:11</p>
				<p className="text-[#696971] font-medium">12,000</p> */}
				<EllipsisHorizontalIcon className="h-6 w-6 text-[#5f6064]" />
				<div className="p-2 bg-[#222328] shadow-md rounded-md flex justify-center items-center">
					<HeartIcon className="h-4 w-4 text-[#5f6064]" />
				</div>
			</div>
		</div>
	);
};

export default MusicListItem;
