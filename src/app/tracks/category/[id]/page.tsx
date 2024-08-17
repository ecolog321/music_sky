"use client";

import { CenterBlock } from "@components/Main/CenterBlock/CenterBlock";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../../hooks/store";
import { useEffect, useState } from "react";
import { getCategoryPlaylist } from "@api/categoryApi";
import { setPlaylist } from "../../../../store/features/playlistSlise";
import { TrackType } from "../../../../types/types";
import { getTracks } from "@api/trackApi";

export default function CategoryPage() {
  const id = useParams()?.id;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const access = useAppSelector((store) => store.auth.tokens.access);
  const tracks = useAppSelector((store) => store.playlist.filteredPlaylist);

  if (!access) {
    router.push("/singin");
  }

  console.log(tracks);

  useEffect(() => {
    if (access) {
      Promise.all([getTracks(), getCategoryPlaylist(access, id)]).then(
        ([tracksData, collectionId]) => {
          dispatch(setPlaylist({ tracks: tracksData }));
          const tracksId: number[] = collectionId.data.items;
          const newTracks = tracksData.filter((track: any) =>
            tracksId.includes(track._id)
          );
          dispatch(setPlaylist({ tracks: newTracks }));
        }
      );
    }
  }, [dispatch, access]);
  return <CenterBlock tracks={tracks} />;
}
