import { FC } from "react";
import { TrackType } from "../../../types/types";
import styles from "./TrackList.module.css";

import { Track } from "./Track/Track";
import { useAppDispatch, useAppSelector } from "../../../hooks/store";
import { setPlaylist } from "../../../store/features/playlistSlise";

type Props = {
  tracks: TrackType[];
};

export const TrackList: FC<Props> = ({ tracks }) => {

  const filteredTracks=useAppSelector((store)=>store.playlist.filteredPlaylist)

  return (
    <div className={styles.content__playlist}>
      {filteredTracks.map((value: TrackType) => (
        <Track key={value.id} track={value} tracks={tracks} />
      ))}
    </div>
  );
};
