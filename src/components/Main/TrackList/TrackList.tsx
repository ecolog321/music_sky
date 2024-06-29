import { TrackType } from "../../../types/types";
import styles from "./TrackList.module.css";
import Image from "next/image";

export const TrackList = ({ tracks }: { tracks: TrackType[] }) => {
  function secondsToMs(d: number) {
    const m: number = Math.floor((d % 3600) / 60);
    const s: number = Math.floor((d % 3600) % 60);

    const mDisplay = m > 10 ? m : "0" + m;
    const sDisplay = s > 10 ? s : "0" + s;
    return mDisplay + ":" + sDisplay;
  }

  return (
    <div className={styles.content__playlist}>
      {tracks.map((value: TrackType) => {
        return (
          <div className={styles.playlist__item} key={value.id}>
            <div className={styles.playlist__track}>
              <div className={styles.track__title}>
                <div className={styles.track__title_image}>
                  <Image
                    className={styles.track__title_svg}
                    src="/img/icons/note.svg"
                    width={24}
                    height={24}
                    alt="note"
                  ></Image>
                </div>
                <div className={styles.track__title_text}>
                  <div className={styles.track__title_link}>
                    <a href="#">{value.name}</a>
                    <span className={styles.track__title_span}></span>
                  </div>
                </div>
              </div>
              <div className={styles.track__author}>
                <a className={styles.track__author_link} href="">
                  {value.author}
                </a>
              </div>
              <div className={styles.track__album}>
                <a className={styles.track__album_link} href="">
                  {value.album}
                </a>
              </div>
              <div className={styles.track__time}>
                <svg className={styles.track__time_svg}>
                  <use xlinkHref="/img/icons/sprite.svg#icon-like"></use>
                </svg>
                <span className={styles.track__time_text}>
                  {" "}
                  {secondsToMs(value.duration_in_seconds)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
