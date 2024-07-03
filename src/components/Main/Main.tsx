import { Nav } from "../Nav/Nav";
import { Player } from "../Player/Player";
import { Sidebar } from "../Sidebar/Sidebar";
import { CenterBlock } from "./CenterBlock/CenterBlock";
import styles from "./main.module.css";
import { TrackType } from "../../types/types";
import { getTracks } from "@api/trackApi";

export const Main = async () => {
  let tracks: TrackType[] = [];
  let error: string | null = null;

  try {
    tracks = await getTracks();
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
