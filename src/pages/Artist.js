import React, { useEffect, useState } from "react";
import WithNavs from "../components/layout/WithNavs";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MusicSection from "../components/music/MusicSection";
import MusicListItem from "../components/music/MusicListItem";

const Artist = () => {
	const [artist, setArtist] = useState(null);
	const search = useLocation().search;
	const id = new URLSearchParams(search).get("id");
	useEffect(() => {
		get_artist(id);
	}, []);

	const get_artist = async (id) => {
		try {
			const res = await axios.get(`http://127.0.0.1:8000/artist?id=${id}`);
			setArtist(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="w-full">
			{artist != null && (
				<div className="w-full relative">
					<img
						className="w-full max-h-[700px] object-cover "
						src={artist.thumbnails[2].url}
						alt=""
					/>
					<div
						className="w-full h-full bg-black absolute top-0"
						style={{
							background:
								"linear-gradient(0deg, rgba(25,26,30,1) 11%, rgba(255,255,255,0) 100%)",
						}}
					></div>
					<div className="absolute bottom-7 left-7 p-10 lg:w-1/3">
						<p className="text-gray-200 drop-shadow-lg text-3xl font-bold">
							{artist.name}
						</p>
						<p className="text-gray-400 drop-shadow-lg my-5">
							{artist.description}
						</p>
						<p className="text-gray-300 drop-shadow-lg my-5">
							{`Subscribers ${artist.subscribers}`}
						</p>
					</div>
				</div>
			)}
			{artist != null && (
				<div>
					<div className="flex w-full px-10">
						<div className="w-1/2 my-10 px-5">
							<p className="text-gray-200 text-2xl font-semibold mb-5">
								{"Popular"}
							</p>
							{artist.songs.results.map((item, i) => (
								<MusicListItem key={i} data={item} />
							))}
							<MusicSection
								display={4}
								data={{ contents: artist.albums.results, title: "Albums" }}
							/>
						</div>
						<div className="w-1/2 px-5">
							<MusicSection
								display={4}
								data={{ contents: artist.singles.results, title: "Singles" }}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default WithNavs(Artist);
