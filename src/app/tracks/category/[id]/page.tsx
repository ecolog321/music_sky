"use client";

import { CenterBlock } from "@components/Main/CenterBlock/CenterBlock";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../../hooks/store";
import { useEffect, useState } from "react";
import { getCategoryPlaylist } from "@api/categoryApi";
import { setPlaylist } from "../../../../store/features/playlistSlise";
import { getTracks } from "@api/trackApi";
import { TrackType } from "../../../../types/types";

export default function CategoryPage() {
  const id = useParams()?.id;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const access = useAppSelector((store) => store.auth.tokens.access);
  const tracks = useAppSelector((store) => store.playlist.filteredPlaylist);


  useEffect(() => {
      Promise.all([getTracks(), getCategoryPlaylist(id)]).then(
        ([tracksData, collectionId]) => {
          dispatch(setPlaylist({ tracks: tracksData }));
          const tracksId: number[] = collectionId.data.items;
          const newTracks = tracksData.filter((track: TrackType) =>
            tracksId.includes(track._id)
          );
          dispatch(setPlaylist({ tracks: newTracks }));
        }
      );
  }, [dispatch, id]);
  return <CenterBlock tracks={tracks} />;
}
