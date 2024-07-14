"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./player.module.css";
import { ProgressBar } from "./ProgressBar/ProgressBar";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import {
  nextTrack,
  prevTrack,
  setIsPlaying,
  setIsShuffled,
} from "../../store/features/playlistSlise";

export const Player = () => {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoop, setIsLoop] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.5);

  const duration = audioRef.current?.duration || 0;
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const isShuffled = useAppSelector((state) => state.playlist.isShuffled);

  const dispatch = useAppDispatch();

  const tooglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio?.pause();
    } else audio?.play();
    dispatch(setIsPlaying(!isPlaying));
  };

  const toogleLoop = () => {
    const audio = audioRef.current;
    if (isLoop) {
      audio ? (audio.loop = true) : "";
    } else audio ? (audio.loop = false) : "";
    setIsLoop((prev) => !prev);
  };

  const toogleShuffle = () => {

   dispatch(setIsShuffled(!isShuffled))
    console.log(isShuffled)
  };

  const handleNextSong = () => {
    dispatch(nextTrack());
    dispatch(setIsPlaying(true));
  };

  const handlePrevSong = () => {
    dispatch(prevTrack());
    dispatch(setIsPlaying(true));
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (isPlaying) {
      const audio = audioRef.current;
      audio?.play();
    }
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleNextSong);
    }
    return () => audioRef.current?.removeEventListener("ended", handleNextSong);
  });

  if (!currentTrack) {
    return null;
  }

  return (
    <div className={styles.bar}>
      <div className={styles.bar__content}>
        <ProgressBar
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => {
            if (audioRef.current)
              audioRef.current.currentTime = +e.target.value;
          }}
        />
        <div className={styles.bar__player_block}>
          <audio
            ref={audioRef}
            src={currentTrack?.track_file}
            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          ></audio>
          <div className={styles.bar__player}>
            <div className={styles.player__controls}>
              <div className={styles.player__btn_prev}>
                <svg
                  onClick={handlePrevSong}
                  className={styles.player__btn_prev_svg}
                >
                  <use xlinkHref="/img/icons/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              <div className={styles.player__btn_play}>
                <svg
                  onClick={tooglePlay}
                  className={styles.player__btn_play_svg}
                >
                  <use
                    xlinkHref={
                      isPlaying
                        ? "/img/icons/sprite.svg#icon-pause"
                        : "/img/icons/sprite.svg#icon-play"
                    }
                  ></use>
                </svg>
              </div>
              <div className={styles.player__btn_next}>
                <svg
                  onClick={handleNextSong}
                  className={styles.player__btn_next_svg}
                >
                  <use xlinkHref="/img/icons/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div className={styles.player__btn_repeat}>
                <svg
                  onClick={toogleLoop}
                  className={clsx(
                    styles.player__btn_repeat_svg,
                    !isLoop && styles.clicked
                  )}
                >
                  <use xlinkHref="/img/icons/sprite.svg#icon-repeat"></use>
                </svg>
              </div>
              <div className={styles.player__btn_shuffle}>
                <svg
                  onClick={toogleShuffle}
                  className={clsx(
                    styles.player__btn_shuffle_svg,
                    isShuffled && styles.clicked
                  )}
                >
                  <use xlinkHref="/img/icons/sprite.svg#icon-shuffle"></use>
                </svg>
              </div>
            </div>

            <div className={styles.player__track_play}>
              <div className={styles.track_play__contain}>
                <div className={styles.track_play__image}>
                  <svg className={styles.track_play__svg}>
                    <use xlinkHref="/img/icons/sprite.svg#icon-note"></use>
                  </svg>
                </div>
                <div className={styles.track_play__author}>
                  <a className={styles.track_play__author_link} href="#">
                    {currentTrack?.name}
                  </a>
                </div>
                <div className={styles.track_play__album}>
                  <a className={styles.track_play__album_link} href="#">
                    {currentTrack?.album}
                  </a>
                </div>
              </div>

              <div className={styles.track_play__dislike}>
                <svg className={styles.track_play__dislike_svg}>
                  <use
                    className=""
                    xlinkHref="/img/icons/sprite.svg#icon-dislike"
                  ></use>
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.bar__volume_block}>
            <div className={styles.volume__content}>
              <div className={styles.volume__image}>
                <svg className={styles.volume__svg}>
                  <use xlinkHref="/img/icons/sprite.svg#icon-volume"></use>
                </svg>
              </div>

              <div className={styles.volume__progress}>
                <input
                  className={styles.volume__progress_line}
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                    setVolume(+e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
