"use client"

import { useEffect } from "react";
import { getFavTracks } from "@api/trackApi";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";

import { setPlaylist } from "../../../store/features/playlistSlise";
import { CenterBlock } from "@components/Main/CenterBlock/CenterBlock";
import { useRouter } from "next/navigation";

export default function FavoritePage() {
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

  return <CenterBlock tracks={tracks}/>;
}
