import React, { useReducer } from "react";
import MusicPlayerContext from "./musicPlayerContext";
import musicPlayerReducer from "./musicPlayerReducer";

import {
  SET_SIDEBAR,
  SHOW_SIDEBAR,
  CLEAR_SIDEBAR_DETAILS,
  SET_SIDEBAR_TYPE,
} from "../types";

const MusicPlayerState = (props) => {
  const initialState = {
    isPlaying: false,
    songDetails: null,
    playlist: null,
    miniPlayer: false,
  };

  const [state, dispatch] = useReducer(musicPlayerReducer, initialState);

  //set sidebar details
  const setSideBarDetails = (details) => {
    dispatch({
      type: SET_SIDEBAR,
      payload: details,
    });
  };

  //set sidebar type
  const setSideBarType = (type) => {
    clearSideBarDetails();
    dispatch({
      type: SET_SIDEBAR_TYPE,
      payload: type,
    });
  };

  //clear sidebar details
  const clearSideBarDetails = () => {
    dispatch({
      type: CLEAR_SIDEBAR_DETAILS,
    });
  };

  //show sidebar
  const setShowSideBar = () => {
    dispatch({
      type: SHOW_SIDEBAR,
    });
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        isPlaying: state.isPlaying,
        songDetails: state.songDetails,
        playlist: state.playlist,
        miniPlayer: state.miniPlayer,

        setShowSideBar,
        clearSideBarDetails,
        setSideBarDetails,
        setSideBarType,
      }}
    >
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export default MusicPlayerState;
