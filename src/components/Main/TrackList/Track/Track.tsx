import { FC } from "react";
import Image from "next/image";
import styles from "./track.module.css";
import { TrackType } from "../../../../types/types";
import { secondsToMs } from "../../../../utils/secondsToMs";
import {
  setCurrentTrack,
  setIsPlaying,
} from "../../../../store/features/playlistSlise";
import { useAppDispatch, useAppSelector } from "../../../../hooks/store";
import clsx from "clsx";
import { useLikeTracks } from "../../../../hooks/useLikeTrack";

type Props = {
  tracks: TrackType[];
  track: TrackType;
};

export const Track: FC<Props> = ({ track, tracks }) => {
  const { name, author, album, duration_in_seconds } = track;
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const isCurrentTrack = currentTrack?._id === track._id;
  const { isLiked, handleLike } = useLikeTracks(track._id);

  const toogleTrack = () => {
    dispatch(setCurrentTrack({ currentTrack: track, currentPlaylist: tracks}));
    dispatch(setIsPlaying(true));
  };

  return (
    <div className={styles.playlist__item}>
      <div className={styles.playlist__track} onClick={toogleTrack}>
        <div className={clsx(styles.track__title, styles.col01)}>
          <div className={styles.track__title_image}>
            <Image
              className={isCurrentTrack ? clsx(styles.dote, isPlaying && styles.dote_playing) : styles.track__title_svg}
              src={isCurrentTrack ? "/img/icons/track.png" : '/img/icons/note.svg'}
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
        <div className={clsx(styles.track__author, styles.col02)}>
          <a className={styles.track__author_link}>{author}</a>
        </div>
        <div className={clsx(styles.track__album, styles.col03)}>
          <a className={styles.track__album_link}>{album}</a>
        </div>
        <div className={clsx(styles.track__time, styles.col04)} onClick={handleLike}>
          <svg
            className={clsx(
              isLiked ? styles.track__liked_svg : styles.track__time_svg
            )}
          >
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
