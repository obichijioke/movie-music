import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MusicCard = ({ data }) => {
  const [type, setType] = useState("song");
  useEffect(() => {
    if (data.hasOwnProperty("videoId")) {
      setType(`song?id=${data.videoId}`);
    } else if (data.hasOwnProperty("playlistId")) {
      if (data.playlistId != null) {
        setType(`playlist?id=${data.playlistId}`);
      }
    } else if (data.hasOwnProperty("browseId")) {
      if (data.hasOwnProperty("subscribers")) {
        setType(`artist?id=${data.browseId}`);
      } else {
        setType(`album?id=${data.browseId}`);
      }
    }
  }, [data]);
  return (
    <div className="mx-2">
      <Link to={`/music/${type}`}>
        <img
          className="h-[400px] w-full rounded-lg"
          src={data.thumbnails[1].url}
          alt=""
        />
      </Link>
      <div>
        <p className="text-gray-300 text-lg font-medium mt-4">{data.title}</p>
        {data.artists && (
          <p className="text-gray-500 text-sm">{data.artists[0].name}</p>
        )}
        {data.description && (
          <p className="text-gray-500 text-sm">{data.description}</p>
        )}
        {data.year && <p className="text-gray-500 text-sm">{data.year}</p>}
      </div>
    </div>
  );
};

export default MusicCard;
