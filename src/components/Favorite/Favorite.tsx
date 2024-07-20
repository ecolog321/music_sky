'use client'
import styles from './favorite.module.css'
import { Nav } from "@components/Nav/Nav";
import { CenterBlock } from "@components/Main/CenterBlock/CenterBlock";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { Player } from "@components/Player/Player";
import { useAppSelector } from '../../hooks/store';

export const Favorite = () => {

    const favTracks=useAppSelector((store)=>store.playlist.currentPlaylist)

  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav />
        <CenterBlock tracks={favTracks} />
        <Sidebar />
        <Player />
      </main>
    </div>
  </div>
  );
};