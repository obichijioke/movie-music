import React, { useState, useEffect } from "react";
import MusicSection from "./MusicSection";
import axios from "axios";

const MusicExplore = () => {
  const [explore, setExplore] = useState(null);
  useEffect(() => {
    get_explore();
  }, []);

  const get_explore = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/");
      setExplore(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      {explore != null &&
        explore.map((item, i) => <MusicSection key={i} data={item} />)}
    </div>
  );
};

export default MusicExplore;
