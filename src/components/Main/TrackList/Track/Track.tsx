import { FC } from "react";
import Image from "next/image";
import styles from "./track.module.css";
import { TrackType } from "../../../../types/types";
import { secondsToMs } from "../../../../utils/secondsToMs";
import { setCurrentTrack } from "../../../../store/features/playlistSlise";
import { useAppDispatch, useAppSelector } from "../../../../hooks/store";
import clsx from "clsx";

type Props = {
  tracks: TrackType[];
  track: TrackType;
};

export const Track: FC<Props> = ({ track, tracks }) => {
  const { name, author, album, duration_in_seconds } = track;
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isPlaying=useAppSelector((state)=>state.playlist.isPlaying);
  const isCurrentTrack = currentTrack?.id === track.id;

  return (
    <div className={styles.playlist__item}>
      <div
        className={styles.playlist__track}
        onClick={() =>
          dispatch(
            setCurrentTrack({currentTrack:track,currentPlaylist:tracks})
          )
        }
      >
         {isCurrentTrack && <div className={clsx(styles.dote, isPlaying && styles.dote_playing)}/>} 
        <div className={styles.track__title}>
          <div className={styles.track__title_image}>
            <Image
              className={styles.track__title_svg}
              src="/img/icons/note.svg"
              width={24}
              height={24}
              alt="note"
            />
          </div>
          <div className={styles.track__title_text}>
            <div className={styles.track__title_link}>
              <a>{name}</a>
              <span className={styles.track__title_span}></span>
            </div>
          </div>
        </div>
        <div className={styles.track__author}>
          <a className={styles.track__author_link}>{author}</a>
        </div>
        <div className={styles.track__album}>
          <a className={styles.track__album_link}>{album}</a>
        </div>
        <div className={styles.track__time}>
          <svg className={styles.track__time_svg}>
            <use xlinkHref="/img/icons/sprite.svg#icon-like"></use>
          </svg>
          <span className={styles.track__time_text}>
            {secondsToMs(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};
