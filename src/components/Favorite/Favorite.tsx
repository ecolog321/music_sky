"use client";
import styles from "./favorite.module.css";
import { Nav } from "@components/Nav/Nav";
import { CenterBlock } from "@components/Main/CenterBlock/CenterBlock";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { Player } from "@components/Player/Player";
import { getFavTracks } from "@api/trackApi";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useRouter } from "next/navigation";
import { setPlaylist } from "../../store/features/playlistSlise";

export const Favorite = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const access = useAppSelector((store) => store.auth.tokens.access);
  const tracks = useAppSelector((store) => store.playlist.filteredPlaylist);
  const likedTracks = useAppSelector((store) => store.playlist.likedTracks);

  if (!access) {
    router.push("/singin");
  }

  useEffect(() => {
    if (access) {
      getFavTracks(access).then((response) => {
        if (response && response.length > 0) {
          dispatch(setPlaylist({ tracks: response }));
        }
      });
    }
  }, [dispatch, likedTracks, access]);

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
