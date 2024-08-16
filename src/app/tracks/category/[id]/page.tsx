"use client";

import { CenterBlock } from "@components/Main/CenterBlock/CenterBlock";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../../hooks/store";
import { useEffect, useState } from "react";
import { getCategoryPlaylist } from "@api/categoryApi";
import { setPlaylist } from "../../../../store/features/playlistSlise";
import { TrackType } from "../../../../types/types";

export default function CategoryPage() {
  const id = useParams()?.id;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const access = useAppSelector((store) => store.auth.tokens.access);
  const tracks = useAppSelector((store) => store.playlist.filteredPlaylist);
  const [newTracks, setNewTracks] = useState<TrackType[]>([]);

  if (!access) {
    router.push("/singin");
  }

  console.log(tracks);

  useEffect(() => {
    if (access) {
      getCategoryPlaylist(access, id).then((response) => {
        const tracksId: [] = response.data.items;
        for (let index = 0; index < tracks.length; index++) {
          const addTrack: TrackType | undefined = tracks.find(
            (track) => track._id === tracksId[index]
          );
          addTrack ? setNewTracks([...newTracks, addTrack]) : null;
        }

        dispatch(setPlaylist({tracks:newTracks}))

      });
    }
  }, [access, id, dispatch, tracks, newTracks]);
  return <CenterBlock tracks={tracks} />;
}
