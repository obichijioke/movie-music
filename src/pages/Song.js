import React, { useState, useEffect } from "react";
import WithNavs from "../components/layout/WithNavs";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MusicPlayer from "../components/music/MusicPlayer/MusicPlayer";

const Song = () => {
  const [song, setSong] = useState(null);
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");

  useEffect(() => {
    getSong(id);
  }, []);

  const getSong = async (id) => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/song?id=${id}`);
      console.log(res.data.data);
      setSong(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-4">
      <div className="flex w-full relative h-auto px-10">
        <div className="w-3/5 h-[500px] bg-gray-300"></div>
        <div className="w-2/5 h-[500px] bg-blue-300"></div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default WithNavs(Song);
