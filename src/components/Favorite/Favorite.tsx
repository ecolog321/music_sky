
import styles from './favorite.module.css'
import { Nav } from "@components/Nav/Nav";
import { CenterBlock } from "@components/Main/CenterBlock/CenterBlock";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { Player } from "@components/Player/Player";
import { TrackType } from '../../types/types';
import { getFavTracks } from '@api/trackApi';

export const Favorite = async () => {

    let tracks: TrackType[] = [];
    let error: string | null = null;
  
    try {
      tracks = await getFavTracks() ;
    } catch (err) {
      error =
        err instanceof Error
          ? "Ошибка загрузки треков. " + err.message
          : "Неизвестная ошибка";
    }

  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav />
        <CenterBlock tracks={tracks} />
        <Sidebar />
        <Player />
      </main>
    </div>
  </div>
  );
};