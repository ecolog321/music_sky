import { FC } from "react";
import { TrackType } from "../../../types/types";
import styles from "./TrackList.module.css";

import { Track } from "./Track/Track";

type Props = {
  tracks: TrackType[];
};

export const TrackList: FC<Props> = ({ tracks }) => {

  return (
    <div className={styles.content__playlist}>
      {tracks.map((value: TrackType) => (
        <Track key={value.id} track={value} tracks={tracks} />
      ))}
    </div>
  );
};
