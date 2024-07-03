'use client'

import { useState } from "react";
import { Nav } from "../Nav/Nav";
import { Player } from "../Player/Player";
import { Sidebar } from "../Sidebar/Sidebar";
import { CenterBlock } from "./CenterBlock/CenterBlock";
import styles from "./main.module.css";
import { TrackType } from "../../types/types";

export const Main =() => {

  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [currentTrack, setCurrentTrack]=useState<TrackType>(tracks[1]);

  const getTrackData =(value:TrackType)=>{
    setCurrentTrack(value)
  }
 

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav/>
          <CenterBlock tracks={tracks} setTracks={setTracks} getTrackData={getTrackData}/>
          <Sidebar/>
          <Player currentTrack={currentTrack}/>
        </main>
      </div>
    </div>
  );
};
