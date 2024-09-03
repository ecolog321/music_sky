import { FC } from "react";
import { TrackType } from "../../../types/types";
import styles from "./TrackList.module.css";

import { Track } from "./Track/Track";
import { useAppSelector } from "../../../hooks/store";

type Props = {
  tracks: TrackType[];
};

export const TrackList: FC<Props> = ({ tracks }) => {
  const filteredTracks = useAppSelector(
    (store) => store.playlist.filteredPlaylist
  );

  return (
    <div className={styles.content__playlist}>
      {filteredTracks.length >= 1 ? (
        filteredTracks.map((value: TrackType) => (
          <Track key={value._id} track={value} tracks={tracks} />
        ))
      ) : (
        <h2>Треки не найдены</h2>
      )}
    </div>
  );
};
